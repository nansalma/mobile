import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
export default function nuur2() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.v0}>
          <View style={styles.detail1}>
            <Entypo
              name="chevron-left"
              size={19}
              color="white"
              style={{ marginTop: 8, marginLeft: 8 }}
            />
          </View>
          <View style={styles.detail2}>
            <Entypo
              name="share"
              size={17}
              color="white"
              style={{ marginTop: 9, marginLeft: 8 }}
            />
          </View>
          <View style={styles.hha}>
            <Image source={require("./assets/ad.png")} />
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

  v0: {
    backgroundColor: "beige",
    width: 500,
    height: 1000,
    flexDirection: "row",
    marginTop: 30,
  },

  detail1: {
    width: 35,
    height: 35,
    margin: 10,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  detail2: {
    width: 35,
    height: 35,
    margin: 10,
    marginLeft: 310,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  hha: {
    width: 400,
    height: 300,
    backgroundColor: "red",
  },
});
