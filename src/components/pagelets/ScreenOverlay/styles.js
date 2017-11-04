import { StyleSheet } from 'react-native';
import { COLORS } from 'reena/src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.transparent.black,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 998,
  },
  touchable: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
