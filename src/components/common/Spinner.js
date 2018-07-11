import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size = 'large' }) => {
    return (
        <View style={styles.spinner}>
            <ActivityIndicator size={size} />
        </View>
    );
};

const styles = {
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
