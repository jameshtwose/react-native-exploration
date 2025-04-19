import { ThemedText } from "@/components/ThemedText";
import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Platform } from "react-native";
import markers from "@/assets/data/markers.json";

export default function Map() {
  const mapRef = useRef(null);
  const [MapView, setMapView] = useState<any>(null);
  const [Marker, setMarker] = useState<any>(null);

  useEffect(() => {
    if (Platform.OS !== "web") {
      const reactNativeMaps = require("react-native-maps");
      setMapView(() => reactNativeMaps.default);
      setMarker(() => reactNativeMaps.Marker);
    }
  }, []);

  if (!MapView || !Marker) {
    return (
      <View style={styles.container}>
        <ThemedText>Loading Map...</ThemedText>
      </View>
    );
  }

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      mapType="standard"
      showsUserLocation={true}
      showsMyLocationButton={true}
      showsCompass={true}
      showsIndoors={true}
      showsTraffic={true}
      showsBuildings={true}
      showsScale={true}
      showsPointsOfInterest={true}
      showsIndoorLevelPicker={true}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});