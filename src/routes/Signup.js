import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

export default class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            image: ''
        };
    }
    async Signup() {
        try {
            let response = await fetch('http://192.168.8.115:8000/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: this.state.username,
                        passwors: this.state.password,
                        email: this.state.email
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
                <View style={styles.container}>
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

                    <TextInput
                        placeholder="username"
                        returnKeyType="next"
                        onChangeText={value =>
                            this.setState({ username: value })}
                        placeholderTextColor="#800080"
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="password"
                        secureTextEntry={true}
                        returnKeyType="next"
                        onChangeText={value =>
                            this.setState({ password: value })}
                        placeholderTextColor="#800080"
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="email"
                        returnKeyType="go"
                        onChangeText={value => this.setState({ email: value })}
                        placeholderTextColor="#800080"
                        style={styles.input}
                    />
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.Signup()}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>

                    <Button
                    title="Go back to Login"
                    onPress={() => this.props.changeV('Login')}
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
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#E0FFFF',
        color: '#C71585',
        paddingHorizontal: 10,
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
