import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    };

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    onAccept = () => {
        this.props.employeeDelete({ uid: this.props.employee.uid });
        this.setState({ showModal: false });
    };
    onDecline = () => {
        this.setState({ showModal: false });
    };
    onTextPress = () => {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your Shift is: ${shift}`);
    };
    onButtonPress = () => {
        const { name, phone, shift, employee } = this.props;
        this.props.employeeSave({
            name,
            phone,
            shift: shift || 'Monday',
            uid: employee.uid
        });
    };
    render() {
        const { name, phone, shift } = this.props;
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button title="Save Changes" onPress={this.onButtonPress} />
                </CardSection>
                <CardSection>
                    <Button title="Text Schedule" onPress={this.onTextPress} />
                </CardSection>
                <CardSection>
                    <Button
                        title="Fire"
                        onPress={() =>
                            this.setState({ showModal: !this.state.showModal })
                        }
                    />
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept}
                    onDecline={this.onDecline}
                >
                    Are you sure you want to delete?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
});

export default connect(
    mapStateToProps,
    { employeeSave, employeeUpdate, employeeDelete }
)(EmployeeEdit);
