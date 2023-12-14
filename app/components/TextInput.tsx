import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Colors from '../constant/Colors';
import Images from '../constant/Images';

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  icon: any; // Replace 'any' with a more specific type if possible
  type?: string; // Define a more specific type if applicable
  keyType?: KeyboardTypeOptions; // Define a more specific type if applicable
  isPassword?: boolean;
  errorMessage?: string;
  setPasswordError?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyType,
  isPassword = false,
  errorMessage,
  setPasswordError = false,
}) => {
  const [showPassword, setShowPassword] = useState(!type ? false : true);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image resizeMode="contain" source={icon} style={styles.icon} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          keyboardType={keyType}
          secureTextEntry={showPassword}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Image
              resizeMode="contain"
              source={showPassword ? Images.EYE_OFF : Images.EYE_ON}
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    backgroundColor: Colors.WHITE_COLOR,
    marginTop: responsiveHeight(2),
    elevation: 2,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  errorText: {
    color: Colors.ACCENT_COLOR,
    fontWeight: '600',
    marginTop: responsiveHeight(0.5),
  },

  mainContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(13),
    flexDirection: 'column',
    alignSelf: 'center',
  },

  icon: {
    width: responsiveWidth(5),
    height: responsiveHeight(5),
    marginStart: responsiveWidth(4),
  },
  input: {
    marginLeft: 10,
    width: responsiveWidth(68),
  },
  passwordIcon: {
    width: responsiveWidth(5),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(1),
  },
});

export default CustomTextInput;
