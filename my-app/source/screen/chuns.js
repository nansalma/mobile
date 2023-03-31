import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { AntDesign, Feather } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function chuns({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={["#7D1616", "black", "black"]}
          style={styles.background}
        >
          <View style={styles.vw1}>
            <Pressable onPress={() => navigation.goBack()}>
              <View style={styles.vwIcon1}>
                <AntDesign name="left" style={styles.icon}></AntDesign>
              </View>
            </Pressable>
            <View style={styles.vwIcon2}>
              <AntDesign name="sharealt" style={styles.icon}></AntDesign>
            </View>
          </View>
          <Image
            source={require("../../sourse/images/chuns.png")}
            style={styles.img1}
          ></Image>
        </LinearGradient>

        <View style={styles.vw2}>
          <Text style={styles.txt1}>Чөнс</Text>
        </View>

        <View style={styles.vw3}>
          <Image
            source={require("../../sourse/images/menIcon.png")}
            style={styles.img2}
          ></Image>
          <Text style={styles.txt2}>Б.Оргилболд</Text>
        </View>
        <View style={styles.vw4}>
          <Feather name="headphones" style={styles.vwIcon3}></Feather>
          <Text style={styles.txt3}>Сонсох</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    backgroundColor: "black",
  },
  background: {
    left: 0,
    right: 0,
    top: 0,
    height: 400,
    alignItems: "center",
  },
  vw1: {
    flexDirection: "row",
    marginTop: 15,
  },
  vwIcon1: {
    backgroundColor: "#4D4D4D",
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  icon: {
    color: "white",
    fontSize: 15,
  },
  vwIcon2: {
    backgroundColor: "#4D4D4D",
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginLeft: 245,
  },
  vw2: {
    justifyContent: "center",
    alignItems: "center",
  },
  img1: {
    width: 250,
    height: 250,
    marginTop: 40,
    borderRadius: 10,
  },
  txt1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  vw3: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  img2: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  txt2: {
    color: "#B3B3B3",
    fontWeight: 700,
    marginLeft: 10,
  },
  vw4: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginTop: 40,
    borderRadius: 10,
    height: 47,
    flexDirection: "row",
  },
  vwIcon3: {
    color: "white",
    fontSize: 15,
  },
  txt3: {
    color: "white",
    marginLeft: 7,
    fontWeight: "bold",
  },
});
