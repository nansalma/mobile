import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function nuur2() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.v0}>
          <View style={styles.detail1}></View>
          <View style={styles.detail2}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  v0: { backgroundColor: "beige" },

  detail1: {
    width: 20,
    height: 20,
    backgroundColor: "gray",
  },
  detail2: {
    width: 20,
    height: 20,
    backgroundColor: "gray",
  },
});
