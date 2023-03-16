import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll11}>
        <View style={styles.v0}>
          <View style={styles.v1}>
            <Text>Товч ном</Text>
          </View>
          <View style={styles.v2}>
            <Text>Товч ном</Text>
          </View>
          <View style={styles.v3}>
            <Text>Товч ном</Text>
          </View>
          <View style={styles.v4}>
            <Text>Товч ном</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll11: { backgroundColor: "white" },
  v0: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  v1: {
    backgroundColor: "aqua",
    width: 150,
    height: 100,
  },
  v2: {
    backgroundColor: "red",
    width: 150,
    height: 100,
  },
  v3: {
    backgroundColor: "yellow",
    width: 150,
    height: 100,
  },
  v4: {
    backgroundColor: "purple",
    width: 150,
    height: 100,
  },
});
