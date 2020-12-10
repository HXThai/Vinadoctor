import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as d3Shape from 'd3-shape';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ServiceHistoryScreenStyles';
import Metric from '../Theme/Metric';
import Color from '../Theme/Color';
import Images from '../Theme/Images';
import Modal from 'react-native-modal';

const ServiceHistory = (props) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Lịch sử giao dịch</Text>
    </View>
  );
};

export default ServiceHistory;
