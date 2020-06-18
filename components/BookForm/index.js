import React,{ useState } from 'react';
import {
  Button,
  ThemeProvider,
  Input
} from 'react-native-elements';

import{
  StyleSheet,
  View,
  Text,
  Picker
} from 'react-native';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
//import { makeSelectStudies, makeSelectUsername, makeSelectConnected } from '../../Selectors/userSelector';
import { addBook } from '../../Actions/actionsBooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import typeArray from '../type';

const BookForm = (props) => {
  const { addBook,navigation } = props;
  const [name,setName] = useState();
  const [author,setAuthor] = useState();
  const [year,setYear] = useState();
  const [type,setType] = useState("Aucune");
  const [error,setError] = useState(false);
  const handleChanges = (type,value) => {
    switch (type) {
      case 'name':
        setName(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'year':
        setYear(value);
        break;
      case 'picker':
        setType(value);
        break;
      default:
        break;
    }
  }
  const handleSubmit = () => {
    if(name && author && year && type)
    {
      addBook({name,author,year,type});
      setError(false);
      navigation.goBack();
    }
    else{
      setError(true);
    }
  }

  return(
      <View style={styles.container}>
        <View>
          <Input placeholder="Nom du livre" onChangeText={(e) => handleChanges('name',e)} />
          <Input placeholder="Auteur" onChangeText={(e) => handleChanges('author',e)} />
          <Input placeholder="Année de parution" onChangeText={(e) => handleChanges('year',e)} />
          <Picker selectedValue={type} onValueChange={(e) => handleChanges('picker',e)}>
            <Picker.Item label="Aucune" value="Aucune" />
            {
              typeArray.map((type,id) => <Picker.Item label={type.label} value={type.value} />)
            }
          </Picker>
          { error ? <View style={{backgroundColor:"red",padding: 10,margin: 5}}><Text style={{color:"white"}}> Veuillez remplir tout les champs avant de valider </Text></View> : null}
          <Button 
            title="Scanner"
            color="blue"
            onPress={() => navigation.navigate('Scanner')}
          />
        </View>

        <Button
          title="Confirmer"
          color="green"
          onPress={() => handleSubmit()}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between"
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
  
});
const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => addBook(dispatch,book)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm)