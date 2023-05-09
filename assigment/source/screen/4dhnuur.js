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
import Header from "../../source/screen/header";

export default function nuur4({ navigation }) {
  return (
    <SafeAreaView style={styles.safest}>
      <ScrollView>
        <Header />

        <View
          style={{
            width: 500,
            height: 120,
            // backgroundColor: "plum",
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
            <View style={{ justifyContent: "center", marginLeft: 20 }}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  marginTop: 20,
                }}
                source={require("../images/logo.png")}
              ></Image>
            </View>
            <Text
              style={{
                fontWeight: "100",
                width: 310,
                // backgroundColor: "grey",
                marginLeft: 80,
                marginTop: -50,
                textAlign: "center",
                fontSize: 10,
              }}
            >
              Sprite x M Music
            </Text>
            <Text
              style={{
                fontWeight: "100",
                // backgroundColor: "plum",
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
