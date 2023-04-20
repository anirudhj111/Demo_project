import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image,Dimensions} from "react-native";
import CommonHeader from "../components/commonheader";
const { height, width } = Dimensions.get('window');

const UserDetails = ({route, navigation}) => {
    const {item} = route.params
    return(
        <View style={styles.container}>
            <CommonHeader onPress={() => {navigation.navigate('Friends')}} title={"Friend Details"} />
            <View style={styles.detailContainer}>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Image style={{height:height*0.05, width:height*0.05}} source={require('../../assets/user.png')} />
                </View>
                <View style={{marginHorizontal:'5%'}}>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={styles.textStyle}>First Name: </Text>
                        <Text style={styles.textStyle}>{item.First_Name__c}</Text>
                    </View>
                    <View style={{display:'flex', flexDirection:'row',marginVertical:'1%'}}>
                        <Text style={styles.textStyle}>Last Name: </Text>
                        <Text style={styles.textStyle}>{item.Last_Name__c}</Text>
                    </View>
                    <View style={{display:'flex', flexDirection:'row',marginVertical:'1%'}}>
                        <Text style={styles.textStyle}>Age: </Text>
                        <Text style={styles.textStyle}>{item.Age__c}</Text>
                    </View>
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
        flexDirection:'row', 
        borderWidth:1, 
        padding:16,
        width:'90%',
        alignSelf:'center', 
        borderColor:'#c7c7c7', 
        marginVertical:'2.5%', 
        borderRadius:8,
    },

    textStyle : {
        color:'#000',
        fontSize:height*0.02
    }
})