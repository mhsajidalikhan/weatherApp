import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground, View } from 'react-native'
import { symbolicateLogNow,StyleSheet } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { haze, rainy, snow, sunny } from '../assets/backgroundImages/index';
import { Searchbar } from './Searchbar';

export default function Weather(weatherData, fetchWeatherData) {
  const [backgroundImage, setBackGroundImage] = useState(null);
 const {weather} = weatherData;
 const [{main}] = weather;
useEffect(() => {
  setBackGroundImage(getBackgroundImage(main))
}, [weatherData])
  function getBackgroundImage(weather){
    if(weather == 'snow') return snow;
    if(weather == 'rainy') return rainy;
    if(weather == 'haze') return haze;
    if(weather == 'sunny') return sunny;
  }

  return (
    <View style = { styles.container }>
      <ImageBackground
      source={backgroundImage}
      styles = {styles.backgroundImage}
      resizeMode ="cover"
      >
        <Searchbar fetchWeatherData ={fetchWeatherData} />
        <View styles={{alignItems:"center"}}>
          <Text style = {{ ...styles.headerText, color: "black", fontWeight: 'bold', fontSize :36}}>{name}</Text>
          <Text style = {{ ...styles.headerText, color: "black", fontWeight: 'bold', fontSize :36}}>{main}</Text>
          <Text style = {{ ...styles.headerText, color: "black", fontWeight: 'bold', fontSize :36}}>{temp}C</Text>
        </View>
        <View style = {styles.info}>
        <Text style = {{ color: "white", fontWeight: 'bold', fontSize :22}}>wind speed</Text>
        <Text style = {{ color: "white", fontWeight: 'bold', fontSize :22}}>{speed}</Text>
        </View>

      </ImageBackground>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage : {
    flex : 1,
    width : Dimensions.get('screen').width
  },
  headerText : {
    fontSize : 36,
    marginTop : 10,
    
  },
  extraInfo : {
    flexDirection : "row",
    marginTop : 20,
    justifyContent: "space-between",
    padding : 10

  },
  info : {
    width : Dimensions.get('screen').width/2.5,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding : 10,
    borderRadius: 15,
    justifyContent: "center"
  }
});
