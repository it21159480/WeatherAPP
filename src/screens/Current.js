import { View, Text, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Current = () => {
  const API = '78bfb90012f6071fea49459f95766ba3'
  const lat = 51.5074
  const lon = -0.1278
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`


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
  // const ShowData = ({ item }) => {

  //   // console.log(data)
  //   return (
  //     <View style={{flexDirection:'row' , margin:15}}>
  //       <View style={{ marginRight:10, }}>
  //         <Image  style={{flex: 1, width: 100, height: 100, resizeMode:'contain',borderRadius:20,backgroundColor:'rgb(217, 217, 217)'}}
  //          source={{uri:`https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}}/>
  //       </View>
  //       <View>
  //         <Text style={{fontSize:22, fontWeight:'bold' , color:'black'}} >Colouds :{item.clouds?.all}</Text>
  //         <Text style={{ fontWeight:'bold' , color:'black'}}>Temperature : {item.main?.temp}</Text>
  //         <Text style={{ fontWeight:'bold' , color:'black'}}>Humidity : {item.main?.humidity}</Text>
  //         <Text style={{ fontWeight:'bold' , color:'black'}}>Wind Speed : {item.wind?.speed}</Text>
  //       </View>
  //       <View>
  //         <Text>{formattedDate}</Text>
  //       </View>

  //     </View>
  //   )

  // }

  const item = data?.list[0];
  if (!item) {
    return <Text>No data available</Text>;
  }

  const formattedDate = item.dt_txt ? item.dt_txt.slice(0, -3) : '';

  return (
    <View>

      <View style={{ flexDirection: 'column', margin: 15, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ marginTop: 10, alignItems:'center'}}>
          <Image style={{ width: 170, height: 140, resizeMode: 'contain', borderRadius: 20, backgroundColor: 'rgb(217, 217, 217)' }}
            source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png` }} />
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' ,margin:25}} >Colouds :{item.clouds?.all}</Text>
        </View>
        <View style={{}}>

          <Text style={{ fontWeight: 'bold', color: 'black' }}>Temperature : {item.main?.temp}</Text>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>Humidity : {item.main?.humidity}</Text>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>Wind Speed : {item.wind?.speed}</Text>
        </View>
        

      </View>


    </View>
  )
}

export default Current