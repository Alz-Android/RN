import React from 'react';
import {Text, View, FlatList, TouchableHighlight, Image  } from 'react-native';

import {styles} from '../styles/styles.js'

export class ViewNovelScreen extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          thumbnail:""
        }
      }

    render() {
        const { navigation } = this.props;  
        const sd = navigation.getParam('thumbnail');  

        console.log(sd);
    
        return (
          <View style={styles.container}> 
            <Image style={styles.imageThumbnail} source={{ uri: sd }} />  
          </View>
        )
    }

}