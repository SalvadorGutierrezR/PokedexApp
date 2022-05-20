import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import { Navigator, RootStackParams } from './Navigator';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screens/PokemonScreen';

const Tab = createBottomTabNavigator();

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: '#ffffff'
                }
            }}
        >
            <Tab2.Screen name="HomeScreen" component={SearchScreen} />
            <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
        </Tab2.Navigator>
    );
}

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D5',
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    paddingBottom:5,
                    borderWidth: 0,
                    elevation: 0,
                    height: 60
                }
            }}
            sceneContainerStyle={{
                backgroundColor: '#ffffff'
            }}
        >
            <Tab.Screen 
                name="Navigator" 
                component={Navigator} 
                options={{ 
                    tabBarLabel: 'Pokémon',
                    tabBarIcon: ({color}) => <Icon color={color} size={25} name='list-outline' />
                }} 
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={Tab2Screen} 
                options={{ 
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color}) => <Icon color={color} size={25} name='search-outline' />
                }} 
            />
        </Tab.Navigator>
    )
}

export default Tabs