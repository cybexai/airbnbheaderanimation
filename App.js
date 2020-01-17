import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Platform, StatusBar } from 'react-native';
import Animated from 'react-native-reanimated';

const images = [
  { id: 1, uri: require('./assets/images/1.jpg')},
  { id: 2, uri: require('./assets/images/2.jpg')},
  { id: 3, uri: require('./assets/images/3.jpg')},
  { id: 4, uri: require('./assets/images/4.jpg')},
  { id: 5, uri: require('./assets/images/5.png')},
];

const scrollY = new Animated.Value(0);

const HEADER_HEIGHT = Platform.OS == 'ios'?115:70
+StatusBar.currentHeight;

const diffClampScrollY = Animated.diffClamp(scrollY,0,HEADER_HEIGHT)

const headerY = Animated.interpolate(diffClampScrollY,{
  inputRange: [0, HEADER_HEIGHT],
  outputRange: [0, -HEADER_HEIGHT]
})


export default class App extends React.Component {
    
  render() {
    return(
      <View style={{flex:1}}>

      <Animated.View style={styles.header}> 

      <Text>Animated Header</Text>

      </Animated.View>

      <Animated.ScrollView
      contentContainerStyle={styles.scrollView}
      bounces={false}
      scrollEventThrottle={16}
      onScroll={Animated.event([
        {
          nativeEvent: { contentOffset:{y : scrollY} }
        }
      ])}
      >
      {images.map(image => (
        <View key={image.id} style={{height:400, margin:20}}>

          <Image 
          source={image.uri}
          style={styles.image}
          />

        </View>
      ))}
      </Animated.ScrollView>
              
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: HEADER_HEIGHT,
    backgroundColor: 'grey',
    zIndex: 1000,
    elevation: 1000,
    transform: [{ translateY: headerY }],
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10
  },
  scrollView: {
    paddingTop: HEADER_HEIGHT
  }
})