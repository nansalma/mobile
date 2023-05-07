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

        <View
          style={{
            width: 500,
            height: 120,
            backgroundColor: "plum",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 370,
              height: 90,
              elevation: 10,
              borderRadius: 15,
              backgroundColor: "white",
              marginLeft: 20,
            }}
          >
            <Image
              style={{
                width: 60,
                height: 60,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("./source/images/logo.png")}
            ></Image>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  header: {
    height: 130,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
