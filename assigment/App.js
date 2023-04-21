import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scview}>
        <View style={styles.view0}>
          <View style={styles.i1}>
            <SimpleLineIcons name="basket" size={32} color="white" />
          </View>
          <View style={styles.i2}>
            <AntDesign name="gift" size={32} color="white" />
          </View>
        </View>
        <View style={styles.view1}></View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scview: {},
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  view0: {
    width: 500,
    height: 80,
    backgroundColor: "red",

    shadowColor: "#000000",
  },
  i1: {
    marginLeft: 300,
    marginTop: 30,
    width: 40,
    height: 30,
  },
  i2: {
    marginLeft: 350,
    marginTop: -27,
    width: 30,
    height: 30,
  },
});
