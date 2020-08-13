import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="click"
        onPress={() => {
          navigation.navigate("Details");
        }}
      ></Button>
      <Button
        title="score"
        onPress={() => {
          navigation.navigate("Scoretracker");
        }}
      ></Button>
    </View>
  );
}
