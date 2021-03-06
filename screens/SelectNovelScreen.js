import React from 'react';
import {Text, View, SectionList, TouchableHighlight, Image  } from 'react-native';

//import {styles} from './../styles/styles.js'


// ***************
// import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';



const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
 
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});



// ***************

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

// export class SelectNovelScreen extends React.Component {}

//     constructor() {
//         super();
//         this.state = {}
//     }
//     componentDidMount() {
//         let items = Array.apply(null, Array(4)).map((v, i) => {
//             return { id: i, src: 'https://i.picsum.photos/id/'+ i +'/50/50.jpg' };
//             });
//         this.setState({
//             dataSource: items,
//         });
//         }
    
//         //handling onPress action  
//         getListViewItem = (item) => {  
//             this.props.navigation.navigate('ViewNovel',
//             {item: item.src        
//             })
//         }  
        
//      render() {
//       const { navigation } = this.props;  


//       const DATA = [
//         {
//           title: navigation.getParam('action') ? 'Action':'',
//           data: ['https://i.picsum.photos/id/10/80/80.jpg'],
//         },
//         {
//           title: navigation.getParam('adventure') ? 'Adventure':'',
//           data: ['https://i.picsum.photos/id/20/80/80.jpg'],
//         },
//         {
//           title: navigation.getParam('anime') ? 'Anime':'',
//           data: ['https://i.picsum.photos/id/30/80/80.jpg'],
//         },
//         {
//           title: navigation.getParam('horror') ? 'Horror':'',
//           data: ['https://i.picsum.photos/id/40/80/80.jpg'],
//         },
//         {
//           title: navigation.getParam('romance') ? 'Romance':'',
//           data: ['https://i.picsum.photos/id/50/80/80.jpg'],
//         },
//         {
//           title: navigation.getParam('scifi') ? 'Scifi':'',
//           data: ['https://i.picsum.photos/id/60/80/80.jpg'],
//         },
//       ];
  
//       console.log(DATA);
  
//       return (
      
//       <View style={styles.container2}> 
      
//         <SectionList 
//           sections={DATA}
//           keyExtractor={(item, index) => item + index}
//           renderItem={({ item }) => (
//             <TouchableHighlight onPress={() => this.props.navigation.navigate('ViewNovel', {thumbnail: item})} >
//               <View style={{margin: 20 }}>
//                 <Image style={styles.imageThumbnail} source={{ uri: item }} />               
//               </View>
//             </TouchableHighlight>
//           )} 
//           renderSectionHeader={({ section: { title } }) => (
//             <View style={{margin: 20 }}>
//               <Text style={styles.genres}>{title}</Text>
//             </View>

//           )}
//         />
//       </View>
//       )
//     }
//   } 