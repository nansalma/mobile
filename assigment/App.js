import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import nuur from "../assigment/source/screen/nuur";
import nuur2 from "../assigment/source/screen/2dhnuur";
import nuur3 from "../assigment/source/screen/3dhnuur";
import nuur4 from "../assigment/source/screen/4dhnuur";

//Screen names
const homeName = "Home";
const secondName = "Details";
const thirdName = "Settings";
const fourName = "lastone";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === secondName) {
              iconName = focused ? "newspaper-outline" : "newspaper-outline";
            } else if (rn === thirdName) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === fourName) {
              iconName = focused
                ? "chatbox-ellipses-outline"
                : "chatbox-ellipses-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name={homeName}
          component={nuur}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={secondName}
          component={nuur2}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={thirdName}
          component={nuur3}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={fourName}
          component={nuur4}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
