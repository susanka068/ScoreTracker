import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Container, Header, Content, List, ListItem } from "native-base";

export default function DetailsScreen() {
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem>
            <Text>me</Text>
          </ListItem>
          <ListItem>
            <Text>main</Text>
          </ListItem>
          <ListItem>
            <Text>my</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
