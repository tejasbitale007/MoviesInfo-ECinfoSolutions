import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent'
import { userHeadingStyle } from './UserHeadingStyle'

const UserHeading = () => {
    return (
        <View>
            <TextComponent text={`${'Hello Tejas'}`} style={userHeadingStyle.textStyle} containerStyle={{}} />     
            <TextComponent text={`${"Welcome to EC's movie recommondation app"}`} style={userHeadingStyle.textStyle1} containerStyle={{}} />     
        </View>
    )
}

export default UserHeading