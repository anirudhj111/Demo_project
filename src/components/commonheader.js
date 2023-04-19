import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native'
const {height,width} = Dimensions.get('window')

const CommonHeader = ({title, onPress}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={{paddingHorizontal:8}}>
                <Image style={{height:height*0.03, width:height*0.03}} source={require('../../assets/left-arrow.png')}/>
            </TouchableOpacity>
            <Text style={{marginHorizontal:'2.5%', fontSize: height*0.025, color:'#000'}}>{title}</Text>
        </View> 
    )
}

const styles = new StyleSheet.create({
    container : {
        height : height*0.06,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:'1%',
    }
})

export default CommonHeader