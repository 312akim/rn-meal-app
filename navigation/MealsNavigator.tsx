import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import FiltersScreen from '../screens/FiltersScreen';

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

// Adds header, only 1 screen stack
const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, defaultStackNavOptions)

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FilterNavigator
}, {
    contentOptions: {
        itemsContainerStyle: {
            marginTop: 60
        },
        activeTintColor: Colors.accentColor,
        inactiveTintColor: Colors.primaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
        }
    }
})

export default createAppContainer(MainNavigator);