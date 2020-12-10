import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Images from '../Theme/Images';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductDetailScreenStyles';
import Color from '../Theme/Color';

const ProductDetailScreen = (props) => {
  const [dataImageProduct, setDataImageProduct] = useState([
    {
      image: Images.bannerProductDetail,
    },
    {
      image: Images.bannerProductDetail,
    },
    {
      image: Images.bannerProductDetail,
    },
    {
      image: Images.bannerProductDetail,
    },
    {
      image: Images.bannerProductDetail,
    },
  ]);

  const [dataProduct, setDataProduct] = useState([
    {
      image: Images.bannerProduct,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.bannerProduct,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.bannerProduct,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.bannerProduct,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
    {
      image: Images.bannerProduct,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 29000,
      priceDiscount: 19000,
    },
  ]);

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
          <View style={{height: 300}}>
            <Swiper
              // style={{height: 300}}
              loop={false}
              showsButtons={false}
              activeDotColor={Color.main}>
              {dataImageProduct.map((item) => {
                return (
                  <View
                    testID="Hello"
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#9DD6EB',
                      height: 250,
                      width: '100%',
                    }}>
                    <Image
                      source={item.image}
                      // resizeMode="contain"
                      style={{width: '100%', height: 250}}
                    />
                  </View>
                );
              })}
            </Swiper>
          </View>
          <View style={{marginLeft: 10, marginRight: 10}}>
            <Text style={{fontSize: 18}}>Vitamin C</Text>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: 'gray',
                marginTop: 10,
                marginBottom: 10,
              }}></View>
            <Text style={{fontSize: 14}}>Danh mục: Vitamin</Text>
            <Text style={{fontSize: 14, marginTop: 10}}>
              Số lượng: <Text style={{color: Color.main}}>120</Text>
            </Text>
            <Text style={{fontSize: 14, marginTop: 10}}>
              Giá bán: <Text style={{color: Color.main}}>2.000.000 đ</Text>
            </Text>
            <Text style={{fontSize: 14, marginTop: 10}}>
              Giá khuyến mãi:{' '}
              <Text style={{color: Color.priceDiscount}}>2.000.000 đ</Text>
            </Text>
            <Text style={{fontSize: 14, marginTop: 10, color: 'gray'}}>
              Mô tả: Bào ngư loại 1 xuất xứ Mỹ được nhập khẩu Sportmax chất
              lượng cao đang có giá rất tốt và nhiều khuyến mãi hấp dẫn.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Nunito',
                  fontWeight: '600',
                }}>
                Sản phẩm khác
              </Text>
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.navigate('ProductScreen');
                }}>
                <Text
                  style={{
                    color: '#F9B700',
                    fontSize: 14,
                    fontFamily: 'Nunito',
                    fontWeight: 'normal',
                  }}>
                  Xem tất cả
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <ScrollView horizontal={true}>
                  {dataProduct.map((item, index) => {
                    return (
                      <View
                        style={{
                          shadowColor: '#000',
                          shadowOffset: {width: 0, height: 2},
                          shadowOpacity: 0.8,
                          shadowRadius: 0,
                          elevation: 2,
                          width: 150,
                          height: 215,
                          backgroundColor: 'white',
                          marginBottom: 8,
                          marginTop: 15,
                          borderRadius: 10,
                          flexDirection: 'column',
                          marginRight: 15,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={item.image}
                          style={{width: 150, height: 150}}
                        />
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
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: Color.main,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>
              Thêm vào giỏ hàng
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
