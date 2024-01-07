import React, {useMemo} from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../utils/colors.ts';
import { People } from '../utils/interfaces.ts';
import { CustomButton, List } from '../components';
import { resetPeopleFavourites } from '../store/favouritePeoples';
import { RootState } from '../store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppNavigator.tsx';
import {RouteProp} from "@react-navigation/native";

type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;
export type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

interface MainScreenProps {
  route: MainScreenRouteProp,
  navigation: MainScreenNavigationProp;
}

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const favouritesPeople = useSelector((state: RootState) => state.favouritesPeoples.favouritesPeoples);
  const dispatch = useDispatch();

  const countGenders: [number, number, number] = useMemo(() => {
    if (favouritesPeople.length === 0) return [0, 0, 0];

    const maleLength = favouritesPeople.filter((item: People) => item.gender === 'male').length;
    const femaleLength = favouritesPeople.filter((item: People) => item.gender === 'female').length;

    return [maleLength, femaleLength, favouritesPeople.length - (maleLength + femaleLength)];
  }, [favouritesPeople.length]);

  const handlePressClearFans = () => {
    dispatch(resetPeopleFavourites());
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.gray,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 14,
          paddingVertical: 8,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 15,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Fans
          </Text>
          <CustomButton
            onPress={handlePressClearFans}
            text={'Clear fans'}
            textTransform={'uppercase'}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            width: '100%',
          }}
        >
          <View style={{
            padding: 8,
            backgroundColor: colors.white,
            borderRadius: 8,
            width: '32%',
          }}>
            <Text>{countGenders[0]}</Text>
            <Text>Female fans</Text>
          </View>
          <View style={{
            padding: 8,
            backgroundColor: colors.white,
            borderRadius: 8,
            width: '32%',
          }}>
            <Text>{countGenders[1]}</Text>
            <Text>Male fans</Text>
          </View>
          <View style={{
            padding: 8,
            backgroundColor: colors.white,
            borderRadius: 8,
            width: '32%',
          }}>
            <Text>{countGenders[2]}</Text>
            <Text>Others</Text>
          </View>
        </View>
        <List navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainScreen;
