import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import firebase from 'firebase';

import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
    componentDidMount() {
        const config = {
            apiKey: 'AIzaSyATZaimcW5oUwt59tY6CLkwAaH9kSeCbTA',
            authDomain: 'manager-ac6f9.firebaseapp.com',
            databaseURL: 'https://manager-ac6f9.firebaseio.com',
            projectId: 'manager-ac6f9',
            storageBucket: '',
            messagingSenderId: '833065849453'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(() => {})}>
                <LoginForm />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
