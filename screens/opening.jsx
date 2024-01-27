import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {opening} from "../styles.js";
import { Pressable, Alert, TextInput } from 'react-native';

export function Opening({ navigation }) {
    let [user,setUser] = React.useState();
    let [pass,setPass] = React.useState();
    return (
        <View style={opening.container}>
        <View style={opening.titleDiv}>
        <Text style={opening.title}>Gamify</Text>
        <Text style={opening.title}>Green</Text>
        </View>
        <TextInput 
        style={opening.input}
        onChangeText={setUser}
        value={user}
        placeholder="Username"
        keyboardType="text"/>

        <TextInput 
        style={opening.input}
        onChangeText={setPass}
        value={pass}
        placeholder="Password"
        keyboardType="text"/>
        <Pressable onPress={()=>{alert("API call")}} style={opening.button}>
        <Text style={opening.buttonText}>Login!</Text>
        </Pressable>
        <Pressable onPress={()=>{alert("API call")}} style={opening.button}>
        <Text style={opening.buttonText}>Sign up!</Text>
        </Pressable>
        <StatusBar style="auto" />
        </View>
    );
}