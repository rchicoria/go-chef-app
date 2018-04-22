import { AppRegistry } from 'react-native';
import App from './App';
import {YellowBox} from 'react-native';

// Ignores react-navigation warning
YellowBox.ignoreWarnings(['Warning: isMounted']);
YellowBox.ignoreWarnings(['Module RCTImageLoader']);

AppRegistry.registerComponent('GoChefApp', () => App);
