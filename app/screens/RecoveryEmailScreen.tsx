import {View, Text, Image, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constant/Colors';
import Images from '../constant/Images';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/Buttons/CommonButton';

export default function RecoveryEmailScreen() {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [getCode, setGetCode] = useState(false);
  const [oneInput, setOneInput] = useState('');
  const [twoInput, setTwoInput] = useState('');
  const [threeInput, setThreeInput] = useState('');
  const [fourInput, setFourInput] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE_COLOR}}>
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
          Recovery
        </Text>
          
        


      
        <Text style={{marginTop: responsiveHeight(1)}}>
          {getCode
            ? 'Enter recovery code you received'
            : ' Enter email to receive recovery code'}
        </Text>
       
       
      </View>

      {!getCode && (
        <View style={{marginTop: responsiveHeight(7)}}>
          <CustomTextInput
            placeholder={'Enter your phone no'}
            value={email}
            onChangeText={(txt: any) => {
              setEmail(txt);
              setShowEmailError(txt.length <= 8 ? true : false);
            }}
            icon={Images.PHONE_ICON}
            errorMessage={'Enter your phone no'}
            setPasswordError={showEmailError}
            keyType="numeric"
          />
        </View>
      )}

      {!getCode && (
        <View
          style={{
            marginTop: responsiveHeight(10),
            marginHorizontal: responsiveWidth(3),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity
            onPress={()=> navigation.navigate('ChangePassword')}
            >
          <Text style={{textAlign: 'center'}}>
            Make sure you have already confirmed your phone no. By pressing the
            button below, you’ll receive on phone with a recovery code. Input
            this code on the next page to reset your password.
          </Text>
          </TouchableOpacity>
        </View>

      )}


      {getCode?(
 <View
 style={{
   flexDirection: 'row',
   justifyContent: 'center',
   marginTop: responsiveHeight(10),
 }}>


 <View
   style={{
     justifyContent: 'center',
     height: responsiveHeight(8),
     width: responsiveWidth(15),
     borderColor: Colors.PRIMARY_COLOR,
     borderWidth: responsiveWidth(0.3),
     borderRadius: responsiveWidth(3),
     marginEnd:responsiveWidth(3)
   }}>
   <TextInput
     style={{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       fontSize: responsiveFontSize(3.5),
     }}
     keyboardType='numeric'
     value={oneInput}
     onChangeText={(txt: any) => {
       setOneInput(txt);
       setShowEmailError(email.length <= 8 ? true : false);
       
     }}
   />
 </View>



 <View
   style={{
     justifyContent: 'center',
     height: responsiveHeight(8),
     width: responsiveWidth(15),
     borderColor: Colors.PRIMARY_COLOR,
     borderWidth: responsiveWidth(0.3),
     borderRadius: responsiveWidth(3),
     marginEnd:responsiveWidth(3)
   }}>
   <TextInput
     style={{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       fontSize: responsiveFontSize(3.5),
     }}
     keyboardType='numeric'
     value={twoInput}
     onChangeText={(txt: any) => {
       setTwoInput(txt);
       setShowEmailError(email.length <= 8 ? true : false);
     }}
   />
 </View>


 <View
   style={{
     justifyContent: 'center',
     height: responsiveHeight(8),
     width: responsiveWidth(15),
     borderColor: Colors.PRIMARY_COLOR,
     borderWidth: responsiveWidth(0.3),
     borderRadius: responsiveWidth(3),
     marginEnd:responsiveWidth(3)
   }}>
   <TextInput
     style={{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       fontSize: responsiveFontSize(3.5),
     }}
     keyboardType='numeric'
     value={threeInput}
     onChangeText={(txt: any) => {
       setThreeInput(txt);
       setShowEmailError(email.length <= 8 ? true : false);
     }}
   />
 </View>



 <View
   style={{
     justifyContent: 'center',
     height: responsiveHeight(8),
     width: responsiveWidth(15),
     borderColor: Colors.PRIMARY_COLOR,
     borderWidth: responsiveWidth(0.3),
     borderRadius: responsiveWidth(3),
     marginEnd:responsiveWidth(3)
   }}>
   <TextInput
     style={{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       fontSize: responsiveFontSize(3.5),
     }}
     keyboardType='numeric'
     value={fourInput}
     onChangeText={(txt: any) => {
       setFourInput(txt);
       setShowEmailError(email.length <= 8 ? true : false);
     }}
   />
 </View>

</View>
      ):null}
     

      <CustomButton
        title="Get The Code"
        onPress={() => {
          console.log('Login successfully...');
          setGetCode(true);
        }}
        margintop={responsiveHeight(5)}
      />
    </View>
  );
}
