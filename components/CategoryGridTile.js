import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchableComponent from './TouchableComponent';

const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}>
            <TouchableComponent onPress={props.onSelect} style={{flex: 1}}> 
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 130,
        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: .26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 4,
        padding: 10,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right'
    }
});

export default CategoryGridTile;