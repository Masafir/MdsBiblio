import React, { Component, useState, useEffect } from 'react';

import {
Text,
View,
StyleSheet,
Alert,
TouchableOpacity,
Image
} from 'react-native';

import { RNCamera } from 'react-native-camera';

export default BarCodeScanner = (props) => {
  const { navigation,route } = props;
  const [torchOn,setTorchOn] = useState(true);
  const [data,setData] = useState();
  const [type,setType] = useState();
  useEffect(() => console.log(data),console.log(type));
  return(
    <View style={styles.preview}>
      <RNCamera
        flashMode={torchOn ? 2 : 0}
        onBarCodeRead={(e) => { 
        const { previous } = route.params;
        if(previous.function)
        {
          if(previous.function({code: e.data,type: e.type}))
          {
            navigation.navigate(previous.name,{
              barCode: {
                data: e.data,
                type: e.type
              }
            });
          }
          else {
            Alert.alert("Ce livre n'est pas dans la banque de donnée veuillez le rajouter si vous souhaitez l'utiliser");
          }
        }
        else{
          navigation.navigate(previous.name,{
            barCode: {
              data: e.data,
              type: e.type
            }
          });
        }
        setData(e.data); 
        setType(e.type);
      }}
        ref={cam => camera = cam}
        style={styles.preview}
        //aspect={RNCamera.Constants.Aspect.fill}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
      <Text style={{
        flex: 0,
        justifyContent: "center",
        alignContent: "center",
        margin: 70,
        padding: 10
        }}></Text>

      </RNCamera>
      <View style={styles.bottomOverlay}>
        <TouchableOpacity style={{backgroundColor: torchOn ? "#fff" : "#000",borderColor: torchOn ? "#000" : "#fff",padding: 10,borderRadius: 10}} onPress={() => setTorchOn(!torchOn)}>
        <Text style={{color: torchOn ? "#000" : "#fff",textAlign:"center"}}> LA LAMPE EST {torchOn ? "ON" : "OFF"} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  bottomOverlay: {
    position: "absolute",
    width: "80%",
    textAlign: "center",
    flex: 0,
    flexDirection: "column",
    padding: 20
  },
  preview: {
    flex: 1,
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
  });