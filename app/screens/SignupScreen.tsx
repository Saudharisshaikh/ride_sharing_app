import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
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
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {logInSchema} from '../validations';
import { signUpSchema } from '../validations';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const[phone,setPhone] = useState('');
  const[ConfirmPassword,setConfirmPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation: any = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

   const handleSignup = async() =>{
    await  navigation.navigate('Home')
   }

  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.WHITE_COLOR}}>
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
          marginTop: responsiveHeight(3),
          color: Colors.BLACK_COLOR,
        }}>
        Create Account
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Utils')}>
          <Text style={{marginStart: responsiveWidth(5)}}>
            Already have account?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              marginStart: responsiveWidth(3),
              color: Colors.PRIMARY_COLOR,
              fontWeight: '500',
            }}>
            Sign in now!
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: responsiveHeight(4)}}>
        {/* <CustomTextInput
          placeholder={'Enter your email'}
          value={email}
          onChangeText={(txt: any) => {
            setEmail(txt);
            setShowEmailError(email.length <= 8 ? true : false);
          }}
          icon={Images.EMAIL_LOGIN}
          errorMessage={'Enter your email'}
          setPasswordError={showEmailError}
        /> */}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <CustomTextInput
                placeholder={'Enter your email'}
                onChangeText={onChange}
                value={value}
                icon={Images.EMAIL_LOGIN}
                errorMessage={errors.email?.message}
              />
            );
          }}
          name="email"
        />
  
        
        <Controller
         control={control}
         render={({field:{onChange,onBlur,value}})=>{
          return(
            <CustomTextInput
             placeholder={'Enter your phone no'}
             onChangeText={onChange}
             value={value}
             icon={Images.PHONE_ICON}
             errorMessage={errors.phone?.message}
             keyType='numeric'
            />
          )
         }}
          name='phone'
         />
       

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <CustomTextInput
                placeholder={'Enter your password'}
                onChangeText={onChange}
                value={value}
                icon={Images.PASSWORD_LOGIN}
                isPassword={true}
                errorMessage={errors.password?.message}
              />
            );
          }}
          name="password"
        />

        {/* <CustomTextInput
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
        /> */}
       
       <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <CustomTextInput
                placeholder={'Confirm your password'}
                onChangeText={onChange}
                value={value}
                icon={Images.PASSWORD_LOGIN}
                isPassword={true}
                errorMessage={errors.confirmPassword?.message}
              />
            );
          }}
          name="confirmPassword"
        />


      </View>

      <CustomButton
        title="Sign up"
        onPress={handleSubmit(handleSignup)}
        margintop={responsiveHeight(5)}
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
        <TouchableOpacity onPress={() => console.log('Google')}>
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

        <TouchableOpacity onPress={() => console.log('Facebook')}>
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

        <TouchableOpacity onPress={() => console.log('Twitter')}>
          <Image
            resizeMode="contain"
            source={Images.TWITTER}
            style={{
              width: responsiveWidth(10),
              height: responsiveHeight(10),
              marginStart: responsiveWidth(3),
              marginEnd: responsiveWidth(1),
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
