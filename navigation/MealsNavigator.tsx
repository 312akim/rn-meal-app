import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../themes/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }
}

// React component w/ Navigation built in. Need to wrap with createAppContainer
const MealsNavigator = createStackNavigator({
    // Custom key: Pointer to React Component
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, defaultStackNavOptions);

const FavNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    }
}, defaultStackNavOptions)

const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        },
        // Only supported on Shifting true
        tabBarColor: Colors.primaryColor,
        /* On shiftin false, sets config for bar
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
        */
    }},
    Favorites: {screen: FavNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.accentColor
    }}
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
}) : createBottomTabNavigator(tabScreenConfig,
{
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
    }
});

export default createAppContainer(MealsFavTabNavigator);