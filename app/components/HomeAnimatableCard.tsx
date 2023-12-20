import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Image,
  TextInput,
} from 'react-native';
import React, {useCallback, useState} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Images from '../constant/Images';
import Colors from '../constant/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CartUpperItem from './CartUpperItem';
import CustomButton from './Buttons/CommonButton';

const HomeAnimatableCard = () => {
  const [refreshing, setRefreshing] = useState(false);

  const [staringPoint, setStartingPoint] = useState('');
  const [number_people, setNumberPeople] = useState('');
  const [destination, setDestination] = useState('');
  const [rideTime, setRideTime] = useState('');
  const [specialInstruction, setSpecialInstruction] = useState('');
  const navigation: any = useNavigation();
  const [activeSearch, setActiveSearch] = useState(true);
  const [activeRide, setActiveRide] = useState(false);

  const toggleBackground = () => {
    setActiveRide(!activeRide);
    setActiveSearch(!activeSearch);
    setStartingPoint('')
    setDestination('')
    setRideTime('')
    setSpecialInstruction('')
    setNumberPeople('')
    
  };
  const areFieldsFilled = () => {
    return (
      staringPoint.trim() !== '' &&
      number_people.trim() !== '' &&
      destination.trim() !== '' &&
      rideTime.trim() !== '' &&
      specialInstruction.trim() !== ''
    );
  };
  
  const isButtonEnabled = areFieldsFilled();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <View style={[styles.card]}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity onPress={toggleBackground}>
              <View
                style={{
                  width: responsiveWidth(35),
                  height: responsiveHeight(4),
                  borderRadius: responsiveHeight(2),
                  backgroundColor: activeSearch
                    ? Colors.SEARCH_BEHIND
                    : Colors.WHITE_COLOR,
                  flexDirection: 'row',
                }}>
                <Image
                  source={
                    activeSearch
                      ? Images.SEARCH_RIDE_ACTIVE
                      : Images.SEARCH_RIDE
                  }
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(4),
                    marginStart: responsiveWidth(3),
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    marginStart: responsiveWidth(1),
                    alignSelf: 'center',
                    color: activeSearch
                      ? Colors.PRIMARY_COLOR
                      : Colors.BLACK_COLOR,
                  }}>
                  Search Ride
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleBackground}>
              <View
                style={{
                  width: responsiveWidth(35),
                  height: responsiveHeight(4),
                  borderRadius: responsiveHeight(2),
                  flexDirection: 'row',
                  marginStart: responsiveWidth(3),
                  backgroundColor: activeRide
                    ? Colors.SEARCH_BEHIND
                    : Colors.WHITE_COLOR,
                }}>
                <Image
                  source={activeRide ? Images.CAR_RIDE_ACTIVE : Images.CAR_RIDE}
                  style={{
                    height: responsiveHeight(4.5),
                    width: responsiveWidth(4.5),
                    marginStart: responsiveWidth(3),
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    marginStart: responsiveWidth(1),
                    alignSelf: 'center',
                    color: activeRide
                      ? Colors.PRIMARY_COLOR
                      : Colors.BLACK_COLOR,
                  }}>
                  Offer Ride
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.STARTNG_POINT_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(0.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TextInput
                value={staringPoint}
                onChangeText={txt => {
                  setStartingPoint(txt);
                }}
                placeholder={'Choose your starting point'}
                style={{paddingVertical: 8}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.PIN_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(0.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TextInput
                value={destination}
                onChangeText={txt => {
                  setDestination(txt);
                }}
                placeholder={'Choose destination'}
                style={{paddingVertical: 8}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.RIDE_TIME_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(0.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TextInput
                value={rideTime}
                onChangeText={txt => {
                  setRideTime(txt);
                }}
                placeholder={'Pick a time'}
                style={{paddingVertical: 8}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={
                activeSearch ? Images.NUMBER_OF_SEAT_ICON : Images.RIDE_VEHICLE
              }
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(0.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TextInput
                value={number_people}
                onChangeText={txt => {
                  setNumberPeople(txt);
                }}
                placeholder={
                  activeSearch ? 'Number of seats' : 'Select your Vehicle'
                }
                style={{paddingVertical: 8}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.NOTE_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(0.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TextInput
                value={specialInstruction}
                onChangeText={txt => {
                  setSpecialInstruction(txt);
                }}
                placeholder={'Special instructions [ex:pet,loggers]'}
                style={{paddingVertical: 8}}
              />
            </View>
          </View>

          <CustomButton
            title={activeSearch?"Find":'Offer'}
           customWidth={responsiveWidth(70)}
            customHeight={responsiveHeight(6.3)}
            backgroundColor = {isButtonEnabled ? Colors.PRIMARY_COLOR : '#e1e1e1'} 
            disabledButton={!isButtonEnabled}
            onPress={() => {
              console.log('Login');
            }}
            margintop={responsiveHeight(3)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeAnimatableCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: '#000',
    fontSize: responsiveFontSize(10),
    marginBottom: responsiveHeight(30),
  },
  cardContainer: {
    width: '90%',
    flex: 1,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    height: '57%',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 25,
    borderRadius: 25,
    resizeMode: 'cover',
    padding: 15,
    alignSelf: 'center',
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1.5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  buttons: {
    margin: 20,
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
  lineView: {
    width: '100%',
    borderColor: Colors.GRAY_DEFAULT_COLOR,
    borderWidth: 0.5,
    marginVertical: responsiveHeight(10),
  },
  timeDistance: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(5),
  },
  btnContainer: {
    marginTop: responsiveHeight(20),
    position: 'absolute',
    bottom: responsiveHeight(0),
    width: '100%',
    paddingHorizontal: responsiveWidth(10),
  },

  modalText: {
    marginVertical: responsiveHeight(15),
    textAlign: 'center',
    fontSize: 15,
    color: Colors.GRAY_DEFAULT_COLOR,
  },
});
