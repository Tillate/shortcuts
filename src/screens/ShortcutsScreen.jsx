import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text,  TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

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
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s['@id']} style={styles.pickerCont} />); 
    const softwareJsx = softwares     
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s['@id']} />); 

    const [categories, setCatValue] = useState([]);
    const [software, setSoftValue] = useState([]);
    const [windows, onChangeWindows] = useState("");
    const [mac, onChangeMac] = useState("");
    const [linux, onChangeLinux] = useState("");
    const [context, onChangeContext] = useState("");
    const [description, onChangeDescription] = useState("");
    console.log(categories);
    console.log(software);



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
            <TextInput
                style={styles.inputSoftware}
                onChangeText={onChangeWindows}
                value={windows}
                placeholder="Windows"
            />
            <TextInput
                style={styles.inputSoftware}
                onChangeText={onChangeMac}
                value={mac}
                placeholder="Mac"
            />
            <TextInput
                style={styles.inputSoftware}
                onChangeText={onChangeLinux}
                value={linux}
                placeholder="Linux"
            />
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
            <View style={styles.addButton}>
            <Button
                style={styles.textAddButton}
                title="Ajouter"
                onPress={function () {
                console.log("Test button");
                const shortcut = {
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
                }}
            />
            </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    menu:{
        marginHorizontal:15,
    },
    text:{
        fontSize:18,
        fontWeight:'500',
        marginVertical:15,
    },
    picker:{
        borderWidth: 2,
        borderColor: "#114A8A",
        borderRadius:5,
        marginBottom:20,
        fontSize:16,
    },
    inputSoftware:{
        height:50,
        fontSize:16,
        borderWidth: 2,
        borderColor: "#114A8A",
        borderRadius:5,
        marginBottom:15,
    },
    inputContext:{
        height:100,
        fontSize:16,
        borderWidth: 2,
        borderColor: "#114A8A",
        borderRadius:5,
        marginBottom:15,
    },
    inputDescription:{
        height:200,
        fontSize:16,
        borderWidth: 2,
        borderColor: "#114A8A",
        borderRadius:5,
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
});