import {StyleSheet, Text, View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import LargeText from './Texts/LargeText';
import Colors from '../constant/Colors';


// type ImageProps = {
//   text?: string;
//   image?: ImageSourcePropType | any;
// };
const CartUpperItem = ({Imaged, text}: any) => {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.imageContainer}>
        <Imaged width={25} height={25} />
      </View>

      <LargeText
        textStyles={{
          color: Colors.BLACK_COLOR,
          marginLeft: responsiveWidth(10),
          letterSpacing: 1,
          fontSize: responsiveHeight(17),
        }}>
        {text}
      </LargeText>
    </View>
  );
};

export default CartUpperItem;

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    backgroundColor: Colors.BLACK_COLOR,
    padding: 10,
    borderRadius:responsiveHeight(100),
    alignItems: 'center',
  },
});
