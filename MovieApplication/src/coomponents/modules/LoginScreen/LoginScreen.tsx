import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import LoginForm from './molecule/LoginForm'
import { useDispatch } from 'react-redux'

const LoginScreen = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
        <LoginForm />
      </View>
    </ScrollView>
  )
}

export default LoginScreen