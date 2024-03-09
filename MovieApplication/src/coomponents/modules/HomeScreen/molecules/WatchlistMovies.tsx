import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent'
import MovieCard from './MovieCard'
import { watchlistMoviesStyles } from './watchListMovies.Styles'

const WatchlistMovies = () => {
  return (
      <View style={{marginTop:16}}>
      <TextComponent text={'Watchlist Movies'} style={watchlistMoviesStyles.textStyle} containerStyle={{}}/>
      <TextComponent text={'No watchList movies'} style={{fontSize:16,fontWeight:'700',}} containerStyle={{marginVertical:10}}/>
    </View>
  )
}

export default WatchlistMovies