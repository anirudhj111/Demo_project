/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './src/utils/navigation';
import axios from 'axios';

function App(){
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    getUserData()
  },[])

  const getUserData = () => {
    axios({
        url:`https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice`,
        method:'GET',
    })
    .then((res) => {
        storeUserData(res.data);
    })
    .catch((err) => {
        console.log("err",err);
    })
  } 

  const storeUserData = async (value) => {
    try{
      const obj = await AsyncStorage.getItem('@userlist')
      if(obj == null) {
        value = JSON.stringify(value);
        await AsyncStorage.setItem('@userlist', value);
      }
    }
    catch(e){
      console.log("err",e)
    }
  }

  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
