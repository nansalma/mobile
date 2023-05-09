import { View, StyleSheet } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function header() {
  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 130,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
