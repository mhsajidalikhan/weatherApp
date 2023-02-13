import React, { useState } from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


export default function Searchbar({fetchWeatherData}) {
  const[cityName,setCityName] = useState('');

  return (
    <View style = {styles.searchbar}>
        <TextInput
        placeholder='Enter city name'
        name = {cityName}
        onChangeText = {(text) = setCityName(text)}
        >
          <EvilIcons name="search" size={24} color="black" onPress={() =>fetchWeatherData(cityName)}/>
        </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
searchbar : {
  marginTop : 10,
  flexDirection : "row",
  alignItems:'center',
  justifyContent:'space-between',
  width: Dimensions.get('screen').width -20,
  borderWidth : 1.5,
  borderVertical :10,
  borderRadius:25,
  marginHorizontal :10 ,
  paddingHorizontal: 10,
  backgroundColor: 'lightgray',
  borderColor: 'lightgray'
}
})