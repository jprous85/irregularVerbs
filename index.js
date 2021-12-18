/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Question from './src/components/question/Question';

AppRegistry.registerComponent(appName, () => Question);
