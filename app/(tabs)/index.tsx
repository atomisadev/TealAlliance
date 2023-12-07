import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <View className="flex justify-center h-screen items-center bg-white">
      <Text className="text-2xl text-red-500 font-bold">Bigger</Text>
      <View
        // style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Some"
        onPress={() => console.log("Hello world")}
        color="#841584"
      />

      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
