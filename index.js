/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './Test/App';
import App from './Buruj/routes/index';
//import App from './testing/index';
//import App from './src/App';
import {name as appName} from './app.json';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
