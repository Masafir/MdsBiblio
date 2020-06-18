import React, { Component, useState } from 'react';

import {
Text,
View,
StyleSheet,
Alert,
TouchableOpacity,
Image
} from 'react-native';

import Camera from 'react-native-camera';

export default BarCodeScanner = (props) => {
  const { navigation } = props;
  const [torchOn,setTorchOn] = useState(true);
  const [data,setData] = useState();
  const [type,setType] = useState();
  return(
    <View>
      <Camera
        torchMode={torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}
        onBarCodeRead={(e) => { Alert.alert("La valeur du code bar est : " + e.data, " Il est de type : " + e.type); setData(e.data); setType(e.type);}}
        ref={cam => camera = cam}
        aspect={Camera.constants.Aspect.fill}
      >
      <Text style={{
        backgroundColor: 'white',
        margin: 10
        }}>Scanner le code barre</Text>

      </Camera>
      <View style={styles.bottomOverlay}>
        <TouchableOpacity onPress={() => setTorchOn(!torchOn)}>
        <Text> LA LAMPE EST {torchOn ? "ON" : "OFF"} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text> retour </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomOverlay: {
  position: "absolute",
  width: "100%",
  flex: 20,
  flexDirection: "row",
  justifyContent: "space-between"
  },
  });