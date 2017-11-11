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
    fontSize: 48,
    fontWeight: '100',
    letterSpacing: 3,
    color: COLORS.grey.iron,
  },
  desc: {
    fontSize: 16,
    fontWeight: '100',
    color: COLORS.grey.iron,
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
