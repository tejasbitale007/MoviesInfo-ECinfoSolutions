import { View, Text, TextInputProps, InputModeOptions, TextStyle, ViewStyle, KeyboardTypeOptions, TextInput } from 'react-native'
import React from 'react'
import TextComponent from '../../../atoms/TextComponent';
import { color } from '../../../Color';

interface InputTextProps {
    text?: string;
    textStyle?: TextStyle;
    textContainerStyle?: ViewStyle;
    placeHolderStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    placeholder?: string;
    value?: any;
    multiline?: boolean;
    keyboardType?: KeyboardTypeOptions;
    onFocus?: () => {};
    onChangeText?: (text: string) => void;
    placeHolderTextColor?: string;
    editable?: boolean;
    autoComplete?: TextInputProps;
    inputMode?: InputModeOptions;
    astrick?: boolean;
    onSubmitEditing?: () => {}
    getRef?: Function;
    focusTextInput?: Function
    returnKeyType?: string;
}

const InputTextComponent = (props: InputTextProps) => {
    return (
        <View testID="inputTextContainer" style={props.containerStyle}>
            {typeof props.text === 'string' && (
                <TextComponent
                    text={props.text}
                    containerStyle={props.textContainerStyle}
                    style={props.textStyle}
                />
            )}

            <TextInput
                returnKeyType={props.returnKeyType}
                multiline={props.multiline ?? false}
                inputMode={props.inputMode ?? 'text'}
                autoComplete={props.autoComplete ?? 'off'}
               autoCapitalize="none"
                selectionColor={color.blackColor}
                onFocus={props.onFocus}
                keyboardType={props.keyboardType}
                onChangeText={(searchText) => {
                    if (props.onChangeText) {
                        props.onChangeText(searchText);
                    }
                }}
                editable={props.editable}
                placeholder={props.placeholder}
                defaultValue={props.value}
                style={[
                    {
                        ...props.placeHolderStyle,
                        paddingLeft: 10,
                        textAlignVertical: props.multiline ? 'top' : 'center'
                    }
                ]}

                placeholderTextColor={props.placeHolderTextColor}
            />
        </View>
    )
}

export default InputTextComponent