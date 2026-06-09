import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, AppState } from 'react-native';
import * as Linking from 'expo-linking';
import { insertData } from '../../db/database';
import { globalStyle } from "../../ux/avard_style";


export default function Camera() {
  // const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => { const subscription = AppState.addEventListener("change", (nextAppState) => { if(appState.current.match(/inactive|background/) && nextAppState === "active") {
    qrLock.current = false;
  } appState.current = nextAppState; 
  }); 
  return () => {subscription.remove()}
  }, 
  [])

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos de permissão para usar a camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={globalStyle.catppuccin}>
        <CameraView style={globalStyle.catCamera} barcodeScannerSettings={{barcodeTypes: ["qr"]}} 
        onBarcodeScanned={({data}) => {
          if(data && !qrLock.current){
            qrLock.current = true;
          setTimeout( async () => {
            // await Linking.openURL(data);}, 500 );
            console.log(data);}, 500 );
            insertData(data);
          }
}} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

