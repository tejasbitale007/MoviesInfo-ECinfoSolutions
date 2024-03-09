import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent'
import { TrendingMoviesStyle } from './TrendingMoviesStyle'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import { StoreType } from '../../../redux/Store'
import { useNavigation } from '@react-navigation/native'

const TrendingMovies = () => {
  const movieData = useSelector((state: StoreType) => state?.homeScreen?.trendings?.results);
  const navigation = useNavigation();
  const onHandleClick = (item:number) =>{
    const listingId = item;
    navigation.navigate('Movie',{listingId})
  }
  return (
    <View style={{ marginTop: 16 }}>
      <TextComponent text={'Trending Movies'} style={TrendingMoviesStyle.textStyle} containerStyle={{}} />
      <View style={{marginTop:16}}>
        <MovieCard onPress={onHandleClick} />
      </View>
    </View>
  )
}

export default TrendingMovies