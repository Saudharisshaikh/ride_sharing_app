import {View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import HomeAnimatableCard from '../components/HomeAnimatableCard';
import Images from '../constant/Images';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.WHITE_COLOR}
        barStyle={'dark-content'}
      />

      <ImageBackground
        source={Images.HOME_MAP}
        style={{
          flex: 1,
          backgroundColor: Colors.PRIMARY_COLOR,
        }}>
        <HomeAnimatableCard />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
});
