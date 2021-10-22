import React from 'react'
import {StyleSheet, View, Text, Button, Alert, TouchableOpacity } from 'react-native'

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.logotext}>모두의 프로젝트</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.kakao}>
                    <Text style={styles.kakaotext}>Kakao Login</Text>
                </TouchableOpacity>
            </View>
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
        flex:1,
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
    }
})

export default Login
