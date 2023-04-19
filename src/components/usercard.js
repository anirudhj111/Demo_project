import React from "react";
import { View, TouchableOpacity, Text, Dimensions,StyleSheet} from "react-native";
const { height, width } = Dimensions.get('window');

const UserCard = ({style, name, age, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.card,style]}>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </TouchableOpacity> 
    )
};

export default UserCard;

const styles = new StyleSheet.create({
    card : {
        width:'100%',
        height:height*0.05,
        padding:8,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#c7c7c7',
        marginVertical:'1%',
        borderRadius:4
    }
})