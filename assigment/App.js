import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  onChangeNumber,
  Image,
} from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scview}>
        <View style={styles.view0}>
          <View style={styles.twoicon}>
            <View style={styles.i1}>
              <SimpleLineIcons name="basket" size={32} color="white" />
            </View>
            <View style={styles.i2}>
              <AntDesign name="gift" size={32} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.code}>
          <TextInput
            style={styles.input}
            placeholder="Код оруулах"
            onChangeText={onChangeNumber}
            keyboardType="default"
            maxLength={9}
          />
          <View style={styles.isend}>
            <Feather name="send" size={32} color="red" />
          </View>
        </View>

        <View style={styles.zuragniiview}>
          {/* <ScrollView horizontal={true}> */}
          <Image style={styles.zurag} source={require("./assets/zurag1.png")} />
          <Image style={styles.zurag} source={require("./assets/zurag1.png")} />
          {/* </ScrollView> */}
        </View>

        <View style={styles.hutulbur}>
          <Text>Хөтөлбөр</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scview: { backgroundColor: "white" },
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  view0: {
    width: 600,
    height: 130,
    backgroundColor: "red",
    flexDirection: "column",
  },
  twoicon: { flexDirection: "column", marginTop: 20, alignItems: "flex-start" },

  i1: {
    marginLeft: 300,
    marginTop: 30,
  },
  i2: {
    marginLeft: 350,
    marginTop: -27,
  },
  code: {
    backgroundColor: "red",

    height: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  input: {
    borderRadius: 10,
    backgroundColor: `#f8f8ff`,
    width: 300,
    height: 50,
    paddingLeft: 20,
    marginTop: 20,
  },
  isend: {
    backgroundColor: `#dcdcdc`,
    marginLeft: 250,
    marginBottom: 20,
    marginTop: -50,
    height: 50,
    borderRadius: 10,
    width: 50,
    padding: 9,
  },

  zurag: {
    resizeMode: "cover",
    flex: 1,
    width: "100%",
    height: 200,
    marginTop: 10,
    flexDirection: "column",
  },
  zuragniiview: {
    width: 400,

    flexDirection: "row",
    flexWrap: "wrap",
  },
  hutulbur: {
    fontSize: 15,
    marginLeft: 10,
    color: "gainsboro",
  },
});
