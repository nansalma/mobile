import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AimagList from "./source/screens/AimagList";
// import AimagDetail from "./source/screens/AimagDetail";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <NuurStack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Nuur" component={AimagList} />
        {/* <Stack.Screen name="Nuur" component={DetailScreen2} />
        <Stack.Screen name="Nuur" component={DetailScreen} /> */}
      </NuurStack.Navigator>
    </NavigationContainer>
  );
}
