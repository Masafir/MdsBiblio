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
import { makeSelectBorrowed } from '../../Selectors/userSelector';
import { deleteUser } from '../../Actions/actionsUser';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = (props) => {
  const { booker,navigation } = props;
  //console.log("Books : ",booker);
  console.log(props)
  return(
      <View style={styles.container}>
        <Text> Profile </Text>
        <View>
          <Text>{ booker }</Text>
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
});
const mapDispatchToProps = (dispatch) => ({
  deleted: () => deleteUser(dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)