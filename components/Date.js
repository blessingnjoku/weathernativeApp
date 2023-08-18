import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Date = ({ date }) => {




  return (
    <View style={styles.dateBox}>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateBox: {
    marginTop: 50,
    alignSelf: "stretch",
  },
});

export default Date;
