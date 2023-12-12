import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';
import Images from '../constant/Images';

import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/Buttons/CommonButton';
import CustomTextInput from '../components/TextInput';
import {Checkbox} from 'react-native-paper';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation: any = useNavigation();
  const [myCheck, setCheck] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE_COLOR}}>
      <Image
        source={Images.LoginBackground}
        resizeMode="contain"
        style={{
          width: responsiveWidth(40),
          height: responsiveHeight(40),
          marginTop: responsiveHeight(-5),
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      />

      <Text
        style={{
          color: Colors.DARK_PRIMARY,
          fontSize: 15,
          fontWeight: '500',
          alignSelf: 'center',
          marginTop: -responsiveHeight(11),
        }}>
        POOLERO
      </Text>

      <Text
        style={{
          fontSize: responsiveFontSize(4.5),
          fontWeight: '600',
          marginStart: responsiveWidth(4),
          marginTop: responsiveHeight(2),
          color: Colors.BLACK_COLOR,
        }}>
        Welcome Back!
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={{marginStart: responsiveWidth(5)}}>
          Don't have an account?
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              marginStart: responsiveWidth(3),
              color: Colors.PRIMARY_COLOR,
              fontWeight: '500',
            }}>
            Sign up now!
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: responsiveHeight(4)}}>
        <CustomTextInput
          placeholder={'Enter your email'}
          value={email}
          onChangeText={(txt: any) => {
            setEmail(txt);
            setShowEmailError(email.length <= 8 ? true : false);
          }}
          icon={Images.EMAIL_LOGIN}
          errorMessage={'Enter your email'}
          setPasswordError={showEmailError}
        />

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
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Checkbox
          status={myCheck ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheck(!myCheck);
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('RecoveryEmail')}>
          <Text style={{marginEnd: responsiveWidth(6), fontWeight: 'bold'}}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        title="Login"
        onPress={() => {
          console.log('Login successfully...');
        }}
        margintop={responsiveHeight(3)}
      />
      <View style={{marginTop: responsiveHeight(2), alignItems: 'center'}}>
        
        
        <Text style={{fontWeight: '600', fontSize: responsiveFontSize(2)}}>
          - - - - - - - OR - - - - - - -
        </Text>
    
       
      </View>

      <View
        style={{
         
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>

       <TouchableOpacity 
       onPress={()=> console.log('Google')}
       >
       <Image
          source={Images.GOOGLE}
          resizeMode="contain"
          style={{
            width: responsiveWidth(10),
            height: responsiveHeight(10),
            marginEnd: responsiveWidth(3),
          }}
        />
       </TouchableOpacity>

        <TouchableOpacity onPress={()=> console.log('Facebook')}>

        <Image
          source={Images.FACEBOOK}
          style={{
            width: responsiveWidth(10),
            resizeMode: 'contain',
            height: responsiveHeight(10),
            marginStart: responsiveWidth(3),
            marginEnd: responsiveWidth(3),
          }}
        />
        </TouchableOpacity>
        
       <TouchableOpacity onPress={()=> console.log('Twitter')}>

       <Image
          resizeMode='contain'
          source={Images.TWITTER}
          style={{width: responsiveWidth(10), 
            height: responsiveHeight(10),
            marginStart: responsiveWidth(3),
            marginEnd: responsiveWidth(1),
          }}
        />
       </TouchableOpacity>

      </View>


    </View>
  );
}
