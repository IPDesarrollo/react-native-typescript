import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import SignatureScreen, { SignatureViewRef } from 'react-native-signature-canvas';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Pruebas = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  function foo() {}

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}></Camera>
    </View>
  );
};

export default Pruebas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

// interface Props {
//   text: string;
//   onOK: (signature) => void;
// }

// const Pruebas: React.FC<Props> = ({ text, onOK }) => {
//   const ref = useRef<SignatureViewRef>(null);

//   const handleSignature = (signature) => {
//     console.log(`save`);
//     onOK(signature);
//   };

//   const handleEmpty = () => {
//     console.log("Empty");
//   };

//   const handleClear = () => {
//     console.log("clear success!");
//   };

//   const handleEnd = () => {
//     console.log(`finish`);
//     // ref.current?.readSignature();
//   };

//   return (
//     <SignatureScreen
//       ref={ref}
//       onEnd={handleEnd}
//       onOK={handleSignature}
//       onEmpty={handleEmpty}
//       onClear={handleClear}
//       autoClear={false}
//       descriptionText={text}
//     />
//   );
// };

// export default Pruebas;
