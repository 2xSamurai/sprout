import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuProvider } from 'react-native-popup-menu';
import { useSelector, useDispatch } from 'react-redux';


import colors from './assets/styles/colors';
import { getFontFamily } from './assets/styles/helperFunctions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import Onboarding from './containers/onboarding';
import Test from './containers/test/index';
import Main from './containers/main';


const Stack = createStackNavigator();


function MainNavigator() {
    const oboardingData = useSelector((state) => state?.app?.onboarding);
    console.log('oboardingData', oboardingData)

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                {/* <Stack.Screen name="Test" component={Test} /> */}
                {!oboardingData.status && <Stack.Screen name="Main" component={Main} />}
               {oboardingData.status && <Stack.Screen name="Onboarding" component={Onboarding} />}
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainNavigator;