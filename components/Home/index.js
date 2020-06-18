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
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectBooks } from '../../Selectors/bookSelector';
import { makeSelectStudies, makeSelectUsername, makeSelectConnected } from '../../Selectors/userSelector';
import { deleteUser } from '../../Actions/actionsUser';

const Home = (props) => {
  const { connected,username,deleted,navigation } = props;
  console.log(connected,username);
  return(
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenue dans l'application biblio de MDS</Text>
        {
          connected ?
          <View>
            <Text> Hey salut à toi {username} </Text>
            <Button 
              title="Reset"
              buttonStyle={{backgroundColor: "red",margin: 12}}
              onPress={() => deleted()}
            />
            <Button 
              title="Library"
              buttonStyle={{backgroundColor: "purple",margin: 12}}
              onPress={() => navigation.navigate('Library')}
            />
          </View>
          : <Button 
          title="Connexion"
          buttonStyle={{backgroundColor: "skyblue",margin: 12}}
          onPress={() => navigation.navigate('Login')}
        />
        }
        
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


const mapStateToProps = createStructuredSelector({
  studies: makeSelectStudies(),
  username: makeSelectUsername(),
  connected: makeSelectConnected()
});
const mapDispatchToProps = (dispatch) => ({
  deleted: () => deleteUser(dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)