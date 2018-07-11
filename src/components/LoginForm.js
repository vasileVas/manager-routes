import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    onEmailChange = text => {
        this.props.emailChanged(text);
    };
    onPasswordChange = text => {};
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        onChangeText={this.onEmailChange}
                        placeholder="email@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange}
                        secureTextEntry
                    />
                </CardSection>
                <CardSection>
                    <Button title="Login" />
                </CardSection>
            </Card>
        );
    }
}

export default connect(
    null,
    { emailChanged }
)(LoginForm);
