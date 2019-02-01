import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import LoginForm from './LoginForm'
import { Actions } from 'react-native-router-flux';
import firebase from '../../Firebase'
//import { GoogleSignin, statusCodes } from 'react-native-google-signin';

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonContainer: {
        paddingVertical: 15,
        paddingRight: 50,
        paddingLeft: 50,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    authContainer: {
        flex: 0.4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttonAuth: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingRight: 50,
        paddingLeft: 50,
        borderRadius: 10,
        width: '80%',
    },
    buttonFacebook: {
        backgroundColor: "#4E668E",
        marginBottom: -20
    },
    buttonGoogle: {
        backgroundColor: "#E26358"
    },
    buttonTextAuth: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
})

export default class LoginPage extends Component {
  signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo)
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/login.png')}
                        style={{ width: '100%', height: '100%', flex: 1 }}
                    >
                        <LoginForm />
                    </ImageBackground>
                </View>
                <View style={styles.authContainer}>
                    <TouchableOpacity
                        style={[styles.buttonAuth, styles.buttonFacebook]}
                        onPress={this.onButtonPress}
                        activeOpacity={1}>
                        <View style={{ alignSelf: 'flex-start' }}>
                            {/* <Image 
                            source={require('../assets/images/facebook.png')} 
                            style={{ width: 30, height: 30, }}
                        ></Image> */}
                        </View>
                        <Text style={styles.buttonTextAuth} >Увійти через Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonAuth, styles.buttonGoogle]}
                        onPress={this.onButtonPress}
                        activeOpacity={1}>
                        {/* <Image 
                        source={require('../assets/images/google.png')} 
                        style={{ width: 30, height: 30,  }}
                    ></Image> */}
                        <Text style={styles.buttonTextAuth} onPress={this.signInGoogle} >Увійти через Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onButtonPress}>
                        <Text style={{ color: '#444' }}>Створити акаунт</Text>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        )
    }
}
