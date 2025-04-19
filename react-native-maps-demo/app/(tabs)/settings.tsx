import React from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

export default function Settings() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState("#fff");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setBackgroundColor(getRandomColor());
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Random Background</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  settingText: {
    fontSize: 18,
  },
});