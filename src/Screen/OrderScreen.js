import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
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
  const [isCheckReceive, setIsCheckReceive] = useState(false);
  const [addressStore, setAddressStore] = useState('Mê Linh, Hà Nội');
  const [addressReceive, setAddressReceive] = useState('');
  const [phonereceive, setPhoneReceive] = useState('');
  const [specialRequirement, setSpecialRequirement] = useState('');
  const [dataPaymentMethob, setDataPaymentMethob] = useState([
    {
      id: 0,
      paymentMethob: 'Ví app',
      isCheck: false,
    },
    {
      id: 1,
      paymentMethob: 'Thẻ thanh toán (Nội địa, quốc tế)',
      isCheck: false,
    },
    {
      id: 2,
      paymentMethob: 'Ví điện tử (Momo, VNPay)',
      isCheck: false,
    },
    {
      id: 3,
      paymentMethob: 'Tiền mặt',
      isCheck: true,
    },
  ]);

  const handleSelectPaymentMethob = (value) => {
    // console.log(value);
    const indexTrue = dataPaymentMethob.findIndex(
      (item) => item.isCheck === true,
    );
    if (value !== indexTrue) {
      const newData = update(dataPaymentMethob, {
        [value]: {
          $toggle: ['isCheck'],
        },
        [indexTrue]: {
          $toggle: ['isCheck'],
        },
      });
      setDataPaymentMethob(newData);
    }
    // console.log(newData);
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
                  marginBottom: 15,
                }}>
                <View
                  style={{
                    width: '100%',
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
                    <View style={{}}>
                      <Image
                        source={Images.imageProductInCart}
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
                      <Text style={{fontSize: 12}}>Vitamin C</Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: Color.priceDiscount,
                        }}>
                        30000đ
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
                          <Text>2</Text>
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
              </View>
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
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      width: 20,
                    }}></View>
                  <View
                    style={{
                      height: 45,
                      width: '33%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 25,
                      backgroundColor: Color.main,
                    }}>
                    <Text style={{fontSize: 13, color: 'white'}}>
                      + Thêm sản phẩm
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  // paddingLeft: 8,
                  // paddingRight: 8,
                }}>
                <Text style={{fontSize: 14}}>Số lượng hàng</Text>
                <Text style={{fontSize: 16, color: Color.priceDiscount}}>
                  3
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  // paddingLeft: 8,
                  // paddingRight: 8,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 14}}>Thành tiền</Text>
                <Text style={{color: Color.priceDiscount, fontSize: 16}}>
                  3.000.000đ
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 0.5,
                opacity: 0.5,
                backgroundColor: 'grey',
                width: '100%',
                marginTop: 10,
              }}></View>

            <View style={{width: '100%', alignItems: 'center', marginTop: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: 14}}>Hôm nay, 20.7.2020</Text>
                  </View>
                  <View
                    style={{
                      height: 45,
                      width: '33%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 25,
                      backgroundColor: Color.main,
                    }}>
                    <Text style={{fontSize: 13, color: 'white'}}>
                      Chọn ngày
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => setIsCheckReceive(!isCheckReceive)}>
                <MaterialIcons
                  name={
                    isCheckReceive
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={24}
                  color={Color.main}
                />
              </TouchableOpacity>
              <Text style={{marginLeft: 5}}>Nhận hàng tại cửa hàng</Text>
            </View>
            <View
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                marginTop: 10,
                color: 'grey',
                // opacity: 0.2,
                borderRadius: 5,
                borderColor: 'gray',
              }}>
              <TextInput
                style={{
                  height: 40,
                  color: '#000000',
                  marginLeft: 5,
                  fontFamily: 'Nunito',
                }}
                placeholder="Nhập số điện thoại"
                placeholderTextColor="gray"
                onChangeText={(text) => setAddressStore(text)}
                value={addressStore}
                editable={false}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => setIsCheckReceive(!isCheckReceive)}>
                <MaterialIcons
                  name={
                    !isCheckReceive
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={24}
                  color={Color.main}
                />
              </TouchableOpacity>
              <Text style={{marginLeft: 5}}>Giao hàng</Text>
            </View>
            <View
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                marginTop: 10,
                color: 'grey',
                // opacity: 0.2,
                borderRadius: 5,
                borderColor: 'gray',
              }}>
              <TextInput
                style={{
                  height: 40,
                  color: '#000000',
                  marginLeft: 5,
                  fontFamily: 'Nunito',
                }}
                placeholder="Địa chỉ nhận hàng"
                placeholderTextColor="gray"
                onChangeText={(text) => setAddressReceive(text)}
                value={addressReceive}
              />
            </View>
            <View
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                marginTop: 15,
                color: 'grey',
                // opacity: 0.2,
                borderRadius: 5,
                borderColor: 'gray',
              }}>
              <TextInput
                style={{
                  height: 40,
                  color: '#000000',
                  marginLeft: 5,
                  fontFamily: 'Nunito',
                }}
                placeholder="Số điện thoại nhận hàng"
                placeholderTextColor="gray"
                onChangeText={(text) => setPhoneReceive(text)}
                value={phonereceive}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={{
                height: 0.5,
                opacity: 0.5,
                backgroundColor: 'grey',
                width: '100%',
                marginTop: 15,
              }}></View>
            <View style={{marginTop: 10}}>
              <Text>Phương thức thanh toán</Text>
            </View>
            {dataPaymentMethob.map((item, index) => {
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
                      onPress={() => handleSelectPaymentMethob(index)}>
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
                      <Text>{item.paymentMethob}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
            <View style={{marginTop: 10}}>
              <Text>
                *Số dư trong ví:{' '}
                <Text style={{color: Color.priceDiscount}}>160.000đ</Text>
              </Text>
            </View>
            <View
              style={{
                // height: 120,
                width: '100%',
                borderWidth: 1,
                marginTop: 10,
                color: 'grey',
                // opacity: 0.2,
                borderRadius: 5,
                borderColor: 'gray',
                marginBottom: 20,
              }}>
              <TextInput
                style={{
                  // height: 120,
                  color: '#000000',
                  marginLeft: 5,
                  fontFamily: 'Nunito',
                  justifyContent: 'flex-start',
                  textAlignVertical: 'top',
                }}
                placeholder="Yêu cầu đặt biệt khác"
                placeholderTextColor="gray"
                onChangeText={(text) => setSpecialRequirement(text)}
                value={specialRequirement}
                multiline={true}
                numberOfLines={4}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity>
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
                width: '100%',
                height: '100%',
                backgroundColor: Color.main,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, color: 'white'}}>Đặt mua</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
