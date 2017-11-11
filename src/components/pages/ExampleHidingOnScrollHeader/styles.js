import { StyleSheet } from 'react-native';
import { COLORS } from 'reena/src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 36,
    fontWeight: '100',
    letterSpacing: 3,
    color: COLORS.black,
  },
  desc: {
    fontSize: 14,
    fontWeight: '100',
    color: COLORS.black,
    marginBottom: 20,
  },
  backButton: {
    margin: 10,
  },
  backButtonLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
