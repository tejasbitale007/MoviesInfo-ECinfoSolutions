import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent'
import { TrendingMoviesStyle } from './TrendingMoviesStyle'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import { StoreType } from '../../../redux/Store'

const TrendingMovies = () => {
  const movieData = useSelector((state:StoreType)=>state?.homeScreen?.trendings?.results);
  console.log(movieData?.length)
  return (
    <View style={{marginTop:16}}>
      <TextComponent text={'Trending Movies'} style={TrendingMoviesStyle.textStyle} containerStyle={{}}/>
      <MovieCard/>
    </View>
  )
}

export default TrendingMovies