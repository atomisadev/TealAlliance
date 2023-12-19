import React from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";

interface ButtonListProps {
  buttons: { [title: string]: string };
}

export default function ButtonList({ buttons = {} }: ButtonListProps) {
  const buttonEntries = Object.entries(buttons);
  const rows = Math.ceil(buttonEntries.length / 2);

  return (
    <View className="flex justify-center items-center m-5">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-around w-full">
          {buttonEntries
            .slice(rowIndex * 2, rowIndex * 2 + 2)
            .map(([title, href], index) => (
              <TouchableOpacity
                key={index}
                className="bg-white flex-grow h-24 m-1 justify-center items-center"
                onPress={() => Linking.openURL(href)}
              >
                <Text className="text-black text-lg font-bold text-center">
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </View>
  );
}
