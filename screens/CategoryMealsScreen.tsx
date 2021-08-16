import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    // Filter MEALS categoryIds array, indexOf returns -1 if not in array
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectedMeal={() => {}} 
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals} 
                renderItem={renderMealItem}
                style={{width: '100%', paddingHorizontal: 10}}
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