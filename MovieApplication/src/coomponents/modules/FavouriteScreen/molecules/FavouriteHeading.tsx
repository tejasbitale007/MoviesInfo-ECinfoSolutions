import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent'
import { watchlistMoviesStyles } from '../../HomeScreen/molecules/watchListMovies.Styles'

const FavouriteHeading = () => {
  return (
    <View>
            <TextComponent text={'Favuorite Movies'} style={watchlistMoviesStyles.textStyle} containerStyle={{}} />
    </View>
  )
}

export default FavouriteHeading