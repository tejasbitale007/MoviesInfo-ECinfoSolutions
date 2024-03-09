import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../atoms/TextComponent'
import FavouriteHeading from './molecules/FavouriteHeading'

const FavouriteScreen = () => {
  return (
    <View style={{marginHorizontal:16 , marginVertical:16}}>
      <FavouriteHeading/>
    </View>
  )
}

export default FavouriteScreen