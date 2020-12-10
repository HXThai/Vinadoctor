import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Images from '../Theme/Images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductScreenStyles';
import Color from '../Theme/Color';

const ProductScreen = (props) => {
  const [tab, setTab] = useState(0);
  const [dataTab, setDataTab] = useState([
    {
      name: 'Nổi bật',
      id: 0,
    },
    {
      name: 'Nhiệt kế điện tử',
      id: 1,
    },
    {
      name: 'Máy đo huyết áp',
      id: 2,
    },
    {
      name: 'Vitamin',
      id: 3,
    },
    {
      name: 'Máy trợ tim',
      id: 4,
    },
    {
      name: 'Máy thở',
      id: 5,
    },
  ]);
  const [dataProduct, setDataProduct] = useState([
    {
      image: Images.productImage,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.productImage,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.productImage,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.productImage,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.productImage,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.productImage,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.productImage,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
  ]);
  const onClickChangeTab = (value) => {
    setTab(value);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  const _showProductDetail = () => {
    props.navigation.navigate('ProductDetailScreen');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 15,
            alignItems: 'center',
          }}>
          <ScrollView horizontal={true}>
            {dataTab.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => onClickChangeTab(item.id)}
                style={{
                  borderColor: Color.main,
                  height: 35,
                  // borderBottomWidth: item.id === tab ? 1 : 0,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: item.id === tab ? Color.main : '#898989',
                    marginRight: 15,
                    borderBottomWidth: item.id === tab ? 1 : 0,
                    borderBottomColor: Color.main,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={{}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                // marginTop: 15,
                marginBottom: 70,
                flexWrap: 'wrap',
                // justifyContent: 'space-between',
                flex: 1,
              }}>
              {dataProduct.map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50%',
                      // marginTop: 15,
                    }}>
                    <View
                      style={{
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.8,
                        shadowRadius: 0,
                        elevation: 1,
                        width: 164,
                        height: 230,
                        backgroundColor: 'white',
                        marginBottom: 8,
                        marginTop: 15,
                        marginLeft: 8,
                        borderRadius: 10,
                        flexDirection: 'column',
                        marginRight: 10,
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          _showProductDetail();
                        }}>
                        <Image
                          source={item.image}
                          style={{width: 164, height: 164}}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          width: '90%',
                        }}>
                        <Text style={{fontSize: 12, color: Color.price}}>
                          {item.title}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 5,
                            justifyContent: 'space-between',
                            width: '100%',
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontSize: 12,
                                color: Color.priceDiscount,
                              }}>
                              {item.priceDiscount}{' '}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                color: Color.price,
                                textDecorationLine: 'line-through',
                              }}>
                              {item.price}
                            </Text>
                          </View>
                          <MaterialIcons
                            name={'add-shopping-cart'}
                            size={23}
                            color={Color.price}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
