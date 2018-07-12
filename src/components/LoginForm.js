import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    onEmailChange = text => {
        this.props.emailChanged(text);
    };
    onPasswordChange = text => {
        this.props.passwordChanged(text);
    };
    onButtonPress = () => {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    };
    renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text style={styles.error}>{this.props.error}</Text>
                </View>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return <Button title="Login" onPress={this.onButtonPress} />;
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        onChangeText={this.onEmailChange}
                        placeholder="email@gmail.com"
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange}
                        secureTextEntry
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>{this.renderButton()}</CardSection>
            </Card>
        );
    }
}

const styles = {
    error: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
});

export default connect(
    mapStateToProps,
    { emailChanged, passwordChanged, loginUser }
)(LoginForm);
