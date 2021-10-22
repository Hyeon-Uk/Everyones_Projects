import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './pages/Loading';
import Login from './pages/Login';

const  App = () =>{
  const [isLoading,setIsLoading]=useState(false);
  return isLoading?  <Loading></Loading> : <Login></Login>;
}


export default App;