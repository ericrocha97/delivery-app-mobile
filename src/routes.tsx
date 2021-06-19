import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { LoginScreen } from './screens/login/login.screen';
import { RegisterScreen } from './screens/register/register.screen';
import { HomeScreen } from './screens/home/home.screen';
import { DeliveryRouteScreen } from './screens/deliveryRoute/deliveryRoute.screen';
import { DeliveryScreen } from './screens/delivery/delivery.screen';
import { DeliveriesScreen } from './screens/deliveries/deliveries.screen';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Navigator headerMode="none" initialRouteName="Login">
            <Screen name="Login" component={LoginScreen}></Screen>
            <Screen name="Home" component={HomeScreen}></Screen>
            <Screen name="Register" component={RegisterScreen}></Screen>
            <Screen name="DeliveryRoute" component={DeliveryRouteScreen}></Screen>
            <Screen name="Deliveries" component={DeliveriesScreen}></Screen>
            <Screen name="Delivery" component={DeliveryScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default Routes;