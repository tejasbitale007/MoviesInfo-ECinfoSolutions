import { View, Text } from 'react-native'
import React from 'react'
import MyProfileHeading from './molecules/myProfileHeading'

const ProfileScreen = () => {
  return (

<View style={{marginHorizontal:16,marginVertical:16}}>
      <MyProfileHeading/>
    </View>
  )
}

export default ProfileScreen