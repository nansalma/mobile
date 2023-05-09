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
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "../../source/screen/header";

export default function nuur3({ navigation }) {
  return (
    <SafeAreaView style={styles.safest}>
      <ScrollView>
        <Header />

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
            source={require("../../source/images/nemelt1.png")}
          ></Image>

          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontWeight: "100",
                  fontSize: 13,

                  marginLeft: 20,
                }}
              >
                Believe in Magic&Win{"\n"}хөтөлбөрийн тухай
              </Text>
              <View
                style={{
                  backgroundColor: `#1e90ff`,
                  width: 55,
                  height: 15,
                  marginLeft: 290,
                  marginTop: -25,
                  borderRadius: 2,
                }}
              >
                <Ionicons
                  name="md-share-social-outline"
                  size={13}
                  color="white"
                  style={{ marginLeft: 5 }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    marginTop: -15,
                    fontWeight: "200",
                    marginLeft: 23,
                  }}
                >
                  Share
                </Text>
              </View>
            </View>
          </View>
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
            source={require("../../source/images/nemelt2.png")}
          ></Image>
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <View style={styles.niittailbar}>
              <Text style={{ fontWeight: "100", fontSize: 13, marginLeft: 20 }}>
                Believe in Magic&Win{"\n"}хөтөлбөрт оролцох заавар
              </Text>
              <View
                style={{
                  backgroundColor: `#1e90ff`,
                  width: 55,
                  height: 15,
                  marginLeft: 290,
                  marginTop: -25,
                  borderRadius: 2,
                }}
              >
                <Ionicons
                  name="md-share-social-outline"
                  size={13}
                  color="white"
                  style={{ marginLeft: 5 }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    marginTop: -15,
                    fontWeight: "200",
                    marginLeft: 23,
                  }}
                >
                  Share
                </Text>
              </View>
            </View>
          </View>
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
            source={require("../../source/images/nemelt3.png")}
          ></Image>
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <View style={styles.niittailbar}>
              <Text style={{ fontWeight: "100", fontSize: 13, marginLeft: 20 }}>
                Coca-Cola{"\n"}шинэ савалгаа
              </Text>
              <View
                style={{
                  backgroundColor: `#1e90ff`,
                  width: 55,
                  height: 15,
                  marginLeft: 290,
                  marginTop: -25,
                  borderRadius: 2,
                }}
              >
                <Ionicons
                  name="md-share-social-outline"
                  size={13}
                  color="white"
                  style={{ marginLeft: 5 }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    marginTop: -15,
                    fontWeight: "200",
                    marginLeft: 23,
                  }}
                >
                  Share
                </Text>
              </View>
            </View>
          </View>
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
            source={require("../../source/images/nemelt4.png")}
          ></Image>
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: "row",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <View style={styles.niittailbar}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 13,
                  fontWeight: "100",
                  marginTop: 10,
                }}
              >
                Real Magic
              </Text>
              <View
                style={{
                  backgroundColor: `#1e90ff`,
                  width: 55,
                  height: 15,
                  marginLeft: 290,
                  marginTop: -18,
                  borderRadius: 2,
                }}
              >
                <Ionicons
                  name="md-share-social-outline"
                  size={13}
                  color="white"
                  style={{ marginLeft: 5 }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    marginTop: -15,
                    fontWeight: "200",
                    marginLeft: 23,
                  }}
                >
                  Share
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 20 }}></View>
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

  // zuuntailbar: {
  //   fontSize: 13,
  //   fontWeight: "100",
  // },
});
