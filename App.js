import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Animated
} from 'react-native';


import{BlurView} from 'react-native-blur';

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40
const Item_width = Dimensions.get('window').width
class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }
    render() {


        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        })
        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        const profileImageMarginTop = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2), HEADER_MAX_HEIGHT + 5],
            extrapolate: 'clamp'
        })
        const headerZindex = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
            outputRange: [0, 0, 1000],
            extrapolate: 'clamp'
        })

        const headerTitleBottom = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT
                + 26
            ],
            outputRange: [-20, -20, -20, 0],
            extrapolate: 'clamp'
        })




        return (
            <View style={{ flex: 1 }} >
                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    height: headerHeight,
                    zIndex: headerZindex,
                    // elevation: headerZindex,//required for android
                    alignItems: 'center'
                }}>
                <Image style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    width: Item_width,
                    height: HEADER_MAX_HEIGHT,
                    

                    // elevation: headerZindex,//required for android
                    alignItems: 'center'
                }}source={require('./assets/img99.jpg')}

                ></Image>
              <Animated.View style={{ position: 'absolute', bottom: headerTitleBottom, marginTop:15 }}>
                        <Text style={styles.name5}>Kristina Jhones</Text>
                    </Animated.View>
                </Animated.View>

                <ScrollView style={{ flex: 1 }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                    )}
                >
                    <Animated.View style={{
                        height: profileImageHeight,
                        width: profileImageHeight,
                        borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
                        borderColor: 'white',
                        borderWidth: 3,
                        overflow: 'hidden',
                        marginTop: profileImageMarginTop,
                        marginLeft: Dimensions.get('window').width/2 - PROFILE_IMAGE_MAX_HEIGHT/2 ,

                    }}>
                    
                        <Image source={require('./assets/profile1.png')}
                            style={{ flex: 1, width: null, height: null }}
                        ></Image>
                       
                    </Animated.View>
                    <View style={styles.Mid}>
          <View style={styles.outerview}>
            <Text style={styles.texttone}>
              120
            </Text>
            <Text style={styles.texttwo}>
              Rated</Text>
          </View>
          <View style={styles.outerview}>
            <Text style={styles.texttone}>
              100
            </Text>
            <Text style={styles.texttwo}>
              Favorite</Text>
          </View>

        </View>
        <View style={{
          flex: 1,
          alignItems: 'center'
        }}>
        <Text style={styles.name}>Kristina Jhones</Text>

        <TouchableOpacity style={{
            flex: 1,
            flexDirection: 'row'
          }}>
          <Image style={{
              height: 20,
              width: 20
            }} source ={require('./assets/navi.png')}/>
          <Text style={styles.name1}>Chicago,United States</Text>
        </TouchableOpacity>

        <Text style={styles.name2}>The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.</Text>
      </View>
      <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#A9A9A9',
            borderTopColor: '#DCDCDC',
            height: 40,
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5
          }}>
          <TouchableOpacity >
            <Text style={{
                color: '#000',
                fontSize: 24,
                fontWeight: 'normal',
                alignItems: 'center',
                textDecorationLine: 'underline',
                marginLeft: 10,
                textDecorationColor:'#B22222'
              }}>Rated</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
                color: '#000',
                fontSize: 24,
                fontWeight: 'normal',
                alignItems: 'center',
                textDecorationLine: 'underline',
                textDecorationColor:'#B22222'
              }}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
                color: '#000',
                fontSize: 24,
                fontWeight: 'normal',
                alignItems: 'center',
                textDecorationLine: 'underline',
                textDecorationColor:'#B22222'
              }}>Credits</Text>

          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={{
                height: 20,
                width: 20,
                alignItems: 'center',
                marginRight: 10
              }} source ={require('./assets/sett.png')}/>
          </TouchableOpacity>
        </View>
<View style={styles.container1}>
        <View style={styles.container}>

        <View style={styles.column1}>
          <Image style={styles.image} source ={require('./assets/img1.jpg')}/>
        </View>
        <View style={styles.column1}>
          <Image style={styles.image1} source ={require('./assets/img2.jpg')}/>
        </View>
        <View style={styles.column1}>
          <Image style={styles.image2} source ={require('./assets/img3.jpg')}/>
        </View>

</View>
<View style={styles.container}>

<View style={styles.column1}>
  <Image style={styles.image2} source ={require('./assets/img5.jpg')}/>
</View>
<View style={styles.column1}>
  <Image style={styles.image1} source ={require('./assets/img6.jpg')}/>
</View>
<View style={styles.column1}>
  <Image style={styles.image} source ={require('./assets/img7.png')}/>
</View>

</View>
<View style={styles.container}>

<View style={styles.column1}>
  <Image style={styles.image1} source ={require('./assets/img8.jpg')}/>
</View>
<View style={styles.column1}>
  <Image style={styles.image} source ={require('./assets/img9.jpg')}/>
</View>
<View style={styles.column1}>
  <Image style={styles.image2} source ={require('./assets/img10.jpg')}/>
</View>

</View>
</View>

                    <View style={{ height: 1000 }}></View>
                </ScrollView>

            </View >
        );
    }
}
export default App;

const styles = StyleSheet.create({
  profilepiccontainer: {
  alignItems: 'center'
},
mypic: {
  flex: 1,
  width: null,
  alignSelf: 'stretch',
  borderRadius: 72.5
},
column2: {
  flex: 1,
  height: 150,
  width: 150,
  alignItems: 'center',
  justifyContent: 'center'
},
Mid: {
  flexDirection: 'row',
  borderTopColor: '#000'
},

outerview: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: -30
},
texttone: {
  color: '#000',
  fontSize: 25,
  fontWeight: 'bold'
},
texttwo: {
  color: '#000',
  fontSize: 23,
  fontWeight: 'normal'
},
name: {
  color: '#000',
  fontSize: 24,
  fontWeight: 'bold',
  margin: 5,

},
name5: {
  color: '#000',
  fontSize: 24,
  fontWeight: 'bold',

  color: 'white',
},
name1: {
  color: '#000',
  fontSize: 11,
  fontWeight: 'bold',
  margin: 5
},
name2: {
  color: '#000',
  fontSize: 15,
  fontWeight: 'normal',

  justifyContent: 'center',
  alignItems: 'center'
},
container: {
  flex: 1,
  flexDirection: 'column',
  flexWrap: 'wrap',
  padding: 5,

  backgroundColor: '#fff'
},
container1: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 5,

  backgroundColor: '#fff'
},

column1: {
  margin: 2,
  width: (Item_width / 3) - 9
},

image: {
  height: 168.42,
  width: null,
  borderRadius: 10
},
image1: {

  height: 186.22,
  width: null,
  borderRadius: 10
},
image2: {
  height: 197.63,
  width: null,
  borderRadius: 10
}
});
