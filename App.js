import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultDrawer} from './components/routes/Drawers';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <DefaultDrawer />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;

