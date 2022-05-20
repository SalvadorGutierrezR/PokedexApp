import { View, Text } from 'react-native'
import React from 'react'
import  Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import { Navigator } from './src/navigator/Navigator';

import { LogBox } from 'react-native';
import Tabs from './src/navigator/Tabs';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
    return(
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

export default App