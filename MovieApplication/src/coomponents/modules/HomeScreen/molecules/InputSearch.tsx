import { Keyboard, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Input } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../../redux/store';
// import constants from '../../../../assets/constants';
// import SearchIconLeft from './SearchIconLeft';

import { useFocusEffect } from '@react-navigation/native';
import { color } from '../../../Color';
import { inputSearchStyle } from './InputSearch.Style';
import IconComponent from '../../../atoms/IconComponent';
import iconConstant from '../../../iconConstant';
// import {
// 	saveSelectedProperty,
// 	setKeyboardOn,
// 	updateListingSearch,
// 	updateSelectedSearchtext
// } from '../../../../screens/Home/redux/homeScreenSlice';
// import { getListSearchResult } from '../../../../screens/Home/redux/asyncAction';
// import { inputSearchStyle } from './InputSearch.Style';
// import RevIcon from '../../../atoms/Icon';
// import { debounce } from 'lodash';

interface InputSearchProps {
	showcrossIcon?: boolean;
}

const InputSearch = (props: InputSearchProps) => {
	const selectedProperty = useSelector(
		(state: StoreType) => state?.Home?.selectedProperty
	);

	// const handleDebounce = (text: string) => {
	// 	dispatch(saveSelectedProperty(undefined));
	// 	if (text.length < constants.searchtextLength) {
	// 		dispatch(updateListingSearch([]));
	// 	} else {
	// 		dispatch(getListSearchResult(text));
	// 		dispatch(updateSelectedSearchtext(text));
	// 	}
	// };
	// const debounceFn = useCallback(
	// 	debounce(handleDebounce, constants.debounceTimer),
	// 	[]
	// );
	// useEffect(() => {}, []);

	useFocusEffect(
		React.useCallback(() => {
			// const keyboardWillShowSub = Keyboard.addListener(
			// 	'keyboardDidShow',
			// 	keyboardWillShow
			// );
			// const keyboardWillHideSub = Keyboard.addListener(
			// 	'keyboardDidHide',
			// 	keyboardWillHide
			// );
			// () => {
			// 	keyboardWillShowSub.remove();
			// 	keyboardWillHideSub.remove();
			// };
		}, [])
	);

	// const keyboardWillShow = (event) => {
	// 	dispatch(setKeyboardOn({ shown: true }));
	// };

	// const keyboardWillHide = (event) => {
	// 	dispatch(setKeyboardOn({ shown: false }));
	// };

	const dispatch = useDispatch();
	const [text, setText] = useState('');

	const showcrossicon = useMemo(() => {
		if (props.showcrossIcon && text?.length > 0) {
			return true;
		}
		return false;
	}, [text, props.showcrossIcon]);
	const onpressCrossIcon = () => {
		// dispatch(saveSelectedProperty(undefined));
		// dispatch(updateListingSearch([]));
		// setText('');
	};

	useEffect(() => {
		if (typeof selectedProperty !== 'undefined') {
			setText(selectedProperty.displayText);
			// dispatch(updateListingSearch([]));
		}
	}, [selectedProperty]);

	useEffect(() => {}, [text]);

	const onChangeProperty = (text: string) => {
		setText(text);
		// debounceFn(text);
	};
	const getIconColor = () => {
		if (text?.length > 0) {
			return color.blackColor;
		}
		return color.lightGreyColor;
	};
	return (
		<View
			testID="InputSearchComponent"
			style={inputSearchStyle.inputContainer}
		>
			<Input
				InputLeftElement={
					<IconComponent
						size={20}
						iconName={iconConstant.discover}
						containerStyle={inputSearchStyle.searchIcon}
					/>
				}
				InputRightElement={
					<>
						{text.length > 0 && (
							<TouchableOpacity
								testID="crossIconButton"
								onPress={() => onpressCrossIcon()}
							>
								<IconComponent
									size={20}
									iconName={iconConstant.userCircle}
									containerStyle={inputSearchStyle.crossIcon}
								/>
							</TouchableOpacity>
						)}
					</>
				}
				placeholder={'Search Movie here...'}
				variant={'ghost'}
				testID="textInput"
				onChangeText={(text) => onChangeProperty(text)}
				style={inputSearchStyle.input}
				value={text}
			/>
		</View>
	);
};

export default InputSearch;
