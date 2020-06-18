import React,{ Component, useState,useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Input,Button } from 'react-native-elements';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { addUser } from '../../Actions/actionsUser';
import { makeSelectConnected } from '../../Selectors/userSelector';

const Login = (props) => {
  const [password,setPassword] = useState();
  const [mail,setMail] = useState();
  useEffect(() => {
    const { connected,navigation } = props;
    connected ? navigation.navigate("Home") : null
  })
  const handleConnection = () => {
    const { submit } = props;
    setMail('');
    setPassword('');
    submit(mail,password);
  }
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
          
          onPress={() => handleConnection(password,mail)}
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
const mapStateToProps = createStructuredSelector({
  connected: makeSelectConnected()
});
const mapDispatchToProps = (dispatch) => ({
  submit: (username,password) => addUser(dispatch,username,password)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)