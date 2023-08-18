import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import sun1 from "./assets/sun1.png";
import cloud from "./assets/cloud.png";
import { colors } from "./constant/colors";
import Date from "./components/Date";
import Weather from "./components/Weather";
import Input from "./components/Input";
import ImageBox from "./components/ImageBox";
import { TemperatureUnit, convertTemp, UnitIcon, WhatTemp } from "./constant/Temperature";

export default function App() {
  // const [currentDate, setCurrentDate] = useState();

  // const getDate = () => {
  //   const today = new Date();
  //   const month = today.getMonth() + 1;
  //   const year = today.getFullYear();
  //   const alldate = today.getDate();
  //   return final= `${month}/${alldate}/${year}`;
  
  // };


  const [inputValue, setInputValue] = useState(0)
  const [currentdegree, setCurrentDegree]= useState('°C')
  const GetUnitIcon= UnitIcon(currentdegree)
  const [changeImage, setChangeImage]= useState()
  const [bgcolor, setBgColor]= useState(colors.rainy)

  useEffect(() => {
    const allTemp = WhatTemp(inputValue, currentdegree)
   
      setChangeImage(allTemp? cloud : sun1 )
      setBgColor(allTemp? colors.rainy : colors.sunny )
 
  }, [inputValue, currentdegree ])


  

  function GetTemp(){
    if(isNaN(inputValue)){
      return "";

    }else{
      return convertTemp(inputValue, GetUnitIcon).toFixed(1)

    }

  }


  return (
    <LinearGradient  colors={bgcolor} style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Date date={"17, Thursday, 2023"} />
          <Weather WeatherValue={GetTemp()} degree={GetUnitIcon}  />
          <ImageBox images={changeImage}  />

          <Input PassInputStateProps={setInputValue} DefualtNumber={0} degree={currentdegree} onPress={()=>{setCurrentDegree(GetUnitIcon)}} />
        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
