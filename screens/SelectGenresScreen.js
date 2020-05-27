import React from 'react';
import { CheckBox, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './../styles/styles.js'
import {GenreItem} from './../components/GenreItem.js'

export class SelectGenresScreen extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        action: false,
        adventure: false,
        anime: false,
        horror: false,
        romance: false,
        scifi: false,
      }
    }
  
    render() {
      // it seems as if when I'm using the custom component the info about the checkbox is going in the GenreItem, but it's not being reflected back out of that class.


      return (
        <View style={styles.container}>  
          <GenreItem imageURI={'https://i.picsum.photos/id/111/80/80.jpg'} genre={'Action'} state={this.state.action}> </GenreItem>
          {/* <GenreItem imageURI={'https://i.picsum.photos/id/112/80/80.jpg'} genre={'Adventure'} state={this.state.adventure}> </GenreItem> */}
          <GenreItem imageURI={'https://i.picsum.photos/id/113/80/80.jpg'} genre={'Anime'} state={this.state.anime}> </GenreItem>
          <GenreItem imageURI={'https://i.picsum.photos/id/114/80/80.jpg'} genre={'Horror'} state={this.state.horror}> </GenreItem>
          <GenreItem imageURI={'https://i.picsum.photos/id/115/80/80.jpg'} genre={'Romance'} state={this.state.romance}> </GenreItem>
          <GenreItem imageURI={'https://i.picsum.photos/id/116/80/80.jpg'} genre={'SciFi'} state={this.state.scifi}> </GenreItem>
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>Adventure</Text>
            <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/12/80/80.jpg' }} />
            <CheckBox
              value={this.state.adventure}
              onChange={() => this.setState({ adventure: !this.state.adventure })}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} 
            onPress={() => this.props.navigation.navigate('SelectNovel',
              {action: this.state.action, 
              adventure: this.state.adventure,
              anime: this.state.anime, 
              horror: this.state.horror,
              romance: this.state.romance,  
              scifi: this.state.scifi          
              })}>
            <Text>Next</Text>
          </TouchableOpacity>          
        </View>
      )    
    }
} 