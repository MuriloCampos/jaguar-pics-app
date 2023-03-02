import React, { useState } from "react";
import { View, FlatList } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { HomeCard } from "../components/HomeCard";
import { useUserContext } from "../lib/UserContextProvider";
import { FAB } from "@rneui/themed";
import api from "../services/api";
import Picture from "../interfaces/Picture";

export function HomeScreen() {
  const [image, setImage] = useState(null);
  const [pics, setPics] = React.useState<Picture[]>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const { animalsList, setAnimalsList } = useUserContext();

  React.useEffect(() => {
    requestPermission();
  }, []);

  React.useEffect(() => {
    api.get<Picture[]>("/pics").then((response) => {
      setPics(response.data);
    });
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    let asset;

    if (result.assets[0].assetId) {
      asset = await MediaLibrary.getAssetInfoAsync(
        result.assets[0].assetId.toString()
      );
    }

    console.log(
      result,
      "assetId: ",
      asset,
      "Modification time:  -----",
      new Date(asset?.modificationTime),
      asset?.location?.latitude
    );
    setAnimalsList((current) => [
      ...current,
      {
        date:
          asset && asset.modificationTime
            ? new Date(asset.modificationTime)
            : new Date(),
        latitude: asset?.location?.latitude,
        longitude: asset?.location?.longitude,
        src: result.assets[0].uri,
      },
    ]);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  console.log(animalsList);

  return (
    <View
      style={{ flex: 1, backgroundColor: "white", padding: 16, marginTop: 16 }}
    >
      <FlatList
        data={pics}
        renderItem={(animal) => (
          <HomeCard
            key={animal.item.id}
            src={`https://app-jaguar-pics.s3.sa-east-1.amazonaws.com/${animal.item.image_id}`}
            date={new Date(animal.item.date_taken)}
          />
        )}
      />
      <FAB
        icon={{ name: "add", color: "white" }}
        style={{ position: "absolute", bottom: 30, right: 10 }}
        color="#4F772D"
        onPress={pickImage}
      />
    </View>
  );
}
