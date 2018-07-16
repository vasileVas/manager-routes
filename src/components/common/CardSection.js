import React, { Component } from 'react';
import { View } from 'react-native';

const cardSectionStyle = {
    padding: 5,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
};

export const CardSection = props => (
    <View style={{ ...cardSectionStyle, ...props.style }}>
        {props.children}
    </View>
);
