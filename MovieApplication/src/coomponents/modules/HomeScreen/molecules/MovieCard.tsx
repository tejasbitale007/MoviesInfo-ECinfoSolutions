import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Card from '../../../atoms/Card'
import { useSelector } from 'react-redux'
import { StoreType } from '../../../redux/Store'

const MovieCard = () => {
    const movieData = useSelector((state:StoreType)=>state?.homeScreen?.trendings?.results);
    return (
        <View>
            {Array.isArray(movieData) && movieData.length > 0 && 
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movieData}
            renderItem={({item,index})=>{
                const image = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
                return(
                    <View style={{ borderRadius:12 , borderColor:'grey', borderWidth:1 , marginRight:10 , width:'auto'}}>
                        <Card imageSource={image} price={item.title} address={item.overview} bed={item.vote_count} bath={item.vote_average} car={item.popularity} propertyType={item.media_type} numberOfLine={1} resizeMode={'stretch'} addressContainerStyle={{width:300}}/>
                    </View>
                )
            }}/>
            }
        </View>
    )
}

export default MovieCard