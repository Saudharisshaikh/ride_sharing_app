import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constant/Colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Images from '../constant/Images'
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../components/TextInput'
import CustomButton from '../components/Buttons/CommonButton'


export default function ChangePasswordScreen() {

    const navigation = useNavigation(); 
    const [password, setPassword] = useState('');
    const [showPasswordError, setShowPasswordError] = useState(false);

  return (
    <ScrollView style={{flex:1,backgroundColor:Colors.WHITE_COLOR}}>
   
   <View
        style={{
          marginStart: responsiveWidth(4),
          marginTop: responsiveHeight(2),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Images.BACK_ICON}
            style={{width: responsiveWidth(3.5), height: responsiveHeight(3.5)}}
          />
        </TouchableOpacity>


        
         <Text
          style={{
            fontSize: responsiveFontSize(4.5),
            marginTop: responsiveHeight(2),
            color: Colors.BLACK_COLOR,
          }}>
          New Password
        </Text>

        <Text style={{marginTop: responsiveHeight(1)}}>
          Enter your new password
        </Text>
       
        </View>



       <View style={{marginTop:responsiveHeight(10)}}>

       <CustomTextInput
          placeholder={'Enter your password'}
          value={password}
          onChangeText={(txt: any) => {
            setPassword(txt);

            setShowPasswordError(password.length <= 8 ? true : false);
          }}
          icon={Images.PASSWORD_LOGIN}
          type={'password'}
          isPassword={true}
          errorMessage={'Enter your password'}
          setPasswordError={showPasswordError}
        />


         <CustomTextInput
          placeholder={'Confirm your password'}
          value={password}
          onChangeText={(txt: any) => {
            setPassword(txt);

            setShowPasswordError(password.length <= 8 ? true : false);
          }}
          icon={Images.PASSWORD_LOGIN}
          type={'password'}
          isPassword={true}
          errorMessage={'Confirm your password'}
          setPasswordError={showPasswordError}
        />
       </View>

       <View style={{marginTop:responsiveHeight(10)}}>

       <CustomButton
        title="Sign up"
        onPress={() => {
          console.log('Login successfully...');
        }}
        margintop={responsiveHeight(5)}
      />
       </View>
       


    </ScrollView>
  )
}