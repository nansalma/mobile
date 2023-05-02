import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function App() {
  return (
    <SafeAreaView style={styles.safest}>
      <ScrollView>
        <View style={styles.header}>
          <Ionicons name="arrow-back" style={styles.iconback} />
          <Text style={styles.hutulburug}>Хөтөлбөр</Text>
        </View>

        <Image
          style={styles.zuragsprite}
          source={require("./source/images/sprite.png")}
        />
        <Text style={styles.tailbar}>
          "Sprite No Sugar" ундааны{"\n"} бөглөөн доторх 9 оронтой кодыг {"\n"}
          "MMusic" аппликэйшны промо{"\n"} код хэсэгт оруулан 7 хоногийн{"\n"}{" "}
          үйлчилгээний эрх аваарай.{"\n"}
          {"\n"} Урамшууллын хугацаанд нэг{"\n"} хэрэглэгч нийт 4 удаа код{" "}
          {"\n"}ашиглах боломжтой.{"\n"} {"\n"}Урамшуулал: 2023.03.15 - 06.15
          {"\n"} дуустал үргэлжилнэ.{"\n"}
          {"\n"} #HeatHappens #StayCool
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safest: {
    flex: 1,
  },
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  header: {
    width: 500,
    height: 80,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  iconback: {
    color: "white",
    fontSize: 30,
    marginLeft: 10,
  },
  hutulburug: {
    fontSize: 20,
    color: "white",
    fontStyle: "italic",
    marginLeft: 120,
  },
  zuragsprite: {
    width: "100%",
    flex: 1,
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
  },
  tailbar: {
    margin: 20,
    fontSize: 20,
  },
});
