import { StyleSheet } from 'react-native';
import { COLORS } from 'reena/src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 250,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
  },
});
