import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

let TouchableComponent = TouchableOpacity;

if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
}

export default TouchableComponent;