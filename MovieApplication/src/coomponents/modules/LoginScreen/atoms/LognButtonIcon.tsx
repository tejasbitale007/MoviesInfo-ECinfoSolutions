/* eslint-disable prettier/prettier */
import {TouchableOpacity, ViewStyle, TextStyle, View} from 'react-native';
import React from 'react';
import {Checkbox, Spinner} from 'native-base';
import IconComponent from '../../../atoms/IconComponent';
import TextComponent from '../../../atoms/TextComponent';
import {style} from './LongButtonSTyle';

export interface RevLongButtonIcon {
  buttonContainerId?: string;
  buttonContainerStyle?: ViewStyle;
  text: string;
  buttonStyle?: ViewStyle;
  iconName?: string;
  size?: number;
  iconColor?: string;
  textstyle?: TextStyle;
  containerStyle?: ViewStyle;
  spinner?: boolean;
  onPress?: Function;
  iconContainerStyle?: ViewStyle;
  disabled?: boolean;
  viewBox?: string;
  checkbox?: boolean;
  loading?: boolean;
}

const LongButtonIcon = (props: RevLongButtonIcon) => {
  return (
    // will remove onpress condition once its passed everywhere
    <View style={props.buttonContainerStyle} testID={props.buttonContainerId}>
      <TouchableOpacity
        disabled={props.disabled}
        onPress={props.onPress ? props.onPress : () => {}}
        testID="touchablebtn"
        style={[style.touchbaleStyle, props.buttonStyle]}>
        {/* {props.loading && <TransparentLoader />} */}
        {typeof props.checkbox === 'boolean' &&
          props.checkbox &&
          !props.loading && (
            <Checkbox
              value="test"
              accessibilityLabel="This is a dummy checkbox"
              defaultIsChecked
            />
          )}
        {typeof props.iconName === 'string' && !props.loading && (
          <IconComponent
            iconName={props.iconName}
            size={props.size}
            color={props.iconColor}
            containerStyle={props.iconContainerStyle}
            testId="revicon"
            viewBox={props.viewBox}
          />
        )}
        {typeof props.text === 'string' && !props.loading && (
          <TextComponent
            style={{
              ...style.LongButtonText,
              ...props.textstyle,
            }}
            containerStyle={{
              ...style.containerstyle,
              ...props.containerStyle,
            }}
            text={props.text}
          />
        )}
        {props.spinner && !props.loading && (
          <Spinner accessibilityLabel="Loading posts" color="#FFFFFF.500" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LongButtonIcon;
