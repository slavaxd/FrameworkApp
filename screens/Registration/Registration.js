import React, { Component } from 'react'
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import RegistrationForm from './RegistrationForm'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default class Registration extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ScrollView>   
                <ImageBackground 
                    source={require('../../assets/registration.jpg')} 
                    style={{ width: '100%', height: '100%', flex: 1, }}
                >
                    <RegistrationForm />   
                </ImageBackground>
            </ScrollView> 
        </KeyboardAvoidingView>
    )
  }
}
