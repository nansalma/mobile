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
          <SimpleLineIcons
            name="basket"
            size={30}
            color="white"
            style={{ marginTop: 50 }}
          />
          <AntDesign
            name="gift"
            size={30}
            color="white"
            style={{ marginTop: 70 }}
          />
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

        <View
          style={{
            width: 370,
            height: 190,
            backgroundColor: "white",
            marginLeft: 23,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            elevation: 10,
          }}
        >
          <Image
            style={{
              width: 370,
              height: 150,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            source={require("./source/images/sprite.png")}
          ></Image>
          <View style={styles.niittailbar}>
            <Text style={styles.zuuntailbar}>Sprite x M Music</Text>
            <Text style={styles.baruuntailbar}>
              Хөтөлбөрийн хугацаа {"\n"}2023-03-15 - 2023-06-15
            </Text>
          </View>
        </View>

        <View style={styles.beleg}>
          <Text style={styles.belegnuudug}>Бэлэгнүүд</Text>
        </View>
        <View style={styles.belegview}>
          <Image
            style={styles.belegzurag}
            source={require("./source/images/beleg.png")}
          />
          <View style={styles.chimeglelview}>
            <Text style={styles.shinejilug}>Шинэ жилийн{"\n"} чимэглэл</Text>
          </View>
          <View style={styles.iconsags}>
            <SimpleLineIcons name="basket" size={20} color="black" />
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
  scview: { backgroundColor: "white", flex: 1 },

  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  view0: {
    width: 600,
    height: 100,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
  },

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

    height: 100,
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
    flex: 1,
    // width: "100%",
    height: 270,
    // marginTop: 10,
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
    marginTop: 10,
  },
  ug: {
    color: "black",
    marginLeft: 13,
    fontWeight: "100",
  },
  sprite: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    flex: 1,
    height: 200,
    resizeMode: "contain",
  },

  // dtailbarst: {
  //   color: `#d3d3d3`,
  //   marginLeft: -15,
  // },
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

  belegnuudug: {
    color: "black",
    marginLeft: 20,
    fontWeight: "100",
  },

  belegview: {
    width: 120,
    height: 140,
    backgroundColor: "white",
    marginLeft: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 10,
  },
  belegzurag: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginTop: 10,
  },
  shinejilug: {
    fontSize: 10,
    color: "black",
    fontWeight: "100",
  },
  chimeglelview: { marginLeft: -35 },

  iconsags: {
    marginLeft: 90,
    marginTop: -20,
  },
  niittailbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  baruuntailbar: {
    color: "black",
    paddingLeft: 90,
    textAlign: "right",
    fontSize: 13,
    fontWeight: "100",
  },
  zuuntailbar: {
    color: "black",
    marginLeft: 10,
    fontSize: 13,
    fontWeight: "100",
  },
});
