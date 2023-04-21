import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

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
            <AntDesign
              name="caretdown"
              size={32}
              color="white"
              style={{ marginLeft: 8 }}
            />
          </View>
          <View style={styles.v2}>
            <Text style={styles.t2}>Цахим ном</Text>
            <Entypo
              name="controller-stop"
              size={32}
              color="white"
              style={{ marginLeft: 8 }}
            />
          </View>
          <View style={styles.v3}>
            <Text style={styles.t3}>Аудио ном</Text>
            <AntDesign
              name="caretright"
              size={32}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </View>
          <View style={styles.v4}>
            <Text style={styles.t4}>Подкаст</Text>
            <FontAwesome
              name="circle"
              size={32}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>

        <View style={styles.nomv0}>
          <Text style={styles.ehniiitext}> Кики болон Жижитэй хамт</Text>
          <Text style={styles.hoyrdhtext}>Энэ долоо хоногийн онцлох</Text>
          <Image source={require("./assets/neg.png")} style={styles.img} />
        </View>
        <View style={styles.nomv1}>
          <Text style={styles.ehniiitext}> Кики болон Жижитэй хамт</Text>
          <Text style={styles.hoyrdhtext}>Энэ долоо хоногийн онцлох</Text>
          <Image source={require("./assets/ad.png")} style={styles.img} />
        </View>
        <View style={styles.nomv2}>
          <Text style={styles.ehniiitext}> Кики болон Жижитэй хамт</Text>
          <Text style={styles.hoyrdhtext}>Энэ долоо хоногийн онцлох</Text>
          <Image source={require("./assets/hho.png")} style={styles.img} />
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
    backgroundColor: "grey",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 270,
    borderRadius: 25,
    margin: 15,
    justifyContent: "center",
    alignContent: "center",
  },
  v1: {
    backgroundColor: "plum",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 15,
  },
  v2: {
    backgroundColor: "violet",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 15,
  },
  v3: {
    backgroundColor: `#ba55d3`,
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 15,
  },
  v4: {
    backgroundColor: "#ffb6c1",
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
    backgroundColor: "grey",
    height: 500,
    width: 380,
    borderRadius: 25,
    marginHorizontal: 15,
    overflow: "hidden",
  },
  nomv1: {
    backgroundColor: "grey",
    height: 500,
    width: 380,
    borderRadius: 25,
    marginHorizontal: 15,
    overflow: "hidden",
    marginTop: 15,
  },
  nomv2: {
    backgroundColor: "grey",
    height: 500,
    width: 380,
    borderRadius: 25,
    marginHorizontal: 15,
    overflow: "hidden",
    marginTop: 15,
  },
  ehniiitext: {
    textTransform: "uppercase",
    fontSize: 15,
    marginLeft: 15,
    color: "white",
    marginTop: 15,
  },
  hoyrdhtext: {
    fontWeight: "bold",
    marginLeft: 15,
    color: "white",
    fontSize: 25,
  },
  img: {
    resizeMode: "stretch",
    flex: 1,
    width: "100%",
  },
});
