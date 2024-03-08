import { View, Text } from 'react-native'
import React from 'react'
import InputSearch from './InputSearch'
import { color } from '../../../Color'

const HomeSearch = () => {
  return (
    <View style={{borderWidth:1, borderColor:color.greyColor, borderRadius:8, marginTop:16}}>
        <InputSearch/>
    </View>
  )
}

export default HomeSearch