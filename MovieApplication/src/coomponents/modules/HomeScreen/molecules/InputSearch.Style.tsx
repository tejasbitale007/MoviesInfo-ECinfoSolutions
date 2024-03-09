import { StyleSheet } from 'react-native';
import { color } from '../../../Color';

export const inputSearchStyle = StyleSheet.create({
	inputContainer: { flex: 1 },
	searchIcon: {
		marginLeft: 10,
		// borderColor: 'red',
		// borderWidth: 1,
		color: color.screeniconcolor
	},
	input: {
		width: '100%',
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: '400',
		paddingLeft: 10,
		// lineHeight: 24,
		fontFamily: 'DM Sans',
		// numberOfLines: 1,
		height: 40
	},
	crossIcon: {
		color: color.screeniconcolor,
		backgroundColor: color.tabbackground,
		borderRadius: 8,
		paddingLeft: 8,
		paddingTop: 8,
		marginLeft: 10,
		marginRight: 10
	}
});
