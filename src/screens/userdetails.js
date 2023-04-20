import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import CommonHeader from "../components/commonheader";

const UserDetails = ({route, navigation}) => {
    console.log(route.params)
    const {item} = route.params
    return(
        <View style={styles.container}>
            <CommonHeader onPress={() => {navigation.navigate('Friends')}} title={"Friend Details"} />
            <View style={styles.detailContainer}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Text>First Name: </Text>
                    <Text>{item.First_Name__c}</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row',marginVertical:'1%'}}>
                    <Text>Last Name: </Text>
                    <Text>{item.Last_Name__c}</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row',marginVertical:'1%'}}>
                    <Text>Age: </Text>
                    <Text>{item.Age__c}</Text>
                </View>
            </View>
            
        </View>
    )
}

export default UserDetails;

const styles = new StyleSheet.create({
    container : {
        flex : 1,
        flexDirection:'column'
    },

    detailContainer : {
        display:'flex', 
        flexDirection:'column', 
        borderWidth:1, 
        padding:16,
        width:'90%',
        alignSelf:'center', 
        borderColor:'#c7c7c7', 
        marginVertical:'2.5%', 
        borderRadius:8
    }
})