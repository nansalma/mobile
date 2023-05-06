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

        <View style={styles.hutulburugview}>
          <Text style={styles.hutulburug}>Нэмэлт оноо</Text>
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

        <View
          style={{
            width: 360,
            height: 190,
            backgroundColor: "white",
            marginLeft: 27,
            marginTop: 20,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            elevation: 10,
          }}
        >
          <Image
            style={{
              width: 360,
              height: 150,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            source={require("./source/images/nemelt1.png")}
          ></Image>

          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.niittailbar}>
              <Text style={styles.baruundood}>
                Believe in Magic&Win {"\n"} хөтөлбөрийн тухай
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 360,
            height: 200,
            backgroundColor: "white",
            marginLeft: 27,
            marginTop: 20,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            elevation: 10,
          }}
        >
          <Image
            style={{
              width: 360,
              height: 150,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            source={require("./source/images/nemelt2.png")}
          ></Image>
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.niittailbar}>
              <Text style={styles.zuuntailbar}>
                Believe in Magic&Win {"\n"} хөтөлбөрт оролцох заавар
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 360,
            height: 200,
            backgroundColor: "white",
            marginLeft: 27,
            marginTop: 20,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            elevation: 10,
          }}
        >
          <Image
            style={{
              width: 360,
              height: 150,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            source={require("./source/images/nemelt3.png")}
          ></Image>
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.niittailbar}>
              <Text style={styles.zuuntailbar}>
                Coca-Cola {"\n"} шинэ савалгаа
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 360,
            height: 200,
            backgroundColor: "white",
            marginLeft: 27,
            marginTop: 20,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            elevation: 10,
          }}
        >
          <Image
            style={{
              width: 360,
              height: 150,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            source={require("./source/images/nemelt4.png")}
          ></Image>
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.niittailbar}>
              <Text style={styles.zuuntailbar}>Real Magic</Text>
            </View>
          </View>
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

  zuuntailbar: {
    fontSize: 13,
    fontWeight: "100",
  },
  baruuntailbar: {
    fontSize: 13,
    fontWeight: "100",
  },

  niittailbar: {},
  baruundood: {
    fontWeight: "100",
    fontSize: 13,
  },
});
