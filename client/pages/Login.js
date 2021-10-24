import React,{useState} from 'react'
import {StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const submitBtn=async ()=>{
        console.log("clicked!");
        const data={
            u_email:email,
            u_password:password
        }
        try{
            fetch('https://localhost:8000/auth/login',{
                method:"POST",
                body:data,
            }).then(res=>console.log(res));
        }catch(err){
            throw err;
        } 
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.logotext}>모두의 프로젝트</Text>
            </View>

            {/* <View style={styles.buttons}>
                <TouchableOpacity style={styles.kakao}>
                    <Text style={styles.kakaotext}>Kakao Login</Text>
                </TouchableOpacity>
            </View> */}
            <TextInput value={email} onChangeText={(text)=>setEmail(text)} style={styles.email}/>
            <TextInput value={password} onChangeText={(text)=>setPassword(text)} style={styles.password}/>
            <Button title="Login" onPress={submitBtn}>

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"black",
    },
    logo:{
        flex:2,
        alignItems:"center",
        justifyContent:"center",
    },
    logotext:{
        color:"white",
        fontSize:30,
        textAlign:"center",
    },
    buttons:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    kakao:{
        backgroundColor:"yellow",
        padding:10,
        borderRadius:5,
        width:"80%",
    },
    kakaotext:{
        textAlign:"center",
    },
    email:{
        flex:1,
        borderColor:"black",
        backgroundColor:"white",
    },
    password:{
        flex:1,
        backgroundColor:"white",
    }
})

export default Login
