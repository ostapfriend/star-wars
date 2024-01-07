import React, { Fragment } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { HeartSvg } from "./index.ts";
import { formatBirthDate } from "../utils/birthdayFunctions.ts";
import { addOrRemovePeopleToFavourites } from "../store/favouritePeoples";
import { People } from "../utils/interfaces.ts";
import { RootState } from "../store";
import { styles } from "../utils/fontStyles.ts";
import { colors } from "../utils/colors.ts";
import { MainScreenNavigationProp } from "../screens/Main.tsx";

interface ItemProps {
  item: People,
  navigation: MainScreenNavigationProp,
}

const Item = ({ item, navigation }: ItemProps) => {
  const dispatch = useDispatch();
  const favouritesPeople = useSelector((state: RootState) => state.favouritesPeoples.favouritesPeoples);

  const navigateToPeople = () => {
    if (navigation) {
      navigation.navigate('People', { people: item });
    }
  };

  const handlePressFavourite = (e: any) => {
    e.stopPropagation();
    dispatch(addOrRemovePeopleToFavourites(item));
  };

  return (
    <TouchableHighlight
      onPress={navigateToPeople}
      underlayColor={colors.gray}
      style={{
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 52,
        width: '100%',
      }}
    >
      <Fragment>
        <View style={{ width: '6%' }}>
          <TouchableHighlight
            underlayColor={colors.gray}
            onPress={handlePressFavourite}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 15,
              paddingTop: 4,
              marginLeft: 2,
            }}
          >
            <HeartSvg filled={favouritesPeople.includes(item)} />
          </TouchableHighlight>
        </View>
        <Text style={[styles.text, { width: '20%', }]}>
          {item.name}
        </Text>
        <Text style={[styles.text, { width: '20%', }]}>
          {formatBirthDate(item.birth_year)}
        </Text>
        <Text style={[styles.text, { width: '14%', }]}>
          {item.gender === 'n/a' ? 'other' : item.gender}
        </Text>
        <Text style={[styles.text, { width: '20%', }]}>
          {item.homeworld}
        </Text>
        <Text style={[styles.text, { width: '20%', }]}>
          {item.species.length > 0 ? item.species[0] : 'unknown'}
        </Text>
      </Fragment>
    </TouchableHighlight>
  )
}

export default Item;

