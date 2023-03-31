import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.vw1}>
          <Text style={styles.txt}>Өдрийн мэнд</Text>
          <MaterialCommunityIcons name="ticket-percent" style={styles.icon} />
          <Octicons name="bell-fill" style={styles.icon1} />
          <Pressable onPress={() => navigation.navigate("profile")}>
            <Image
              source={require("./source/image/hho.png")}
              style={styles.pro}
            ></Image>
          </Pressable>
        </View>

        <View style={styles.vw2}>
          <View style={styles.ch1}>
            <View style={styles.choose1}>
              <Text style={styles.choosetxt}>Товч ном</Text>
              <Entypo name="triangle-down" style={styles.unguIcon1} />
            </View>
            <View style={styles.choose2}>
              <Text style={styles.choosetxt}>Цахим ном</Text>
              <MaterialCommunityIcons
                name="rectangle"
                style={styles.unguIcon2}
              />
            </View>
          </View>
          <View style={styles.ch2}>
            <View style={styles.choose3}>
              <Text style={styles.choosetxt}>Аудио ном</Text>
              <Entypo name="triangle-right" style={styles.unguIcon1} />
            </View>
            <View style={styles.choose4}>
              <Text style={styles.choosetxt}>Подкаст</Text>
              <AntDesign name="heart" style={styles.unguIcon3} />
            </View>
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate("chuns")}>
          <View style={styles.vw3}>
            <Text style={styles.txt1}>АЙДАС, АЙМШИГ</Text>
            <Text style={styles.txt2}>2 өөр төгсгөлтэй аймшгийн зохиол</Text>
            <Image
              source={require("./source/image/neg.png")}
              style={styles.vw3img}
            ></Image>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("sogoomaa")}>
          <View style={styles.vw3}>
            <Text style={styles.txt1}>АЙДАС, АЙМШИГ</Text>
            <Text style={styles.txt2}>Хүний санаанд багтаж, сэтгэлд...</Text>
            <Image
              source={require("./source/image/hho.png")}
              style={styles.vw3img}
            ></Image>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("emgen")}>
          <View style={styles.vw3}>
            <Text style={styles.txt1}>АЙДАС, АЙМШИГ</Text>
            <Text style={styles.txt2}>Хүний санаанд багтаж, сэтгэлд...</Text>
            <Image
              source={require("./source/image/ad.png")}
              style={styles.vw3img}
            ></Image>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginBottom: 60,
  },
  vw1: {
    height: 80,
    width: 350,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    color: "black",
    fontSize: 30,
    alignItems: "flex-start",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  icon: {
    color: "blue",
    fontSize: 28,
    marginLeft: 40,
  },
  icon1: {
    color: "blue",
    fontSize: 20,
    marginLeft: 8,
  },
  vw2: {
    width: 350,
    height: 225,
    backgroundColor: "grey",
    borderRadius: 30,
    margin: 15,
  },
  ch1: {
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 20,
  },
  ch2: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 20,
  },
  choose1: {
    width: 150,
    height: 90,
    backgroundColor: "#48d1cc",
    borderRadius: 20,
  },
  choose2: {
    width: 150,
    height: 90,
    backgroundColor: "#ff4500",
    marginLeft: 10,
    borderRadius: 20,
  },
  choose3: {
    width: 150,
    height: 90,
    backgroundColor: "#ffff00",
    borderRadius: 20,
  },
  choose4: {
    width: 150,
    height: 90,
    backgroundColor: "#663399",
    marginLeft: 10,
    borderRadius: 20,
  },
  choosetxt: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    marginLeft: 15,
  },
  unguIcon1: {
    fontSize: 45,
    marginLeft: 8,
  },
  unguIcon2: {
    fontSize: 30,
    marginTop: 8,
    marginLeft: 15,
  },
  unguIcon3: {
    fontSize: 24,
    marginTop: 10,
    marginLeft: 15,
  },
  vw3: {
    width: 330,
    height: 500,
    backgroundColor: "grey",
    borderRadius: 30,
    marginLeft: 24,
    overflow: "hidden",
    marginTop: 30,
  },
  txt1: {
    color: "white",
    marginLeft: 20,
    marginTop: 10,
  },
  txt2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10,
  },
  vw3img: {
    width: 330,
    height: 377,
    marginTop: 15,
  },
  pro: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 15,
  },
});
