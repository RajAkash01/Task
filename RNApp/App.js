/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Stacknav, Stacknav2} from './Navigations/StackNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [Logged, setLogged] = useState(false);
  useEffect(() => {
    RetrieveData();
  }, []);

  const RetrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Login');
      if (value == 'true') {
        // We have data!!
        setLogged(true);
        console.log(true);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  return (
    <NavigationContainer>
      <PaperProvider>
        {Logged == true ? <Stacknav2 /> : <Stacknav />}
      </PaperProvider>
    </NavigationContainer>
  );
};

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
