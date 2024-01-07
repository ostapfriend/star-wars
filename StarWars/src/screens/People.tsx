import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../AppNavigator.tsx';
import {colors} from '../utils/colors.ts';
import ArrowBack from '../assets/ArrowBack.svg';
import {DefaultUserSvg} from "../components";
import {styles} from "../utils/fontStyles.ts";

type PeopleScreenRouteProp = RouteProp<RootStackParamList, 'People'>;
type PeopleScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'People'>;

interface PeopleScreenProps {
  route: PeopleScreenRouteProp;
  navigation: PeopleScreenNavigationProp;
}

const PeopleScreen: React.FC<PeopleScreenProps> = ({
  route,
  navigation,
}) => {

  const { people } = route.params;

  const navigateToMain = () => {
    navigation.navigate('Main', {});
  };

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.gray,
      }}
    >
      <TouchableOpacity
        onPress={navigateToMain}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 8,
          width: '100%',
          height: 52,
        }}
      >
        <ArrowBack />
      </TouchableOpacity>
      <View
        style={{
          height: '95%',
          width: '100%',
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 5,
            height: '100%',
            borderRadius: 8,
            marginHorizontal: 8,
            paddingVertical: 36,
            backgroundColor: colors.white,
          }}
        >
          <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            backgroundColor: colors.gray,
            borderRadius: 50,
          }}>
            <DefaultUserSvg size={50} />
          </View>
          <Text style={[styles.text, { fontSize: 36, fontWeight: 'bold' }]}>
            {people.name}
          </Text>
          <Text style={[styles.text, { fontSize: 24 }]}>
            Gender: {people.gender}
          </Text>
          <Text style={[styles.text, { fontSize: 24 }]}>
            Height: {people.height}
          </Text>
          <Text style={[styles.text, { fontSize: 24 }]}>
            Eyes: {people.eye_color}
          </Text>
          <Text style={[styles.text, { fontSize: 24 }]}>
            Skin: {people.skin_color}
          </Text>
          <Text style={[styles.text, { fontSize: 24 }]}>
            Weight: {people.mass}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PeopleScreen;
