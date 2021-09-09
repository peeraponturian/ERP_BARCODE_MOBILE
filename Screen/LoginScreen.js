import * as React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Modal, Button} from "react-native";

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <KeyboardAvoidingView>
                    <View style = {styles.heading}><Text style = {[styles.headingText, {fontWeight:"bold"}]}>ERP BARCODE</Text></View>
                    <View style = {styles.body}>
                        <TextInput placeholder = "Username" keyboardType = "Username" style = {[styles.inputBox, {marginTop:10}]} ></TextInput>
                        <TextInput placeholder = "Password" keyboardType = "Password" secureTextEntry = {true} style = {[styles.inputBox, {marginTop:1}]}></TextInput>
                        <Text>Remember me      Forget Password?</Text>
                        <TouchableOpacity style = {styles.button}>
                            <Text style = {{color:'#FFFFFF'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  heading:{
    alignSelf:"center",
    marginBottom:30,
    justifyContent:"center",
    alignItems:"center",
  },

  headingText:{
      fontStyle:"italic",
      color:"black",
      fontSize:30,
      marginBottom:40,
  },
  
  body:{
      width:300,
      height:300,
      alignContent:"center",
      alignItems:"center",
      backgroundColor:"#FFFFFF",
      borderRadius:10,
      shadowColor:"#000000",
      shadowOffset:{
          width:0,
          height:2,
      },
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation:0,
  },

  inputBox:{
    borderWidth:1,
    borderColor:"#777",
    padding:5,
    margin:5,
    width:250,
  },

  button:{
    backgroundColor:"#808080",
    height:35,
    width:80,
    marginTop:20,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
  },
});
