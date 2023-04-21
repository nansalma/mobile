import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

const LotsOfStyles = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.sv}>
        <View style={styles.view0}></View>
        <View style={styles.view1}>
          <Text>memes</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
  },
  sv: { backgroundColor: "white" },
  view1: {
    width: 200,
    height: 50,
  },
  view0: {
    width: 200,
    height: 50,
    backgroundColor: "plum",
  },
});

export default LotsOfStyles;
