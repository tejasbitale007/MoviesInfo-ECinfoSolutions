import { View, Text } from 'react-native'
import React from 'react'
import LongButtonIcon from '../../LoginScreen/atoms/LognButtonIcon'

const ButtonComponent = () => {
    return (
        <View style={{marginTop:5}}>
            <LongButtonIcon text={'View Movie'} />
            <LongButtonIcon text={'Add to WatchList'} />
        </View>
    )
}

export default ButtonComponent