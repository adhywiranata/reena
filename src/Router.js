import { StackNavigator } from 'react-navigation';

import {
  ExampleList,
  ExampleHidingOnScrollHeader,
  Welcome,
} from './components/pages';

export default StackNavigator({
  Home: { screen: Welcome },
  Examples: { screen: ExampleList },
  ExampleHidingOnScrollHeader: { screen: ExampleHidingOnScrollHeader },
});
