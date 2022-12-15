import {create} from 'apisauce';
import React, {useState} from 'react';
import {View, StyleSheet, Text, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Signin({navigation}) {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const Storedata = async () => {
    try {
      await AsyncStorage.setItem('Login', 'true');
      ToastAndroid.showWithGravity(
        'Saved Data Successfully',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        console.log('Saved data'),
      );
    } catch (error) {
      // Error saving data
    }
  };
  const fetch = () => {
    const api = create({
      baseURL: 'http://10.0.2.2:3000',
      headers: {Accept: 'application/vnd.github.v3+json'},
    });
    api
      .post(
        '/signin',
        {email: Email, password: Pass},
        {headers: {'x-gigawatts': '1.21'}},
      )
      .then(response => {
        if (response.data == 'Logged in successfully') {
          navigation.replace('Home');
          ToastAndroid.showWithGravity(
            'Logged in Successfully',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
          );
          Storedata();
        }
      });
  };
  console.log(Email, Pass);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 20,
        }}>
        Log in to your account
      </Text>
      <TextInput
        placeholder="Email"
        mode="outlined"
        style={{marginBottom: 10}}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPass(text)}
        // style={{}}
      />
      <Button
        style={{width: '50%', marginTop: 10}}
        mode="elevated"
        onPress={() => fetch()}>
        Submit
      </Button>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Signup')}>
        <Text>Already have a account</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
});
export default Signin;
