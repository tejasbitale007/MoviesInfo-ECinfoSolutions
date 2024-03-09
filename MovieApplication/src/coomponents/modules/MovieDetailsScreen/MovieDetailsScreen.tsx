import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieDetails } from '../movieDetails/redux/asyncAction';
import { StoreType } from '../../redux/Store';
import MovieHeader from './molecules/MovieHeader';
import MovieInfo from './molecules/MovieInfo';
import ButtonComponent from './atoms/ButtonComponent';
import Loader from '../../atoms/Loader';

const MovieDetailsScreen = ({ route }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    const { listingId } = route.params;
    dispatch(fetchMovieDetails(listingId))
  }, [])
  const movies = useSelector((state: StoreType) => state?.movieDetail);
  return (
    <>
    {movies?.loading && <Loader/>}
    {! movies?.loading && <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      <View style={{ marginHorizontal: 16, marginVertical: 16 }}>
        <MovieHeader />
        <MovieInfo />
        <ButtonComponent />
      </View>
    </ScrollView>}
    </>
  )
}

export default MovieDetailsScreen