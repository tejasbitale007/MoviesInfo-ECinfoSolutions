import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { color } from '../../../Color';
import InputTextComponent from '../../LoginScreen/atoms/InputTextComponent';
import LongButtonIcon from '../../LoginScreen/atoms/LognButtonIcon';
import { validConfirmPlaceholderforPassword, validPlaceholder, validPlaceholderforPassword } from '../../LoginScreen/utils';
import TextComponent from '../../../atoms/TextComponent';

const RegisterForm = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const [mobile, setMobile] = useState('');
    const [select, setSelect] = useState({
        emailField: false,
        passwordField: false,
        confrimPassword: false,
        mobileField: false
    })
    const onSubmitForm = () => {
        let userFields = {
            userName: email,
            Password: pwd,
            confirmPassword: cpwd,
            mobile: mobile
        }
        if (userFields.userName.length > 0 && userFields.Password.length > 0) {

            setSelect({
                emailField: false,
                passwordField: false,
                confrimPassword: false,
                mobileField: false
            })
            navigation.navigate('Login Screen', {})
        }
        else {
            setSelect({
                emailField: true,
                passwordField: true,
                confrimPassword: true,
                mobileField: true
            })
        }
    }
    const navigateToResgisterScreen = () => {
        navigation.navigate('BottomTabs Screen', {})
    }
    return (
        <View style={{marginTop:50}}>
            <TextComponent text={'Register YoureSelf'} style={{ fontSize: 16, fontWeight: '700', color: 'black' }} />
            <InputTextComponent text={`Please Enter Username`}
                value={email}
                textStyle={{ color: color.darkColor }}
                onFocus={() => {
                    setSelect({
                        emailField: true,
                        passwordField: false,
                        confrimPassword: false,
                        mobileField: false
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
                        passwordField: true,
                        confrimPassword: false,
                        mobileField: false
                    })
                }}
                textStyle={{ color: color.blackColor }}
                onChangeText={(password) => setPwd(password)}
                placeHolderStyle={{ borderWidth: 1, borderRadius: 8, borderColor: color.iconColor, height: 45 }} containerStyle={{ marginTop: 10 }} />
            {select.passwordField && <TextComponent text={validPlaceholderforPassword(pwd)} style={{ color: color.redColor }} />}

            <InputTextComponent text='Please Enter Confirm Password'
                value={cpwd}
                onFocus={() => {
                    setSelect({
                        emailField: true,
                        passwordField: true,
                        confrimPassword: true,
                        mobileField: false
                    })
                }}
                textStyle={{ color: color.blackColor }}
                onChangeText={(cpassword) => setCpwd(cpassword)}
                placeHolderStyle={{ borderWidth: 1, borderRadius: 8, borderColor: color.iconColor, height: 45 }} containerStyle={{ marginTop: 10 }} />
            {select.confrimPassword && <TextComponent text={validConfirmPlaceholderforPassword(pwd)} style={{ color: color.redColor }} />}

            <InputTextComponent text='Please Enter Mobile Number'
                value={pwd}
                onFocus={() => {
                    setSelect({
                        emailField: true,
                        passwordField: true,
                        confrimPassword: true,
                        mobileField: true
                    })
                }}
                textStyle={{ color: color.blackColor }}
                onChangeText={(number) => setMobile(number)}
                placeHolderStyle={{ borderWidth: 1, borderRadius: 8, borderColor: color.iconColor, height: 45 }} containerStyle={{ marginTop: 10 }} />
            {select.mobileField && <TextComponent text={validPlaceholderforPassword(pwd)} style={{ color: color.redColor }} />}

            <LongButtonIcon text={'Register'} buttonContainerStyle={{ height: 45, marginTop: 10 }}
                onPress={onSubmitForm}
            />
        </View>
    )
}

export default RegisterForm

