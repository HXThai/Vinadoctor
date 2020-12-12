import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../Screen/SplashScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../Screen/Home';
import AccumulatePointScreen from '../Screen/AccumulatePointScreen';
import ServiceHistoryScreen from '../Screen/ServiceHistoryScreen';
import PersonalScreen from '../Screen/PersonalScreen';
import ChatScreen from '../Screen/ChatScreen';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen';
import Images from '../Theme/Images';
import {Image, View, TextInput, TouchableOpacity} from 'react-native';
import Color from '../Theme/Color';
import TestScreen from '../Screen/TestScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import ProductScreen from '../Screen/ProductScreen';
import ProductDetailScreen from '../Screen/ProductDetailScreen';
import CartScreen from '../Screen/CartScreen';
import OrderScreen from '../Screen/OrderScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routename = getFocusedRouteNameFromRoute(route) ?? 'Home';
  if (routename == 'ProductScreen') {
    return false;
  }
  if (routename == 'ProductDetailScreen') {
    return false;
  }
  if (routename == 'CartScreen') {
    return false;
  }
  if (routename == 'OrderScreen') {
    return false;
  }
  return true;
};

function TabNav(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({focused, color}) => {
          const routeName = route.name;
          let url;
          let size = 20;
          if (routeName === 'Trang chủ') {
            url = focused ? (
              <MaterialIcons name={'home'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'home'} size={28} color={'gray'} />
            );
          } else if (routeName === 'Chat với BS') {
            url = focused ? (
              <MaterialIcons name={'sms'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'sms'} size={28} color={'gray'} />
            );
          } else if (routeName === 'Lịch sử d.vụ') {
            url = focused ? (
              <MaterialIcons name={'assignment'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'assignment'} size={28} color={'gray'} />
            );
          } else if (routeName === 'Tích điểm') {
            url = focused ? (
              <MaterialIcons name={'queue'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'queue'} size={28} color={'gray'} />
            );
          } else if (routeName === 'Cá nhân') {
            url = focused ? (
              <MaterialIcons name={'person'} size={28} color={Color.main} />
            ) : (
              <MaterialIcons name={'person'} size={28} color={'gray'} />
            );
          }
          return url;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.main,
        inactiveTintColor: 'gray',
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          height: 60,
          backgroundColor: '#fff',
        },
        tabStyle: {
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeStack}
        navigationOptions={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name="Chat với BS"
        component={ChatScreenStack}
        navigationOptions={{tabBarLabel: 'Chat với BS'}}
      />
      <Tab.Screen
        name="Lịch sử d.vụ"
        component={ServiceHistoryScreenStack}
        navigationOptions={{tabBarLabel: 'Lịch sử dịch vụ'}}
      />
      <Tab.Screen
        name="Tích điểm"
        component={AccumulatePointScreenStack}
        navigationOptions={{tabBarLabel: 'Tích điểm'}}
      />
      <Tab.Screen
        name="Cá nhân"
        component={PersonalScreenStack}
        navigationOptions={{tabBarLabel: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ServiceHistoryScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ServiceHistoryScreen"
        component={ServiceHistoryScreen}
        options={{
          headerTitle: 'Lịch sử dịch vụ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

function ChatScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: 'Chat với bác sĩ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

function PersonalScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PersonalScreen"
        component={PersonalScreen}
        options={{
          headerTitle: 'Cá nhân',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  const [search, onChaneSearch] = useState('');
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
      })}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{marginLeft: 10}}>
                  <MaterialIcons name="search" size={26} color={'gray'} />
                </View>
                <View
                  style={{
                    height: 40,
                    width: '85%',
                    color: 'grey',
                  }}>
                  <TextInput
                    style={{
                      height: 40,
                      color: '#000000',
                      marginLeft: 5,
                      fontFamily: 'Nunito',
                    }}
                    placeholder="Tìm kiếm sản phẩm"
                    placeholderTextColor="gray"
                    onChangeText={(text) => onChaneSearch(text)}
                    value={search}
                  />
                </View>
              </View>
            </View>
          ),
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CartScreen')}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  marginRight: 15,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}>
                <View style={{width: 40, height: 27, alignItems: 'center'}}>
                  <Image
                    source={Images.cart}
                    // resizeMode="contain"
                    style={{width: 23, height: 23}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerTitle: 'Sản phẩm',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CartScreen')}>
                <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          headerTitle: 'Chi tiết Sản phẩm',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ProductScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CartScreen')}>
                <Image
                  source={Images.cartHeader}
                  // resizeMode="contain"
                  style={{width: 22, height: 27}}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitle: 'Giỏ hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ProductScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          headerTitle: 'Đặt mua',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('CartScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AccumulatePointScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccumulatePointScreen"
        component={AccumulatePointScreen}
        options={{
          headerTitle: 'Tích điểm',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
