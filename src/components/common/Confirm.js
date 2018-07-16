import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

export const Confirm = ({ children, visible, onAccept, onDecline }) => (
    <Modal
        animationType="slide"
        onRequestClose={() => {}}
        transparent
        visible={visible}
    >
        <View style={styles.modal}>
            <CardSection style={styles.card}>
                <Text style={styles.text}>{children}</Text>
            </CardSection>
            <CardSection>
                <Button onPress={onAccept} title="Yes" />
                <Button onPress={onDecline} title="No" />
            </CardSection>
        </View>
    </Modal>
);

const styles = {
    modal: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    card: {
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    }
};
