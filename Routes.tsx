import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "./src/pages/Home";
import { ProfileScreen } from "./src/pages/Profile";
import { MapViewComponent } from "./src/pages/MapView";
import { UserContextProvider } from "./src/lib/UserContextProvider";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Profile") {
                iconName = "person";
              } else if (route.name === "MapView") {
                iconName = "map";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#4F772D",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="MapView" component={MapViewComponent} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}
