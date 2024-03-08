/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import TextComponent from '../../../atoms/TextComponent'
import InputTextComponent from '../atoms/InputTextComponent'
import LongButtonIcon from '../atoms/LognButtonIcon'
import { color } from '../../../Color'
import { validPlaceholder, validPlaceholderforPassword } from '../utils';
import { useNavigation } from '@react-navigation/native';
import screenConstant from '../../../navigation/screenConstant';

const LoginForm = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [select, setSelect] = useState({
        emailField: false,
        passwordField: false
    })
    const onSubmitForm = () => {
        let userFields = {
            userName: email,
            Password: pwd
        }
        if(userFields.userName.length > 0 && userFields.Password.length > 0){
            
        setSelect({
            emailField: false,
            passwordField: false
        })
        navigation.navigate('BottomTabs Screen',{})
        }
        else{
            setSelect({
                emailField:true,
                passwordField:true
            })
        } 
    }
    const navigateToResgisterScreen = () =>{
        navigation.navigate('Register Screen',{})
    }
    return (
        <View style={{ marginTop: 200 }}>
            <TextComponent text={'Please Login...'} style={{ fontSize: 16, fontWeight: '700', color: 'black' }} />
            <InputTextComponent text={`Please Enter Username`}
                value={email}
                textStyle={{ color: color.darkColor }}
                onFocus={() => {
                    setSelect({
                        emailField: true,
                        passwordField: false
                    })
                }}
                onChangeText={(text) => setEmail(text)}
                placeHolderStyle={{ borderWidth: 1, borderRadius: 8, borderColor: color.iconColor, height: 45 }} containerStyle={{ marginTop: 10 }} />
            {select.emailField && <TextComponent text={validPlaceholder(email)} style={{ color: color.redColor }} />}
            <InputTextComponent text='Please Enter Password'
                value={pwd}
                onFocus={() => {
                    setSelect({
                        emailField: true,
                        passwordField: true
                    })
                }}
                textStyle={{ color: color.blackColor }}
                onChangeText={(password) => setPwd(password)}
                placeHolderStyle={{ borderWidth: 1, borderRadius: 8, borderColor: color.iconColor, height: 45 }} containerStyle={{ marginTop: 10 }} />
            {select.passwordField && <TextComponent text={validPlaceholderforPassword(pwd)} style={{ color: color.redColor }} />}

            <TouchableOpacity onPress={navigateToResgisterScreen}>
                <TextComponent text='Registered Here' style={{ fontSize: 16, fontWeight: '700', color: color.primary }} containerStyle={{ alignItems: 'center', marginTop: 10 }} />
            </TouchableOpacity>

            <LongButtonIcon text={'Sign In'} buttonContainerStyle={{ height: 45 }}
                onPress={onSubmitForm}
            />
        </View>
    )
}

export default LoginForm