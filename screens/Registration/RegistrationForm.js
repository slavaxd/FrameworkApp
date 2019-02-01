import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        paddingTop: 70,
    },
    input:{
        width: '90%',
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.85)',
        marginBottom: 10,
        padding: 10,
        color: '#000',
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonContainer:{
        backgroundColor: 'rgba(225,225,225,0)',
        width: '70%',
        height: 50,
        padding: 10,
        marginTop: 40,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'center'
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18
    }
});

export default class RegistrationForm extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TextInput style = {styles.input} 
                autoCapitalize="sentences" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='default' 
                returnKeyType="next" 
                placeholder="ім'я" 
                placeholderTextColor='rgba(100,100,100,0.75)'/>
            <TextInput style = {styles.input} 
                autoCapitalize="sentences" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='default' 
                returnKeyType="next" 
                placeholder='прізвище' 
                placeholderTextColor='rgba(100,100,100,0.75)'/>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='phone-pad' 
                returnKeyType="next" 
                placeholder='моб. телефон' 
                placeholderTextColor='rgba(100,100,100,0.75)'/>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='email' 
                placeholderTextColor='rgba(100,100,100,0.75)'/>        
            <TextInput style = {styles.input}   
                returnKeyType="go" 
                ref={(input)=> this.passwordInput = input} 
                placeholder='пароль' 
                placeholderTextColor='rgba(100,100,100,0.75)' 
                secureTextEntry/>
            <TextInput style = {styles.input}   
                returnKeyType="go" 
                ref={(input)=> this.passwordInput = input} 
                placeholder='повторити пароль' 
                placeholderTextColor='rgba(100,100,100,0.75)' 
                secureTextEntry/>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={this.onButtonPress}
                activeOpacity={1}>
                <Text style={styles.buttonText}>ЗАРЕЄСТРУВАТИСЯ</Text>
            </TouchableOpacity> 
      </View>
    )
  }
}
