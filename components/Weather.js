import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Weather = ({ WeatherValue, degree }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{WeatherValue}{degree} 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    paddingHorizontal:10,
    marginTop: 20,
    position: "absolute",
    top: "30%",
    left: "60%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    textAlign:'center'
  },
});

export default Weather;
