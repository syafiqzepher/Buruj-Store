/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Buruj/routes/index';
import {name as appName} from './app.json';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
