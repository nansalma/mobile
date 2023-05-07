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
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                marginLeft: 20,
              }}
              source={require("./source/images/logo.png")}
            ></Image>

            <Text
              style={{
                fontWeight: "100",
                width: 310,
                backgroundColor: "grey",
                marginLeft: 80,
                marginTop: -30,
                textAlign: "center",
                fontSize: 10,
              }}
            >
              Sprite x M Music
            </Text>
            <Text
              style={{
                fontWeight: "100",
                backgroundColor: "plum",
                height: 70,
                width: 300,
                fontSize: 10,
                marginLeft: 80,
                textAlign: "center",
              }}
            >
              "Sprite No Sugar ундааны бөглөөн доторх кодыг{"\n"}"MMusic"
              аппликейшны промо код хэсэгт оруулан 7{"\n"}хоногийн үйлчилгээний
              эрх аваарай.
            </Text>
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
