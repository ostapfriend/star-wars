import React, {Fragment, useEffect, useState} from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { colors } from '../utils/colors.ts';
import { People}  from "../utils/interfaces.ts";
import {
  CustomTextInput,
  FooterList,
  HeaderList,
  Item,
} from './index.ts';
import {
  getCountPagesPaginatedPeoples,
  getPaginatedPeoples,
} from '../api/swapApi.tsx';
import { MainScreenNavigationProp } from "../screens/Main.tsx";

interface ListProps {
  navigation: MainScreenNavigationProp,
}

const List = ({ navigation }: ListProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [countPages, setCountPages] = useState(0);
  const [peoples, setPeoples] = useState<People[]>([]);
  const [copyPeoples, setCopyPeoples] = useState<People[]>([]);
  const [value, setValue] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountPagesPaginatedPeoples()
      .then(count => {
        setCountPages(count);
      });

    handleGetPaginatedPeoples(1)
      .then(() => setCurrentPage(1));
  }, []);

  const handlePressPrevOrNext = async (type: 'next' | 'prev') => {
    setPeoples([]);
    setIsLoading(true);

    if (type === 'next') {
      if (currentPage === countPages) return;

      await handleGetPaginatedPeoples(currentPage + 1);
      setCurrentPage(currentPage => currentPage + 1);
      return;
    }

    if (currentPage === 1) return;

    await handleGetPaginatedPeoples(currentPage - 1);
    setCurrentPage(currentPage => currentPage - 1);
  };

  const handleGetPaginatedPeoples = async (page: number) => {
    await getPaginatedPeoples(page)
      .then((resPeoples) => {
        if (resPeoples.length > 0) {
          setPeoples(resPeoples);
          setCopyPeoples(resPeoples);
          setIsLoading(false);
        }
      });
  };

  const handleFilterByName = (value: string) => {
    setValue(value);

    if (value.length === 0) {
      setPeoples(copyPeoples);
      return;
    }

    const filteredPeoples = peoples
      .filter((people: People) => people.name.toLowerCase().includes(value.toLowerCase()));

    setPeoples(filteredPeoples);
  }

  return (
  <ScrollView
    horizontal
    contentContainerStyle={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      width: peoples.length === 0 ? '100%' : '200%',
      backgroundColor: colors.white,
      padding: 8,
      borderRadius: 8,
    }}
  >
    <CustomTextInput
      placeholder={'Search'}
      text={value}
      onChangeText={(value) => handleFilterByName(value)}
    />
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        backgroundColor: isLoading ? colors.white : colors.gray,
        width: '100%',
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 8,
      }}
    >
      {isLoading && (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
          }}
        >
          <ActivityIndicator size={'large'} color={colors.red} />
        </View>
      )}
      {!isLoading && (
        <Fragment>
          <HeaderList />
          {peoples.length > 0
            && peoples.map((item, index) => (
              <Item key={index} item={item} navigation={navigation} />
            ))}
          {peoples.length === 0 && !isLoading && (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
              }}
            >
              <Text>No result...</Text>
            </View>
          )}
        </Fragment>
      )}

      <FooterList
        currentPage={currentPage}
        countAllItems={countPages * 10}
        onPressPrev={() => handlePressPrevOrNext('prev')}
        onPressNext={() => handlePressPrevOrNext('next')}
      />
    </View>
  </ScrollView>
  )
}

export default List;
