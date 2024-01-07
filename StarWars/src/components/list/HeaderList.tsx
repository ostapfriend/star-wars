import React from "react";
import { Text, View } from "react-native";

import { HeartSvg } from "../index.ts";
import { colors } from "../../utils/colors.ts";
import { styles } from "../../utils/fontStyles.ts";

const HeaderList = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
      }}
    >
      <View style={{ width: '6%' }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            borderRadius: 15,
            paddingTop: 4,
          }}
        >
          <HeartSvg color={colors.black} />
        </View>
      </View>
      <Text style={[styles.text, { width: '20%', }]}>
        Name
      </Text>
      <Text style={[styles.text, { width: '20%', }]}>
        Birth Year
      </Text>
      <Text style={[styles.text, { width: '14%', }]}>
        Gender
      </Text>
      <Text style={[styles.text, { width: '20%', }]}>
        Home World
      </Text>
      <Text style={[styles.text, { width: '20%', }]}>
        Species
      </Text>
    </View>
  );
}

export default HeaderList;
