import React from "react";
import { View, TouchableOpacity, Text, Dimensions,StyleSheet,Image} from "react-native";
const { height, width } = Dimensions.get('window');

const UserCard = ({style, name, age, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.card,style]}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image style={{height:height*0.05, width:height*0.05}} source={require('../../assets/user.png')} />
                <Text style={{marginHorizontal:'10%',fontSize:height*0.02,color:'#000'}}>{name}</Text>
            </View>
            <View style={styles.ageStyle}>
                <Text style={{color:'#fff'}}>Age</Text>
                <Text style={{color:'#fff'}}>{age}</Text>
            </View>
            
        </TouchableOpacity> 
    )
};

export default UserCard;

const styles = new StyleSheet.create({
    card : {
        width:'100%',
        padding:8,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#c7c7c7',
        marginVertical:'1%',
        borderRadius:4,
        paddingVertical:8
    },

    ageStyle : {
        width:width*0.1, 
        height:height*0.05,
         display:'flex', 
         flexDirection:'column', 
         backgroundColor:'#2f4894',
         justifyContent:'center',
         alignItems:'center',
         borderRadius:4
    }
})