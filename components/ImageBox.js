
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { colors } from '../constant/colors';


const ImageBox = ({images}) => {
    return (
        <View >
            {/* <Image  style={{width:250, height:250}}/> */}
            <ImageBackground source={images} style={{width:250, height:250}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

});


export default ImageBox;
