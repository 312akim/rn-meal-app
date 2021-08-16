import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    // Filter MEALS categoryIds array, indexOf returns -1 if not in array
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItem = (itemData) => {
        return (
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals} 
                renderItem={renderMealItem}
            />
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;