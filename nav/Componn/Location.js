import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Share } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';
import CustomMap from './CustomMap';

const MapScreen = () => {
  const router = useNavigation();

  const onBackPress = () => {
    router.goBack();
  };



  const [currentLocation, setCurrentLocation] = useState(null);
  const mapViewRef = useRef(null);

  const goToCurrentLocation = () => {
    if (currentLocation && mapViewRef.current) {
      mapViewRef.current.animateToRegion({
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentLocation({ ...position.coords });
        goToCurrentLocation();

      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    
  };

  const setMapRef = (r) => {
    mapViewRef.current = r?.current;
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const shareLocation = () => {
    if (currentLocation) {
      const url = `https://www.google.com/maps/search/?api=1&query=${currentLocation.latitude},${currentLocation.longitude}`;
      Share.share({
        message: `Here is my current location: ${url}`,
      });
    } else {
      console.log('Location not available');
    }
  };

  if (!currentLocation) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
        <Text>جارٍ تحميل الموقع ...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomMap
        getRef={setMapRef}
        didLoad={goToCurrentLocation}
      />
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onBackPress} style={styles.back}>
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={shareLocation} style={styles.back}>
            <FontAwesome name="map-marker" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={getCurrentLocation} style={styles.back}>
            <FontAwesome name="location-arrow" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    backgroundColor: '#2f3030',
    margin: 4,
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
