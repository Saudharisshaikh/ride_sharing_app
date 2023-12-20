import { View, Text, Image } from 'react-native'
import React from 'react'
import { OnboardFlow } from 'react-native-onboard';
import Images from '../constant/Images';
import {useNavigation} from '@react-navigation/native';
Image

export default function OnBoardingScreen() {
  const navigation: any = useNavigation();
  return (
    <OnboardFlow
    pages={[
      {
        title: 'Request Ride',
        subtitle: 'Request a ride get picked up \n near by community driver.',
        imageUri: Image.resolveAssetSource(Images.ONBOARDING_PAGE_THREE).uri
      },
      {
        title: 'Confirm Your Ride',
        subtitle: 'Huge drivers network helps you, find comfortable safe and cheap ride.',
        imageUri: Image.resolveAssetSource(Images.ONBOARDING_PAGETWO).uri
      },
      {
        title: 'Track Your Ride',
        subtitle: 'Request a ride get picked up \n near by community driver.',
        imageUri: Image.resolveAssetSource(Images.ONBOARDING_PAGEONE).uri
      },
    ]}
    type={'fullscreen'}
    autoPlay={true}
    onDone={()=> navigation.replace('DrawerNavigator')}
  />
);
  
}