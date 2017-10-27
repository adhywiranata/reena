import { StyleSheet } from 'react-native';
import { COLORS } from 'reena/src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey.lynch,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 72,
    fontWeight: '100',
    letterSpacing: 3,
    color: COLORS.grey.iron,
  },
  backButtonLabel: {
    fontWeight: '600',
  },
});
