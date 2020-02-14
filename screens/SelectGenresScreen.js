import React from 'react';
import { CheckBox, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './../styles/styles.js'

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
      return (
        <View style={styles.container}> 
  
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>Action</Text>
              <CheckBox
                value={this.state.action}
                onChange={() => this.setState({ action: !this.state.action })}
              />
          </View>
  
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>Adventure</Text>
            <CheckBox
              value={this.state.adventure}
              onChange={() => this.setState({ adventure: !this.state.adventure })}
            />
          </View>
  
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>Anime</Text>
            <CheckBox
              value={this.state.anime}
              onChange={() => this.setState({ anime: !this.state.anime })}
            />
          </View>
  
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>Horror</Text>
              <CheckBox
                value={this.state.horror}
                onChange={() => this.setState({ horror: !this.state.horror })}
              />
          </View>
  
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>Romance</Text>
            <CheckBox
              value={this.state.romance}
              onChange={() => this.setState({ romance: !this.state.romance })}
            />
          </View>
  
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>SciFi</Text>
            <CheckBox
              value={this.state.scifi}
              onChange={() => this.setState({ scifi: !this.state.scifi })}
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