import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  onChangeNumber,
  Image,
} from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scview}>
        <View style={styles.view0}>
          <View style={styles.twoicon}>
            <View style={styles.i1}>
              <SimpleLineIcons name="basket" size={32} color="white" />
            </View>
            <View style={styles.i2}>
              <AntDesign name="gift" size={32} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.code}>
          <TextInput
            style={styles.input}
            placeholder="Код оруулах"
            onChangeText={onChangeNumber}
            keyboardType="default"
            maxLength={9}
          />
          <View style={styles.isend}>
            <Feather name="send" size={32} color="red" />
          </View>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.zuragniiview}>
            <Image
              style={styles.zurag}
              source={require("./source/images/zurag1.png")}
            />
            <Image
              style={styles.zurag}
              source={require("./source/images/zurag1.png")}
            />
          </View>
        </ScrollView>
        <View style={styles.hutulbur}>
          <Text style={styles.ug}>Хөтөлбөр</Text>
        </View>

        <View style={styles.hutulburzurag}>
          <View style={styles.spriteview}>
            <Image
              style={styles.sprite}
              source={require("./source/images/sprite.png")}
            />
            <View style={styles.doortailbar}>
              <Text style={styles.dtailbarst}> Sprite x M Music</Text>
              <Text style={styles.baruuntailabr}>
                Хөтөлбөрийн хугацаа {"\n"}2023-03-15 - 2023-06-15
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.beleg}>
          <Text style={styles.belegnuudug}>Бэлэгнүүд</Text>
        </View>

        <View style={styles.belegniizurag}>
          <View style={styles.belegzurag}>
            <Image source={require("./source/images/beleg.png")} />
          </View>
        </View>
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
  scview: { backgroundColor: "white" },

  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  view0: {
    width: 600,
    height: 130,
    backgroundColor: "red",
    flexDirection: "column",
  },
  twoicon: { flexDirection: "column", marginTop: 20, alignItems: "flex-start" },

  i1: {
    marginLeft: 300,
    marginTop: 30,
  },
  i2: {
    marginLeft: 350,
    marginTop: -27,
  },
  code: {
    backgroundColor: "red",

    height: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  input: {
    borderRadius: 10,
    backgroundColor: `#f8f8ff`,
    width: 300,
    height: 50,
    paddingLeft: 20,
    marginTop: 20,
  },
  isend: {
    backgroundColor: `#dcdcdc`,
    marginLeft: 250,
    marginBottom: 20,
    marginTop: -50,
    height: 50,
    borderRadius: 10,
    width: 50,
    padding: 9,
  },

  zurag: {
    resizeMode: "contain",
    flex: 1,
    width: "100%",
    height: 300,
    marginTop: 10,
    flexDirection: "column",
  },
  zuragniiview: {
    width: 900,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    resizeMode: "cover",
  },
  hutulbur: {
    fontSize: 15,
    marginLeft: 10,
  },
  ug: {
    color: `#d3d3d3`,
    marginLeft: 13,
  },
  sprite: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    flex: 1,
    height: 200,
    resizeMode: "contain",
  },
  hutulburzurag: {
    width: 370,
    height: 200,
    backgroundColor: "black",
    borderWidth: 3,
    margin: 20,
    marginTop: -2,
    marginRight: 20,
    shadowColor: "black",
    shadowOpacity: 20,
    borderRadius: 10,
    shadowOffset: { width: 15, height: 15 },
  },
  dtailbarst: {
    color: `#d3d3d3`,
    marginLeft: -15,
  },
  doortailbar: {
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spriteview: {
    width: 365,
    height: 200,
    borderRadius: 10,
  },
  baruuntailabr: {
    color: `#d3d3d3`,
    textAlign: "right",
  },
  belegnuudug: {
    color: `#d3d3d3`,
    marginLeft: 20,
  },

  belegniizurag: {
    width: 90,
    height: 100,
    backgroundColor: "red",
    marginLeft: 20,
    borderRadius: 10,
  },
  belegzurag: {
    width: 90,
    height: 90,
  },
});
