import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import newlogo from '../../assets/newlogo.png';

const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View><Image source={newlogo} styles={styles.logoheader}/></View>
           <Text style={styles.title}>Get your groceries delivered to your home</Text>
            <View style={styles.buttonsContainer}>
                <Button
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Shop Now
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
             
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonsContainer: {
        width: '100%',
    },
    button: {
        marginTop: 5,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#D8D7D5',
    },
    signupButton: {
        marginTop: 10,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: '#B6E5D8',
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Landing
