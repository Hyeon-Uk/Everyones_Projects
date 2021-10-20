import React from 'react'
import {StyleSheet, View, Text, Button, Alert, TouchableOpacity } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Now Loading....</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        textAlign:"center",

    }
})

export default Loading
