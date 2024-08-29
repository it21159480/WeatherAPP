import { View, Text, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Forcast = () => {
  const API = '78bfb90012f6071fea49459f95766ba3'
  const lat = 51.5074
  const lon = -0.1278
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`


  const [data, setData] = useState();
  const getweather = () => {
    fetch(url)
      .then(response => (response.json())).then(data => (setData(data)))

  }

  useEffect(
    () => {
      getweather();
    }, []
  )

  const ShowData = ({ item }) => {
    const formattedDate = item.dt_txt ? item.dt_txt.slice(0, -3) : ''
    // console.log(data)
    return (
      <View style={{flexDirection:'row' , margin:15}}>
        <View style={{ marginRight:10, }}>
          <Image  style={{flex: 1, width: 100, height: 100, resizeMode:'contain',borderRadius:20,backgroundColor:'rgb(217, 217, 217)'}}
           source={{uri:`https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}}/>
        </View>
        <View>
          <Text style={{fontSize:22, fontWeight:'bold' , color:'black'}} >Colouds :{item.clouds?.all}</Text>
          <Text style={{ fontWeight:'bold' , color:'black'}}>Temperature : {item.main?.temp}</Text>
          <Text style={{ fontWeight:'bold' , color:'black'}}>Humidity : {item.main?.humidity}</Text>
          <Text style={{ fontWeight:'bold' , color:'black'}}>Wind Speed : {item.wind?.speed}</Text>
        </View>
        <View>
          <Text>{formattedDate}</Text>
        </View>

      </View>
    )

  }
  return (
    <View>
    <FlatList
      data={data?.list}
      renderItem={ShowData}
      keyExtractor={(data) => data.dt}
    />
  </View>
  )
}

export default Forcast