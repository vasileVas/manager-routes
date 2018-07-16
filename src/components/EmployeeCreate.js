import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
    render() {
        const { name, phone, shift } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        name="name"
                        label="Name"
                        placeholder="Name"
                        value={name}
                        onChangeText={text =>
                            this.props.employeeUpdate({
                                prop: 'name',
                                value: text
                            })
                        }
                    />
                </CardSection>
                <CardSection>
                    <Input
                        name="phone"
                        label="Phone"
                        placeholder="555-555-555"
                        value={phone}
                        onChangeText={text =>
                            this.props.employeeUpdate({
                                prop: 'phone',
                                value: text
                            })
                        }
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.shift}>Shift</Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={day =>
                            this.props.employeeUpdate({
                                prop: 'shift',
                                value: day
                            })
                        }
                        style={{ flex: 1 }}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button title="Create" />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    shift: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = state => ({
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
});

export default connect(
    mapStateToProps,
    { employeeUpdate }
)(EmployeeCreate);
