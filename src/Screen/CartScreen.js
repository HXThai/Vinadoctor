import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Images from '../Theme/Images';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import update from 'immutability-helper';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductDetailScreenStyles';
import Color from '../Theme/Color';

const CartScreen = (props) => {
  const [dataProduct, setDataProduct] = useState([
    {
      id: 0,
      image: Images.imageProductInCart,
      title: 'Vitamin C',
      price: 29000,
      numberOfProduct: 2,
      isCheck: false,
    },
    {
      id: 1,
      image: Images.imageProductInCart,
      title: 'Vitamin C',
      price: 29000,
      numberOfProduct: 2,
      isCheck: true,
    },
    {
      id: 2,
      image: Images.imageProductInCart,
      title: 'Vitamin C',
      price: 29000,
      numberOfProduct: 2,
      isCheck: true,
    },
    {
      id: 3,
      image: Images.imageProductInCart,
      title: 'Vitamin C',
      price: 29000,
      numberOfProduct: 2,
      isCheck: false,
    },
    {
      id: 4,
      image: Images.imageProductInCart,
      title: 'Vitamin C',
      price: 29000,
      numberOfProduct: 2,
      isCheck: false,
    },
    {
      id: 5,
      image: Images.imageProductInCart,
      title: 'Vitamin C',
      price: 29000,
      numberOfProduct: 2,
      isCheck: false,
    },
    {
      id: 6,
      image: Images.imageProductInCart,
      title: 'Vitamin C',
      price: 29000,
      numberOfProduct: 2,
      isCheck: false,
    },
    {
      id: 7,
      image: Images.imageProductInCart,
      title: 'Vitamin C',
      price: 29000,
      numberOfProduct: 2,
      isCheck: false,
    },
  ]);

  const handleSelectProduct = (value) => {
    // console.log(value);
    const newData = update(dataProduct, {
      [value]: {
        $toggle: ['isCheck'],
      },
    });
    // console.log(newData);
    setDataProduct(newData);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <ScrollView>
          <View style={{marginLeft: 10, marginRight: 10}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <ScrollView>
                  {dataProduct.map((item, index) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 10,
                        }}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity
                            onPress={() => handleSelectProduct(index)}>
                            <MaterialIcons
                              name={
                                item.isCheck
                                  ? 'radio-button-checked'
                                  : 'radio-button-unchecked'
                              }
                              size={24}
                              color={Color.main}
                            />
                          </TouchableOpacity>
                          <View style={{marginLeft: 5}}>
                            <Image
                              source={item.image}
                              // resizeMode="contain"
                              style={{width: 100, height: 100}}
                            />
                          </View>
                          <View
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              height: 80,
                            }}>
                            <Text style={{fontSize: 12}}>{item.title}</Text>
                            <Text
                              style={{
                                fontSize: 14,
                                color: Color.priceDiscount,
                              }}>
                              {item.price}
                              {'đ'}
                            </Text>
                            <View
                              style={{
                                width: 120,
                                height: 24,
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#D2D2D2',
                                flexDirection: 'row',
                              }}>
                              <View
                                style={{
                                  width: '33%',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRightWidth: 1,
                                  borderRightColor: '#D2D2D2',
                                }}>
                                <MaterialIcons
                                  name={'remove'}
                                  size={20}
                                  color={Color.price}
                                />
                              </View>
                              <View
                                style={{
                                  width: '33%',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRightWidth: 1,
                                  borderRightColor: '#D2D2D2',
                                }}>
                                <Text>{item.numberOfProduct}</Text>
                              </View>
                              <View
                                style={{
                                  width: '33%',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <MaterialIcons
                                  name={'add'}
                                  size={20}
                                  color={Color.price}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            height: 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <MaterialIcons
                            name={'delete-outline'}
                            size={28}
                            color={'grey'}
                          />
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: 50,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingLeft: 8,
                paddingRight: 8,
              }}>
              <Text>Số lượng hàng</Text>
              <Text>3</Text>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingLeft: 8,
                paddingRight: 8,
              }}>
              <Text>Thành tiền</Text>
              <Text style={{color: Color.priceDiscount}}>3.000.000đ</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('OrderScreen')}
            style={{
              width: '50%',
              height: '100%',
              backgroundColor: Color.main,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>Đặt mua</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
