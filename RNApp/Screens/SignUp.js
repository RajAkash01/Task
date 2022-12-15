import {create} from 'apisauce';
import React, {useState} from 'react';
import {View, StyleSheet, Text, ToastAndroid} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
function SignUp({navigation}) {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const post = () => {
    const api = create({
      baseURL: 'http://10.0.2.2:3000',
      headers: {Accept: 'application/vnd.github.v3+json'},
    });
    api
      .post(
        '/signup',
        {email: Email, password: Pass},
        {headers: {'x-gigawatts': '1.21'}},
      )
      .then(
        response => {
          if (response.data == 'posted successfully') {
            navigation.navigate('Signin');
            ToastAndroid.showWithGravity(
              'Account Created  Successfully',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
            );
          }
        },
        // response.data == 'posted successfully'
        //   ? [
        //       navigation.navigate('Signin'),
        //       ToastAndroid.showWithGravity(
        //         'Account Created  Successfully',
        //         ToastAndroid.LONG,
        //         ToastAndroid.BOTTOM,
        //       ),
        //     ]
        //   : null,
      )
      .then(data => console.log(data));
    // api
    //   .get('/')
    //   .then(response => response.data[0])
    //   .then(console.log);
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 20,
        }}>
        Create a new account
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
        onPress={() => post()}>
        Submit
      </Button>
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
export default SignUp;
