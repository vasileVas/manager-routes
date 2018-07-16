import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    };
    render() {
        const { name, phone, shift } = this.props;
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button title="Create" onPress={this.onButtonPress} />
                </CardSection>
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
    { employeeCreate }
)(EmployeeCreate);
