import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text,  TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';
import PickerImage from "../components/ImagePicker";

export default function ShortcutsScreen(props) {
    const { shortcuts } = props.route.params;

    const [category, setCategory] = useState([]);
    const [softwares, setSoftwares] = useState([]);
    useEffect(() => {
        fetch(process.env.API_URL + "categories")
          .then((response) => response.json())
          .then((data) => setCategory(data["hydra:member"]))
          .catch((error) => console.log(error));
        fetch(process.env.API_URL + "software")
          .then((response) => response.json())
          .then((data) => setSoftwares(data["hydra:member"]))
          .catch((error) => console.log(error));
      }, []);

    
    const categoriesJsx = category                 
    .sort((c1, c2) => c1.name.localeCompare(c2.name)) 
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s['@id']} />); 
    const softwareJsx = softwares     
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s['@id']} />); 

    const [categories, setCatValue] = useState([]);
    const [software, setSoftValue] = useState([]);
    const [title, onChangeTitle] = useState("");
    const [windows, onChangeWindows] = useState("");
    const [mac, onChangeMac] = useState("");
    const [linux, onChangeLinux] = useState("");
    const [context, onChangeContext] = useState("");
    const [description, onChangeDescription] = useState("");
    console.log(categories);
    console.log(software);


    //   UPLOAD IMAGE
    

    return (
      <ScrollView>
        <View style={styles.menu}>
            <Text style={styles.text}>Logiciel</Text>
            <Picker
                selectedValue={software}
                style={styles.picker}
                onValueChange={(v) => setSoftValue(v)}
            >
                {softwareJsx}
            </Picker>
            <Text style={styles.text}>Catégories</Text>
            <Picker
                selectedValue={categories}
                style={styles.picker}
                onValueChange={(v) => setCatValue(v)}
            >
                {categoriesJsx}
            </Picker>
            <View style={styles.containerSoftware}>
                <Text style={styles.titreSoft}>Titre</Text>
                <TextInput
                style={styles.softInput}
                onChangeText={onChangeTitle}
                value={title}
                placeholder="Saisissez le titre"
                />
            </View>
            <View style={styles.containerSoftware}>
                <Text style={styles.titreSoft}>Windows</Text>
                <TextInput
                style={styles.softInput}
                onChangeText={onChangeWindows}
                value={windows}
                placeholder="Saisissez le raccourci Windows"
                />
            </View>
            <View style={styles.containerSoftware}>
                <Text style={styles.titreSoft}>Mac</Text>
                <TextInput
                style={styles.softInput}
                onChangeText={onChangeMac}
                value={mac}
                placeholder="Saisissez le raccourci Mac"
                />
            </View>
            <View style={styles.containerSoftware}>
                <Text style={styles.titreSoft}>Linux</Text>
                <TextInput
                style={styles.softInput}
                onChangeText={onChangeLinux}
                value={linux}
                placeholder="Saisissez le raccourci Linux"
                />
            </View>
            <TextInput
                style={styles.inputContext}
                onChangeText={onChangeContext}
                value={context}
                placeholder="Context"
            />
            <TextInput
                style={styles.inputDescription}
                onChangeText={onChangeDescription}
                value={description}
                placeholder="Description"
            />
            {/* Ajouter une image */}
            <View style={styles.contimportImage}>
                <PickerImage/>  
            </View>


            <View style={styles.addButton}>
                <TouchableOpacity
                    title="Ajouter"
                    onPress={function () {
                    console.log("Test button");
                    const shortcut = {
                        title: title,
                        windows: windows,
                        macos: mac,
                        linux: linux,
                        context: context,
                        description: description,
                        software: software,
                        categories: [categories],
                    };
                    console.log(shortcut);
                    fetch(process.env.API_URL + "shortcuts", {
                        method: "POST",
                        headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify(shortcut),
                    })
                        .then((response) => response.json())
                        .then((data) => console.log(data))
                        .catch((err) => console.log(err));
                    }}>
                    <Text style={styles.textAddButton}>Ajouter</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    menu:{
        marginHorizontal:25,
    },
    text:{
        fontSize:18,
        fontWeight:'500',
        marginVertical:15,
    },
    picker:{
        // borderWidth: 2,
        borderColor: "#114A8A",
        borderRadius:5,
        marginBottom:10,
        fontSize:16,
        padding:10,
    },
    containerSoftware:{
        height:50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 5,
        borderWidth:1,
        borderColor:'#d8d8d8',
        borderRadius:5,
    },
    containerImg:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        width:200,
        height:50,
        marginVertical: 5,
        borderWidth:1,
        borderColor:'#d8d8d8',
        borderRadius:5,
    },
    contimportImage:{
        alignItems:'center',
        justifyContent:'center',
        height:220,
    },
    chooseImg:{
        width:'50%',
    },
    chooseTxt:{
        textAlign:'center', 
    },
    titreImg:{
        width:'50%',
        backgroundColor: '#114A8A',
        color:'white',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        fontWeight:'500',
        height:'100%',
        textAlign:'center',
        paddingTop:15,
    },
    titreSoft:{
        width:'20%',
        backgroundColor: '#114A8A',
        color:'white',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        fontWeight:'500',
        height:'100%',
        textAlign:'center',
        paddingTop:15,
    },
    softInput:{
        width:'80%',
        height:'100%',
        paddingLeft:10,
        backgroundColor:'white',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    inputContext:{
        backgroundColor:'white',
        height:50,
        fontSize:16,
        borderWidth: 1,
        borderColor: "#d8d8d8",
        borderRadius:5,
        marginVertical: 5,
        paddingLeft:10,
    },
    inputDescription:{
        backgroundColor:'white',
        height:100,
        fontSize:16,
        borderWidth: 1,
        borderColor: "#d8d8d8",
        borderRadius:5,
        marginVertical: 5,
        paddingLeft:10,

    },
    addButton:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        width:200,
        fontSize:18,
        fontWeight:'bold',
        color: 'white',
        backgroundColor:'#114A8A',
        borderRadius:5,
        marginVertical:20,
        marginLeft:'auto',
    },
    textAddButton:{
        fontSize:18,
        fontWeight:'500',
        color: 'white',
    },
    
});