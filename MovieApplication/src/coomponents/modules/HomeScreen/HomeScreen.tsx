import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import TextComponent from '../../atoms/TextComponent'
import UserHeading from './molecules/UserHeading'
import TrendingMovies from './molecules/TrendingMovies'
import ImageComponent from '../../atoms/ImageComponent'
import WatchlistMovies from './molecules/WatchlistMovies'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingMovies } from './redux/asyncAction'
import { StoreType } from '../../redux/Store'

const HomeScreen = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTrendingMovies());
    },[]);
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
            <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
                <UserHeading />
                <TrendingMovies />
                <WatchlistMovies />
            </View>
        </ScrollView>
    )
}

export default HomeScreen