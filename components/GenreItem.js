import React, { Component } from 'react';
import {Text, View, ImageBackground } from 'react-native';
import {styles} from './../styles/styles.js'

export class GenreItem extends Component { 
    render() {
      return ( 
        <View style={{flexDirection: 'row'}}>           
              <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: this.props.inputProps.url }} >
                <Text style={styles.loginText}>{this.props.inputProps.genre }</Text>
              </ImageBackground>                       
        </View>
      );
    }
  }