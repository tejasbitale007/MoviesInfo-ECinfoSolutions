import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { StoreType } from '../../../redux/Store'
import ImageComponent from '../../../atoms/ImageComponent'

const MovieHeader = () => {
    const movieComponent = useSelector((state:StoreType)=>state?.movieDetail.movieInformation);
    const imageSource = `https://image.tmdb.org/t/p/w500${movieComponent?.poster_path}`;
    console.log(imageSource)
  return (
    <View>
      <ImageComponent resizeMode='stretch' imageSource={imageSource} style={{width:'auto', height:400 , borderRadius:12}} containerStyle={{}}/>
    </View>
  )
}

export default MovieHeader