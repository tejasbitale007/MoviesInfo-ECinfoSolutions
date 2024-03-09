// eslint-disable-next-line prettier/prettier
import {StyleSheet} from 'react-native';
import {color} from '../../../Color';

export const style = StyleSheet.create({
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchbaleStyle: {
    width: '100%',
    height: 48,
    backgroundColor: color.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    marginTop: 10,
    justifyContent: 'center',
  },
  LongButtonText: {
    color: color.ternary,
    fontSize: 16,
    lineHeight: 24,
    width: '100%',
    textAlign: 'center',
  },
  containerstyle: {
    flex: 0.9,
  },
});
