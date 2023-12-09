import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Images from '../constant/Images';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function WelcomeScreen() {
  const navigation: any = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // Change 3000 to the desired duration in milliseconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Image
        resizeMode="contain"
        source={Images.LoginBackground}
        style={{width: responsiveWidth(70),
             height: responsiveHeight(70)}}
      />
    </View>
  );
}
