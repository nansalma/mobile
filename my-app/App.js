import { ScrollView } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll11}>
        <View style={styles.greet}>
          <View style={styles.mess}>
            <Text>good mornin</Text>
          </View>
        </View>
        <View style={styles.v0}>
          <View style={styles.v1}>
            <Text style={styles.t1}>Товч ном</Text>
          </View>
          <View style={styles.v2}>
            <Text style={styles.t2}>Товч ном</Text>
          </View>
          <View style={styles.v3}>
            <Text style={styles.t3}>Товч ном</Text>
          </View>
          <View style={styles.v4}>
            <Text style={styles.t4}>Товч ном</Text>
          </View>
        </View>

        <View style={styles.nomv0}>
          <Text style={styles.ehniiitext}>kiki jiji</Text>
          <Text style={styles.hoyrdhtext}>ontsloh</Text>
          <Image source={require("")}
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
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  mess: { fontSize: 20, color: "black", margin: 20 },
  greet: {
    margin: 20,
  },
  v0: {
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 270,
    borderRadius: 25,
    margin: 15,
    justifyContent: "center",
    alignContent: "center",
  },
  v1: {
    backgroundColor: "aqua",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 15,
  },
  v2: {
    backgroundColor: "red",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 15,
  },
  v3: {
    backgroundColor: "yellow",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 15,
  },
  v4: {
    backgroundColor: "purple",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 15,
  },
  t1: {
    marginLeft: 10,
    marginTop: 10,
    color: "white",
  },
  t2: {
    marginLeft: 10,
    marginTop: 10,
    color: "white",
  },
  t3: {
    marginLeft: 10,
    marginTop: 10,
    color: "white",
  },
  t4: {
    marginLeft: 10,
    marginTop: 10,
    color: "white",
  },

  nomv0: {
    backgroundColor: "black",
    height: 500,
    width: 380,
    borderRadius: 25,
    marginHorizontal: 15,
  },

  ehniiitext: {
    textTransform: "uppercase",
    fontSize: 20,
    marginLeft: 15,
    color: "white",
  },
  hoyrdhtext: {
    fontWeight: "bold",
    marginLeft: 15,
    color: "white",
    fontSize: 25,
  },
});
