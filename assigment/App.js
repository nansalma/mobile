import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Image,
} from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Card } from "react-native-shadow-cards";
export default function App() {
  return (
    <SafeAreaView style={styles.safest}>
      <ScrollView>
        <View style={styles.header}>
          <SimpleLineIcons
            name="basket"
            size={32}
            color="white"
            style={{ marginLeft: 300, marginTop: 50 }}
          />
          <AntDesign
            name="gift"
            size={32}
            color="white"
            style={{ marginTop: 50, padding: 25 }}
          />
        </View>
        <View style={styles.hutulburugview}>
          <Text style={styles.hutulburug}>Хөтөлбөр</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: `#dcdcdc`,
            }}
          />
        </View>

        <View style={styles.spriteview}>
          <Image
            style={styles.imgsprite}
            source={require("./source/images/sprite.png")}
          ></Image>
          <View style={styles.tailbarview}>
            <Text style={styles.baruuntailbar}>Sprite x M Music</Text>
            <Text style={styles.zuuntailbar}>
              {" "}
              Хөтөлбөрийн хугацаа {"\n"}2023-03-15 - 2023-06-15
            </Text>
          </View>
        </View>

        <View style={styles.spriteview}>
          <Image
            style={styles.imgsprite}
            source={require("./source/images/punch.png")}
          ></Image>
          <View style={styles.tailbarview2}>
            <Text style={styles.twozuun}>
              Minute maid Punch{"\n"} Хад жимсний амт
            </Text>
            <Text style={styles.twobaruun}>
              {" "}
              Хөтөлбөрийн хугацаа {"\n"}2023-03-15 - 2023-07-01
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 360,
            height: 210,
            backgroundColor: "white",
            marginLeft: 30,
            marginTop: 10,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 10,
          }}
        >
          <Image
            style={{
              width: 360,
              height: 150,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            source={require("./source/images/punch.png")}
          ></Image>
          <View
            style={{
              width: "100%",
              height: 60,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
            }}
          ></View>
        </View>
        <View
          style={{ height: 220, backgroundColor: "white", marginTop: 20 }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  header: {
    height: 130,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  hutulburug: {
    color: "black",
    marginTop: 10,
    fontSize: 20,
  },
  hutulburugview: {
    alignItems: "center",
  },
  imgsprite: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    // flex: 1,
    height: 200,
    // resizeMode: "contain",
    margin: 10,
  },
  spriteview: {
    height: 250,
    width: 370,
    elevation: 5,
    marginLeft: 15,
  },
  tailbarview: {
    flexDirection: "row",
    backgroundColor: "plum",
    marginLeft: 10,
    width: 370,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    height: 50,
  },
  zuuntailbar: {
    paddingLeft: 60,
    fontSize: 13,
  },
  baruuntailbar: {
    fontSize: 13,
  },

  tailbarview2: {
    flexDirection: "row",
    backgroundColor: "plum",
    marginLeft: 20,
    width: 370,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    height: 50,
  },
  twozuun: {
    fontSize: 13,
  },
  twobaruun: {
    fontSize: 13,
    paddingLeft: 50,
  },
});
