import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../Theme/Images';
import ToggleSwitch from 'toggle-switch-react-native';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AccumulatePointScreenStyles';
import Color from '../Theme/Color';

const AccumulatePointScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Màn hình tích điểm nhé :))</Text>
    </View>
  );
};

export default AccumulatePointScreen;
