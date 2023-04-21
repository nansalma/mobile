import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

export default function nuur2() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.v0}>
          <View style={styles.detail1}>
            <Entypo name="chevron-left" size={32} color="white" />
          </View>
          <View style={styles.detail2}>
            <Entypo name="share" size={32} color="white" />
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
    backgroundColor: "black",
    flexDirection: "row",
    width: 500,
    height: 300,
    marginTop: 20,
  },

  detail1: {
    width: 20,
    height: 20,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  detail2: {
    width: 20,
    height: 20,
    backgroundColor: "gray",
    borderRadius: 5,
  },
});
