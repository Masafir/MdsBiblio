import React,{ Component, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Input,Button } from 'react-native-elements';


export default Login = (props) => {
  const [password,setPassword] = useState();
  const [mail,setMail] = useState();

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Page de connexion</Text>
      <View style={styles.input}>
        <Input 
          placeholder="Email"
          onChangeText={(e) => setMail(e)}
        />
        <Input 
        placeholder="Mot de passe"
        keyboardAppearance="dark"
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
        />
        <Button 
          title="Valider"
          
          onPress={() => console.log(password,mail)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
      fontSize: 20,
      fontWeight: "bold",
      padding: 20,
      textAlign: "center"
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});