import { ThemedText } from "@/components/ThemedText";
import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import markers from "@/assets/data/markers.json";

export default function App() {
  const mapRef = useRef<MapView>(null);

  return (
    <View style={styles.container}>
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
    </View>
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