
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';


const Input = ({DefualtNumber,  PassInputStateProps, degree, onPress}) => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.inputBox}>
            <TextInput placeholder='type a value' maxLength={4} 
            defaultValue={DefualtNumber.toString()}
            onChangeText={(text)=>{
                PassInputStateProps(text)

            }}
            
            />
            <Text style={{color:'#000', fontSize:15,fontWeight:'bold'}}>{degree}</Text>
          
        </View>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={{color:'#fff', fontSize:16, fontWeight:'900'}}>Convert to {degree}</Text>

            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:50,
         backgroundColor:'#fff',
         borderRadius:10, 


    },
    inputBox:{
        width:200,
        padding:15,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
   

    },
    btn:{
   
        padding:15,
        backgroundColor:'#000',
        borderRadius:10,
        


    }

});


export default Input;
