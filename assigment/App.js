import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function App() {
  return (
    <SafeAreaView style={styles.safest}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.iconback}>
            <Ionicons name="arrow-back" size={32} color="white" />
          </View>
          <View style={styles.hutulbur}>
            <Text style={styles.hutulburst}>Хөтөлбөр</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safest: {
    flex: 1,
  },
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  header: {
    width: 500,
    height: 80,
    backgroundColor: "red",
  },
  iconback: {
    width: 80,
    height: 80,
    marginLeft: 20,
    marginTop: 40,
  },
  hutulburst: {
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
  },
  hutulbur: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 20,
    backgroundColor: "black",
    marginTop: 30,
  },
});
