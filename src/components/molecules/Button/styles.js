import { StyleSheet } from 'react-native';
import { COLORS } from 'reena/src/constants';

export default StyleSheet.create({
  container: {
    borderColor: COLORS.grey.gallery,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  text: {
    color: 'white',
  },
});
