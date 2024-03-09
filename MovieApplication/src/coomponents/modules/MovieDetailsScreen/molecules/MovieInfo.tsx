import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent'
import { useSelector } from 'react-redux'
import { StoreType } from '../../../redux/Store'
import { color } from '../../../Color'
import LongButtonIcon from '../../LoginScreen/atoms/LognButtonIcon'

const MovieInfo = () => {
    const movieDetails = useSelector((state:StoreType)=>state?.movieDetail?.movieInformation);
  return (
    <View>
      <TextComponent text={movieDetails?.title} style={{color:color.blackColor, fontSize:16,fontWeight:'700'}} containerStyle={{marginTop:5}}/>
      <TextComponent text={movieDetails?.overview} style={{fontSize:14, fontWeight:'400', color:color.blackColor}} containerStyle={{marginTop:2}}/>
    </View>
  )
}

export default MovieInfo