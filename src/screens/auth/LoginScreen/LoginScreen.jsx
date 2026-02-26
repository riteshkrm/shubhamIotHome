import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './LoginScreenStyles'

const LoginScreen = () => {
    return (
        //main container
        <View style={styles.mainContainer}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>
                    Loging
                </Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    // onChangeText={ }
                    // value={ }
                    placeholder="Enter Your Registered Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    // onChangeText={ }
                    // value={ }
                    placeholder="Enter Your Password"
                    keyboardType="email-address"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.forgetContainer} >
                <TouchableOpacity >
                    <Text style={styles.buttonForgetText}>Forget password</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.buttonForgetText}>Create a account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen