import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import nuur from "./source/screen/nuur";
import nuur1 from "./source/screen/2dhnuur";
import nuur2 from "./source/screen/3dhnuur";
import nuur3 from "./source/screen/4dhnuur";
import header from "./source/screen/header";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={nuur} />
      <HomeStack.Screen name="list" component={nuur1} />
      <HomeStack.Screen name="add" component={nuur2} />
      <HomeStack.Screen name="message" component={nuur3} />
      <HomeStack.Screen name="header" component={header} />
    </HomeStack.Navigator>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Mplus") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Хайх") {
              iconName = focused ? "newspaper-outline" : "newspaper-outline";
            } else if (route.name === "Миний сан") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Message") {
              iconName = focused
                ? "chatbox-ellipses-outline"
                : "chatbox-ellipses-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 60,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "#4D4D4D",
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "#dcdcdc",
        })}
      >
        <Tab.Screen
          name="Mplus"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Хайх"
          component={nuur1}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Миний сан"
          component={nuur2}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Message"
          component={nuur3}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
