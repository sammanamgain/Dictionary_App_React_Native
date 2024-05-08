import {StyleSheet, Text, View, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import React from 'react';
import Home from './Components/Home_App/Pages/Home';
import {styled, useColorScheme} from 'nativewind';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
 <SafeAreaView>
  <ScrollView className='h-[100vh] dark:bg-[#121212] dark:text-white'>
     <View >

<Home></Home>

</View>
 </ScrollView>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
