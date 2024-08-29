import { View, Text, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Current = () => {
  const API = '78bfb90012f6071fea49459f95766ba3'
  const lat = 51.5074
  const lon = -0.1278
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`
  // Latitude: 51.5074   - Longitude: -0.1278

  const [data, setData] = useState();
  const getweather = () => {
    fetch(url)
      .then(response => (response.json())).then(data => (setData(data)))

  }

  // const getWeeather =
  useEffect(
    () => {

      getweather();

    }, []
  )
  // console.log(data)

  const ShowData = ({ item }) => {
    // console.log(data)
    return (
      <View style={{flexDirection:'row'}}>
        <View>
          <Image  style={{flex: 1, width: 50, height: 50, resizeMode:'contain'}}
           source={{uri:`https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}}/>
        </View>
        <View>
          <Text>{item.clouds?.all}</Text>
          <Text>{item.main?.temp}</Text>
          <Text>{item.main?.humidity}</Text>
          <Text>{item.wind?.speed}</Text>
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

export default Current