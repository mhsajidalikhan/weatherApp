import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Weather } from './components/Weather';


const API_KEY = '6c1dc0afa5184393ff55633bdc74474c';

export default function App() {
  const[weatherData, setWeatherData] = useState(null);
  const[loaded, setLoaded] = useState(null);
  const API = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
  async function fetchWeatherData(cityName){
    setLoaded(false);
    try{
      const response = await fetch(API);
      if(response.status == 200){
        const data = await response.json();
        setWeatherData(data);
      }else{
        setWeatherData(null)
      }
      setLoaded(true);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
   fetchWeatherData('islamabad');
   console.log(weatherData);
  },[]);
  if(!loaded){
    return (
      <View style={styles.container}>
        <ActivityIndicator color='grey' size ={36} />
      </View>
    )
  }
  else if(weatherData === null) {
    return (
        <View style={styles.container}>
            <SearchBar fetchWeatherData={fetchWeatherData}/>
            <Text style={styles.primaryText}>City Is Not Found! Try Different City</Text>
        </View>
    )
}
  return (
    <View style={styles.container}>
     <Weather fetchWeatherData ={fetchWeatherData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
