import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent'
import MovieCard from './MovieCard'
import { watchlistMoviesStyles } from './watchListMovies.Styles'

const WatchlistMovies = () => {
  return (
      <View style={{marginTop:16}}>
      <TextComponent text={'Watchlist Movies'} style={watchlistMoviesStyles.textStyle} containerStyle={{}}/>
      {/* <MovieCard/> */}
    </View>
  )
}

export default WatchlistMovies