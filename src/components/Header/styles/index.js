import { StyleSheet } from 'react-native';
import { fonts, pattern, palette } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    height: pattern.headerHeight,
    paddingTop: pattern.headerPadding,
    paddingHorizontal: pattern.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.white,
    borderBottomWidth: 1,
    borderColor: palette.lighter
  },
  title: {
    fontSize: fonts.xlg,
    fontWeight: 'bold'
  },
  span: {
    color: palette.primary
  }
});

export default styles;