import React,{ useState, useEffect } from 'react';
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
  const [data,setData] = useState();
  const [codeType,setCodeType] = useState();

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
      addBook({name,author,year,type,codeType,data});
      setError(false);
      navigation.goBack();
    }
    else{
      setError(true);
    }
  }
  useEffect(() => {
    //console.log("ici",data,codeType);
    //console.log(props.route.params.barCode);
    const { route } = props;
    if(route.params && route.params.barCode)
    {
      const { barCode } = props.route.params;
      if(data != barCode.data)
      {
        setData(barCode.data);
      }
      if(codeType != barCode.type)
      {
        setCodeType(barCode.type);
      }
    }
  });

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
          <Text style={styles.text}>
             { codeType ? `Type : ${codeType}` : null }
          </Text>
          <Text style={styles.text}>
             { data ? `Code Bar : ${data}` : null }
          </Text>
          { error ? <View style={{backgroundColor:"red",padding: 10,margin: 5}}><Text style={{color:"white"}}> Veuillez remplir tout les champs avant de valider </Text></View> : null}
          
          { codeType && data ? 
           null :<Button 
            title="Scanner"
            color="blue"
            onPress={() => navigation.navigate('Scanner',{previous: {name: 'BookForm'}})}
          />}
          
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