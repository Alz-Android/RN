import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './../styles/styles.js'


export class RegisterScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.logo}>RailViewer</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({email:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Confirm Password" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          
          <TouchableOpacity style={styles.loginBtn}>
            <Text >Submit</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }