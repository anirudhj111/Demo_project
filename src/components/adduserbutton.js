import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet} from "react-native";
const { height, width } = Dimensions.get('window')

const AddUserButton = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button} >
            <Image style={{height: height*0.02, width: height*0.02,tintColor:'#fff'}} source={require('../../assets/add.png')} />
            <Text style={{fontSize : height*0.0175, color:'#fff'}}>Add Friend</Text>
        </TouchableOpacity>
    )
}

export default AddUserButton;

const styles = new StyleSheet.create({
    button : {
        display:'flex',
        flexDirection:'row',
        height: height*0.05,
        width: width*0.3,
        backgroundColor:'#ababab',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:height*0.01,
        backgroundColor:'#2f4894'
    }
})