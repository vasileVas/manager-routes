import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import firebase from 'firebase';

import LoginForm from './src/components/LoginForm';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
            <Provider store={store}>
                <View>
                    <Text>Login</Text>
                    <LoginForm />
                </View>
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
