import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../Theme/Color';
import Images from '../Theme/Images';
import Swiper from 'react-native-swiper';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeStyles';

const Home = (props) => {
  const [dataCategories, setDataCategories] = useState([
    {
      image: Images.iconCate,
      titleTop: 'Điều dưỡng',
      titleBot: 'chăm sóc',
    },
    {
      image: Images.iconCate,
      titleTop: 'Gói chăm',
      titleBot: 'sóc trọn năm',
    },
    {
      image: Images.iconCate,
      titleTop: 'Bác sĩ',
      titleBot: 'gia đình',
    },
    {
      image: Images.iconCate,
      titleTop: 'Xét nghiệm',
      titleBot: 'tại nhà',
    },
    {
      image: Images.iconCate,
      titleTop: 'Tầm soát',
      titleBot: 'ung thư',
    },
    {
      image: Images.iconCate,
      titleTop: 'Sản phẩm',
      titleBot: '',
    },
    {
      image: Images.iconCate,
      titleTop: 'Khuyến mãi',
      titleBot: '',
    },
    {
      image: Images.iconCate,
      titleTop: 'Tin tức',
      titleBot: '',
    },
    {
      image: Images.iconCate,
      titleTop: 'Xem thêm',
      titleBot: '',
    },
  ]);

  const [dataService, setDataService] = useState([
    {
      image: Images.bannerProduct,
      title: 'Máy xông hơi nhập khẩu trực tiếp từ Mỹ',
      price: 59000,
      priceDiscount: 69000,
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

  const [dataSale, setDataSale] = useState([
    {
      image: Images.bannerSale,
      title: 'Giảm 50% khi đặt mua Vitamin C ngay',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.bannerSale,
      title: 'Giảm 50% khi đặt mua Vitamin C ngay',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.bannerSale,
      title: 'Giảm 50% khi đặt mua Vitamin C ngay',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
  ]);

  const [dataNews, setDataNews] = useState([
    {
      image: Images.bannerSale,
      title: 'Giảm 50% khi đặt mua Vitamin C ngay',
      time: '12h20',
      date: '12/11/2020',
    },
    {
      image: Images.bannerSale,
      title: 'Giảm 50% khi đặt mua Vitamin C ngay',
      time: '12h20',
      date: '12/11/2020',
    },
    {
      image: Images.bannerSale,
      title: 'Giảm 50% khi đặt mua Vitamin C ngay',
      time: '12h20',
      date: '12/11/2020',
    },
  ]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  const renderItem = (item, index) => {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            // height: 200,
            width: '94%',
            backgroundColor: 'white',
            borderRadius: 5,
            marginBottom: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 0,
            elevation: 2,
          }}>
          <Image
            source={item.image}
            // resizeMode="contain"
            style={{width: 110, height: 110}}
          />
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 5,
              justifyContent: 'space-between',
            }}>
            <View style={{width: '84%', marginTop: 5}}>
              <Text
                style={{
                  fontWeight: 'normal',
                  fontFamily: 'Roboto',
                  fontSize: 13,
                }}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <MaterialIcons name={'watch-later'} size={26} color="#000000" />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Roboto',
                  fontWeight: 'normal',
                  marginLeft: 5,
                  marginRight: 15,
                }}>
                {item.time} trước
              </Text>
              <MaterialIcons name={'favorite'} size={26} color={color.main} />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Roboto',
                  fontWeight: 'normal',
                  marginLeft: 5,
                  marginRight: 15,
                }}>
                {item.like} lượt thích
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contend}>
        <View
          style={[
            styles.contend,
            {
              marginBottom: 60,
            },
          ]}>
          <ScrollView>
            <Swiper
              style={{height: 300}}
              loop={false}
              showsButtons={false}
              activeDotColor={color.main}>
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
                  source={Images.banner}
                  // resizeMode="contain"
                  style={{width: '100%', height: 250}}
                />
              </View>
              <View
                testID="Beautiful"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#9DD6EB',
                  height: 250,
                  width: '100%',
                }}>
                <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
                  Beautiful
                </Text>
              </View>
              <View
                testID="Simple"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#9DD6EB',
                  height: 250,
                  width: '100%',
                }}>
                <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
                  And simple
                </Text>
              </View>
            </Swiper>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  alignItems: 'center',
                  // marginTop: 15,
                  flexWrap: 'wrap',
                  flex: 0.95,
                }}>
                {dataCategories.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '33.3%',
                        marginTop: 15,
                      }}>
                      <Image
                        source={item.image}
                        style={{width: 48, height: 48}}
                      />
                      <View
                        style={{
                          marginTop: 5,
                          alignItems: 'center',
                          width: '80%',
                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: 14, fontFamily: 'Nunito'}}>
                          {item.titleTop}
                        </Text>
                        <Text style={{fontSize: 14, fontFamily: 'Nunito'}}>
                          {item.titleBot}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              {/* Dịch vụ */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '94%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito',
                    fontWeight: '600',
                  }}>
                  Dịch vụ nổi bật
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: color.main,
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
                    width: '94%',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <ScrollView horizontal={true}>
                    {dataService.map((item, index) => {
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
                            <Text style={{fontSize: 12, color: color.price}}>
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
                                    color: color.priceDiscount,
                                  }}>
                                  {item.priceDiscount}{' '}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: color.price,
                                    textDecorationLine: 'line-through',
                                  }}>
                                  {item.price}
                                </Text>
                              </View>
                              <MaterialIcons
                                name={'add-shopping-cart'}
                                size={23}
                                color={color.price}
                              />
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              {/* Sản phẩm */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '94%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito',
                    fontWeight: '600',
                  }}>
                  Sản phẩm nổi bật
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ProductScreen');
                  }}>
                  <Text
                    style={{
                      color: color.main,
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
                    width: '94%',
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
                            <Text style={{fontSize: 12, color: color.price}}>
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
                                    color: color.priceDiscount,
                                  }}>
                                  {item.priceDiscount}{' '}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: color.price,
                                    textDecorationLine: 'line-through',
                                  }}>
                                  {item.price}
                                </Text>
                              </View>
                              <MaterialIcons
                                name={'add-shopping-cart'}
                                size={23}
                                color={color.price}
                              />
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '94%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito',
                    fontWeight: '600',
                  }}>
                  Khuyến mại
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: color.main,
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
                    width: '94%',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <ScrollView horizontal={true}>
                    {dataSale.map((item, index) => {
                      return (
                        <View
                          style={{
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 2},
                            shadowOpacity: 0.8,
                            shadowRadius: 0,
                            elevation: 2,
                            width: 343,
                            height: 260,
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
                            style={{width: '100%', height: 193}}
                          />
                          <View
                            style={{
                              width: '96%',
                            }}>
                            <Text
                              style={{
                                fontSize: 14,
                                color: 'black',
                                fontWeight: '600',
                              }}>
                              {item.title}
                            </Text>
                            <Text style={{fontSize: 12, color: color.price}}>
                              Thời gian bắt đầu: {item.timeStart}
                            </Text>
                            <Text style={{fontSize: 12, color: color.price}}>
                              Thời gian kết thúc: {item.timeEnd}
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '94%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito',
                    fontWeight: '600',
                  }}>
                  Tin tức
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: color.main,
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
                    width: '94%',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <ScrollView horizontal={true}>
                    {dataNews.map((item, index) => {
                      return (
                        <View
                          style={{
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 2},
                            shadowOpacity: 0.8,
                            shadowRadius: 0,
                            elevation: 2,
                            width: 343,
                            height: 250,
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
                            style={{width: '100%', height: 193}}
                          />
                          <View
                            style={{
                              width: '96%',
                            }}>
                            <Text
                              style={{
                                fontSize: 14,
                                color: 'black',
                                fontWeight: '600',
                              }}>
                              {item.title}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <MaterialIcons
                                name={'history'}
                                size={22}
                                color={'gray'}
                              />
                              <Text style={{fontSize: 12, color: color.price}}>
                                {item.time} {item.date}
                              </Text>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  width: '100%',
                }}></View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;
