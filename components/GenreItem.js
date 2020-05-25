import { Component,Text, View, ImageBackground,  } from 'react';

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