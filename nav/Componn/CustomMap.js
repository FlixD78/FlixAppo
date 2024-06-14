import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Share from 'react-native-share';

const CustomMap = (props) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [speed, setSpeed] = useState(0);
  const mapViewRef = useRef(null);


  const speedValue = speed > 0 ? speed?.toFixed(2) : 0

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude, speed } = position.coords;
        setCurrentLocation({ latitude, longitude });
        setSpeed(speed);
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const shareLocationStr = () => {
    return `https://www.google.com/maps/search/?api=1&query=${currentLocation?.latitude},${currentLocation?.longitude}`;
  };

  const onSharePress = () => {
    Share.open({
      message: shareLocationStr(),
    }).catch(err => console.log(err));
  };

  useEffect(() => {
    getCurrentLocation();
    props.getRef(mapViewRef);
    props.didLoad?.();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
        showsUserLocation={true}
        onPanDrag={e => console.log(e.nativeEvent)}
        followsUserLocation={true}
        showsMyLocationButton={true}
        showsScale={true}
        showsTraffic={true}
        userLocationCalloutEnabled={true}
        ref={mapViewRef}
      >
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="موقعي الحالي"
          >
          </Marker>
        )}
      </MapView>
      {/* <View style={styles.bottomBar}>
    
        <View style={styles.speedContainer}>
          <Text style={styles.speedText}>{speedValue} km/h</Text>
        </View>
      </View> */}
    </View>
  );
};

export default CustomMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#007aff',
  },
  speedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height:100,
    width:100,
    borderRadius:100,
    backgroundColor:'black'
  },
  speedText: {
    fontSize: 18,
    color: '#007aff',
    marginLeft: 10,
    
    
  },
});