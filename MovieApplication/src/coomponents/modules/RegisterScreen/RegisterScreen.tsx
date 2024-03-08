import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RegisterForm from './molecules/RegisterForm'

const RegisterScreen = () => {
    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <View style={{marginHorizontal:16,marginVertical:16}}>
                <RegisterForm/>
            </View>
        </ScrollView>
    )
}

export default RegisterScreen