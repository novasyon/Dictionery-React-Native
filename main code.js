import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';

const UsersManager = StackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: Login },
	Register: {screen: Register},
	Profile: {screen: Profile}
	
 });
export default UsersManager;