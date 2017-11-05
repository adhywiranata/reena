import { StyleSheet } from 'react-native';
import { COLORS } from 'reena/src/constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
  },
});
