
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ItemListScreen from '../screens/shop/ItemListScreen'
import ItemViewScreen from '../screens/shop/ItemViewScreen'
import CartViewScreen from '../screens/shop/CartViewScreen'

// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//         </View>
//     );
// }

function LogoTitle() {
    return (
        <Text>shop-IT</Text>
    );
}


const Stack = createStackNavigator();

function ShopNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ItemList"
                    component={ItemListScreen}
                    options={({navigation})=>({
                        headerTitle: props => <LogoTitle {...props} />,
                        headerRight: () => (
                            <Button
                                onPress={() => {navigation.push('CartView')}}
                                title="view cart"
                                color="#00cc00"
                            />
                        )
                    })}/>
                <Stack.Screen name="ItemView" component={ItemViewScreen} 
                              options={({ route }) => ({ title: route.params.name })} />
                <Stack.Screen name="CartView" component={CartViewScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ShopNavigator;