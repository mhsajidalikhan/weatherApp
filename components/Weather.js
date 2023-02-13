import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground, View } from 'react-native'
import { symbolicateLogNow,StyleSheet } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { haze, rainy, snow, sunny } from '../assets/backgroundImages/index';

export default function Weather(weatherData) {
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
        <View styles={{alignItems:"center"}}>
          <Text style = {{ ...styles.headerText, color: "black", fontWeight: 'bold', fontSize :36}}>{name}</Text>
          <Text style = {{ ...styles.headerText, color: "black", fontWeight: 'bold', fontSize :36}}>{main}</Text>
          <Text style = {{ ...styles.headerText, color: "black", fontWeight: 'bold', fontSize :36}}>{temp}C</Text>
        </View>
        <View style = {styles.info}>
        <Text style = {{ color: "white", fontWeight: 'bold', fontSize :22}}>Humidity</Text>
        <Text style = {{ color: "white", fontWeight: 'bold', fontSize :22}}>{humidity}%</Text>
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
    marginTop : 10
  }
});
