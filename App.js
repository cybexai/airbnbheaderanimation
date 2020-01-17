import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const images = [
  { id: 1, uri: require('./assets/images/1.jpg')},
  { id: 2, uri: require('./assets/images/2.jpg')},
  { id: 3, uri: require('./assets/images/3.jpg')},
  { id: 4, uri: require('./assets/images/4.jpg')},
  { id: 5, uri: require('./assets/images/5.png')},
];

export default class App extends React.Component {
  
  render() {
    return(
      <View style={{flex:1}}>

      <View style={styles.header} />

      <ScrollView>
      {images.map(image => (
        <View key={image.id} style={{height:400, margin:20}}>

          <Image 
          source={image.uri}
          style={styles.image}
          />

        </View>
      ))}
      </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 70,
    backgroundColor: 'grey',
    zIndex: 1000,
    elevation: 1000
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10
  }
})