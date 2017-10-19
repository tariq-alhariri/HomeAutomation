import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    async onSubmit() {
        try {
            let response = await fetch('192.168.8.115/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: this.state.username,
                        passwors: this.state.password
                    }
                })
            });

            let res = await response.text();
        } catch (errors) {
            console.log('catch errors' + errors);
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./Smart.png')}
                    />
                </View>
                <Text style={styles.header}>
                    {' '}
                    Welcome to the Home Automation System
                </Text>

                <View style={styles.container}>
                    <TextInput
                        placeholder="username"
                        returnKeyType="next"
                        onChangeText={value =>
                            this.setState({ username: value })}
                        placeholderTextColor="#FFB6C1"
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="password"
                        secureTextEntry={true}
                        returnKeyType="go"
                        onChangeText={value =>
                            this.setState({ password: value })}
                        placeholderTextColor="#FFB6C1"
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.onSubmit.bind(this)}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Button
                        title="Go to Signup"
                        onPress={() => Actions.Signup({ Signup })}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87CEFA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {},
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 200,
        height: 200
    },
    header: {
        color: '#fff',
        marginTop: 5,
        textAlign: 'center',
        opacity: 0.8,
        fontWeight: '700'
    },
    input: {
        height: 40,
        width: 200,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#E0FFFF',
        color: '#C71585',
        paddingHorizontal: 10,
        width: 200,
        textAlign: 'center'
    },
    buttonContainer: {
        backgroundColor: '#C71585',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: '700'
    }
});
