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
import { makeSelectBooks } from '../../Selectors/bookSelector';
import { deleteUser } from '../../Actions/actionsUser';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Library = (props) => {
  const { books,navigation } = props;
  console.log("librairie : ",books);
  return(
      <View style={styles.container}>
        <View>
          <Button
            title="Ajouter un livre"
            onPress={() => navigation.navigate('BookForm')}
          />
        </View>
        <Text style={styles.text}>Voici les livres de la bibliothèques : </Text>
        {
          books ? 
          <View>
            {books.map((book,id) => 
            <TouchableOpacity key={id} style={styles.touch}>
              <Text> {book.name} de {book.author} </Text>
            </TouchableOpacity>)}
            
          </View> : 
          <Text>Pas de livre dans la bibliothèque</Text>
        }
        
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
  books: makeSelectBooks(),
});
const mapDispatchToProps = (dispatch) => ({
  deleted: () => deleteUser(dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)