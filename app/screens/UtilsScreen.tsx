import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Colors from '../constant/Colors';
import { Checkbox } from 'react-native-paper';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomButton from '../components/Buttons/CommonButton';

export default function UtilsScreen() {
  const [myCheck, setCheck] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: Colors.WHITE_COLOR }}>
      <Text>SignupScreen now</Text>

      <CustomButton
        customWidth={responsiveWidth(75)}
        title="Login"
        onPress={() => {
          console.log('Login successfully...');
        }}
        margintop={responsiveHeight(5)}
      />

      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            borderColor: Colors.PRIMARY_COLOR,
            height: responsiveHeight(7.5),
            width: responsiveWidth(40),
            borderWidth: 1,
            marginStart: 10,
            marginTop: responsiveHeight(5),
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text>Done</Text>
        </View>

        <CustomButton
          customWidth={responsiveWidth(50)}
          title="Logifffn"
          onPress={() => {
            console.log('Login successfully...');
          }}
          margintop={responsiveHeight(5)}
          marginstart={responsiveWidth(5)}
          marginend={responsiveWidth(5)}
        />
      </View>

      {/* <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    /> */}
      

    </ScrollView>
  );
}
