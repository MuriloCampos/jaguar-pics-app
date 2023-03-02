import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";
import { useUserContext } from "../lib/UserContextProvider";

export function MapViewComponent() {
  const [location, setLocation] = React.useState<Location.LocationObject>(null);
  const { animalsList } = useUserContext();

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!location) {
    return <Text>Getting location...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {animalsList.map((animal) => (
          <Marker
            key={animal.src}
            coordinate={{
              latitude: animal.latitude,
              longitude: animal.longitude,
            }}
            pinColor="#31572C"
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
