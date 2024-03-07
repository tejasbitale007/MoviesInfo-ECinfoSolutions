import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent'
import { watchlistMoviesStyles } from '../../HomeScreen/molecules/watchListMovies.Styles'

const MyProfileHeading = () => {
  return (
    <View>

            <TextComponent text={'My Profile'} style={watchlistMoviesStyles.textStyle} containerStyle={{}} />
    </View>
  )
}


export default MyProfileHeading