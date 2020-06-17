import React from 'react';
import {
  Button,
  ThemeProvider
} from 'react-native-elements';
import{
  StyleSheet,
  View,
  Text
} from 'react-native';


export default Home = (props) => {

  return(
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenue dans l'application biblio de MDS</Text>
        
        <Button 
          title="Connexion"
          buttonStyle={{backgroundColor: "skyblue",margin: 12}}
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
}) 