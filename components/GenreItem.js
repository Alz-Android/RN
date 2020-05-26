import React, { Component } from 'react';
import {CheckBox, Text, View, ImageBackground } from 'react-native';
import {styles} from './../styles/styles.js'

export class GenreItem extends Component { 
    render() {
      return ( 
        <View style={{flexDirection: 'row'}}>           
              <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: this.props.imageURI }} >
                <Text style={styles.loginText}>{this.props.genre }</Text>
              </ImageBackground>   
              <CheckBox
              value={this.props.state}
              onChange={() => this.setState({ adventure: !this.props.state })}
              />                    
        </View>
      );
    }
  }