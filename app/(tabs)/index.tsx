import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonList from "../../components/ButtonList";

export default function TabTwoScreen() {
  const buttons = {
    "Stand Scouting": "https://google.com",
    "Pit Scouting": "https://bing.com",
    "Stand Admin": "https://duckduckgo.com",
    "Drive Team View": "https://classroom.google..com",
  };

  return (
    <View style={styles.container}>
      <ButtonList buttons={buttons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
