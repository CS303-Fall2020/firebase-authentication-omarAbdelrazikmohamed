import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';

export default function ForgetPasswordScreen({ navigation }) {
  //------------------------------------------------------------------
  const press = () => {
    navigation.replace('SignupScreen');
  };
  const [mail, setmail] = useState('');

  const changeEmail = val => {
    setmail(val);
  };

  async function forgetpass() {
    try {
      await firebase.auth().sendPasswordResetEmail(mail);

      // setsend(true);
      // Navigate to the Home page
      Alert.alert('password has been send');
      console.log('password has been send');
    } catch (error) {
      // console.log(error.toString())
      Alert.alert('error');
    }
  }
  //--------------------------------------------------------------------------------------
  return (
    <View>
      <TextInput
        style={styles.input}
        // autoCapitalize='none'
        placeholder=' email@gmail.com'
        onChangeText={changeEmail}
      />

      {/* <Text style={{ padding: 10 }}></Text> */}
      <View style={{ padding: 20, marginTop: 25 }}>
        <Button title='SEND RESET EMAIL' onPress={forgetpass} />
      </View>

      <View style={{ padding: 20, marginTop: 80 }}>
        <Button title='signup Screen' onPress={press} />
      </View>
    </View>
    // <View>
    //   <Text>ForgetPassword Screen</Text>
    // </View>
  );
}
const styles = StyleSheet.create({
  //     container: {
  //         flex: 1,
  //         backgroundColor: "#fff",
  //         padding: 40,
  //   },

  input: {
    // flex: 1,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue'
  }
});
