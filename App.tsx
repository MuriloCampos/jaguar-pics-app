import { StyleSheet } from "react-native";
import { Routes } from "./Routes";

export default function App() {
  console.log("aaaaaaa");
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
