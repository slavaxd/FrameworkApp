import React from "react";
import { Dimensions, StyleSheet, Animated, View, Alert, ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { MapView } from 'expo';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default class App extends React.Component {
  state = {
    isMapReady: false,
    areCoordsReady: false,
    b: {
        latitude: 0,
        longitude: 0,
    }
  };

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {longitude, latitude} = position.coords;

        this.setState({ b:{longitude, latitude}, areCoordsReady: true});
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 }
    );
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {longitude, latitude} = position.coords;

        this.setState({ b:{longitude, latitude}, areCoordsReady: true});
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 30000 }
    );
  }
  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={{
            latitude: 49.23,
            longitude: 28.47,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
          }}
          onLayout={this.onMapLayout}
          style={{ flex: 1 }}
        >
        {this.state.areCoordsReady && this.state.isMapReady && <MapView.Marker coordinate={this.state.b}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.View style={[styles.ring]} />
                <View style={styles.marker} />
              </Animated.View>
            </MapView.Marker>
            }
        </MapView>
        {!this.state.areCoordsReady &&         
          <ActivityIndicator size="large" color="#0000ff" />} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
      width: width*0.5,
      height: width*0.5,
      borderRadius: 100,
      backgroundColor: "rgba(130,4,150, 0.1)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(130,4,150, 0.5)",
    },
  });




