import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

import Chevron from "./svg/Chevron.tsx";
import { styles } from "../utils/fontStyles.ts";
import { colors } from "../utils/colors.ts";


interface FooterListProps {
  currentPage: number,
  countAllItems: number,
  onPressPrev: () => {},
  onPressNext: () => {},
}

const FooterList = ({
  currentPage,
  countAllItems,
  onPressPrev,
  onPressNext,
}: FooterListProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        minHeight: 52,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingHorizontal: 8,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <Text style={styles.text}>
          {currentPage === 1 ? '1' : currentPage * 10}-{currentPage * 10 + 1} of {countAllItems}
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableHighlight
            onPress={onPressPrev}
            style={{
              width: 30,
              height: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}
            underlayColor={colors.gray}
          >
            <Chevron direction={'left'} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={onPressNext}
            style={{
              width: 30,
              height: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}
            underlayColor={colors.gray}
          >
            <Chevron direction={'right'} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

export default FooterList;
