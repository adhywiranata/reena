import { StackNavigator } from 'react-navigation';

import { Welcome } from './components/pages';

export default StackNavigator({
  Home: { screen: Welcome },
});
