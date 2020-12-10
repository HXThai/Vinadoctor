import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PersonalScreenStyles';

const PersonalScreen = (props) => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  return (
    <View style={styles.container}>
      <Text>Đây là màn hình cá nhân nhé :))</Text>
    </View>
  );
};

export default PersonalScreen;
