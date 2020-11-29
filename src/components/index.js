import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
// import { Camera } from 'expo-camera';
import  { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as tf from '@tensorflow/tfjs';
import * as FileSystem from 'expo-file-system';
const myModel = require('../model/model_trained_master/model.json')
const weight = require('../model/model_trained_master/group1-shard1of15.bin')

export default () => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto]= useState();
  const [mode, setMode] = useState('camera');
  const [model, setModel] = useState();

  useEffect(() => {
    (async () => {
      // const { status } = await Camera.requestPermissionsAsync();
      // setHasPermission(status === 'granted');
      // setModel(_model);
      // try {
        await tf.ready();

        console.log('Ready!')
        const _model = await tf.loadLayersModel(bundleResourceIO(myModel, weight));
        // const _model = await tf.loadLayersModel('../model/model_trained_master/model.json');
        // console.log(_model)
      // } catch (error) {
      //   console.log('Erro ', error);
      // }
    })();
  }, []);

  // const handleRecognition = useCallback(async () => {
  //     console.log(model);
  //     if (!model) return;
  //     try {
  //       if(!photo) return;
  //       const imageAssetPath = Image.resolveAssetSource(photo);
  //       const response = await tf.fetch(imageAssetPath.uri, {}, { isBinary: true });
  //       const imageData = await response.arrayBuffer();
  
  //       const imageTensor = tf.decodeJpeg(imageData);
  
  //       const prediction = await model.classify(imageTensor);
  //       console.log(prediction);
  //     } catch (error) {
  //       console.log('Erro ', error);
  //     }
  // }, []);

  // const handlePicture = useCallback( async () => {
  //   if(!cameraRef.current) return;
  //   try {
  //     let photo = await cameraRef.current.takePictureAsync(0.7,false,);
  //     setPhoto(photo);
  //     setMode('image')
  //   } catch (error) {
  //     console.log('Camera error: ', error)
  //   }

  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  // if (mode === 'camera')
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
  //         <View
  //           style={{
  //             flex: 1,
  //             backgroundColor: 'transparent',
  //             flexDirection: 'row',
  //             justifyContent: 'center',
  //           }}>
  //           <TouchableOpacity
  //             style={{
  //               flex: 0.1,
  //               alignSelf: 'flex-end',
  //               alignItems: 'center',
  //               marginBottom: 20,
  //             }}
  //             onPress={handlePicture}>
  //             <Ionicons name="md-camera" size={32} color="green" />
  //           </TouchableOpacity>
  //         </View>
  //       </Camera>
  //     </View>
  //   );
  return <Text>asdklsadsajd saldkjsaldkjsal</Text>
  return (
    <View style={{ flex: 1 }}>
      {/* <ImageBackground source={{uri: photo.uri}} style={{width: '100%', height: '100%' }} >
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 30,
            left: 20,
          }}
          onPress={()=>setMode('camera')}>
          <Ionicons name="md-arrow-back" size={32} color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={handleRecognition}>
            <Text style={{ fontSize: 17 }}>
              Ver espécie
            </Text>
          <MaterialCommunityIcons name="image-search" size={40} color="black" />
        </TouchableOpacity>
      </ImageBackground> */}
    </View>
  )
}