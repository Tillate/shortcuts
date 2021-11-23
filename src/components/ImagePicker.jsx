import React, { useState, useEffect } from 'react';
import { Text, Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PickerImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.contChoose}>
      <Text onPress={pickImage} style={styles.chooseTxt}>Import image</Text>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

const styles = StyleSheet.create({ 
    chooseTxt:{
        textAlign:'center',
        fontSize:18,
        color:'white',
        fontWeight:'bold',
    },
    contChoose:{
        alignItems:'center',
        justifyContent:'center',
        width:200,
        height:80,
        backgroundColor:'#114A8A',
        borderRadius:5,
    }
});