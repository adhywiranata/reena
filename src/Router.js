import { StackNavigator } from 'react-navigation';

import {
  ExampleList,
  Welcome,
} from './components/pages';

export default StackNavigator({
  // Home: { screen: Welcome },
  Examples: { screen: ExampleList },
});
