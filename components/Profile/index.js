import React from 'react';
import {
  Button,
  ThemeProvider,
  Input,
} from 'react-native-elements';
import{
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectBorrowed, makeSelectUsername } from '../../Selectors/userSelector';
import { makeSelectBooks } from '../../Selectors/bookSelector';
import { deleteUser, addUser } from '../../Actions/actionsUser';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { borrowBook } from '../../Actions/actionsUser';

const Profile = (props) => {
  const { booker,navigation,username,books,borrow,returning } = props;
  console.log("votre username",booker);
  console.log(props.borrow);
  return(
      <View style={styles.container}>
        <Text> Profile </Text>
        <View>
          <Text style={styles.text}> {username} </Text>
        </View>
        <Text> Vos livre empruntés :  </Text>
        <View>
          {booker.length > 0 ? booker.map(book => <Text>{book.name}</Text>) : <Text>Aucun livre n'a été emprunté</Text>}
        </View>
        <View>
          <Button 
            title="Emprunter un Livre"
            color="blue"
            buttonStyle={{margin: 5}}
            onPress={() => navigation.navigate('Scanner',{previous: {name: 'Profile',function: (data) => borrow(data,books)}})}
          />
          <Button 
            title="Rendre un livre"
            color="blue"
            buttonStyle={{margin: 5}}
            onPress={() => navigation.navigate('Scanner',{previous: {name: 'Profile',function: (data) => returning(data)}})}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  touch: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20
  }
}) 


const mapStateToProps = createStructuredSelector({
  booker: makeSelectBorrowed(),
  books: makeSelectBooks(),
  username: makeSelectUsername()
});
const mapDispatchToProps = (dispatch) => ({
  borrow: (a,b) => borrowBook(dispatch,a,b),
  returning: () => returnBook(dispatch,book)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)