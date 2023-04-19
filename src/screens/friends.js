import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Dimensions} from 'react-native'
import axios from 'axios';
import AddUserButton from '../components/adduserbutton';
import UserCard from '../components/usercard';
const { height, width } = Dimensions.get('window')

const Friends = ({navigation}) => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUserData()
    },[])

    const getUserData = () => {
        axios({
            url:`https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice`,
            method:'GET',
        })
        .then((res) => {
            setUserList(res.data);
        })
        .catch((err) => {
            console.log("err",err);
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{color:'#000', fontSize:height*0.04}}>Friends</Text>
                <AddUserButton onPress={() => {navigation.navigate('NewFriend')}}/>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    data={userList}
                    renderItem={({item,key}) => {
                        return(
                            <UserCard 
                                name={item.First_Name__c + " " + item.Last_Name__c}
                                age={item.Age__c}
                                onPress={() => {navigation.navigate('Details',{ "item" : item })}}
                            />
                        )
                    }}/>
            </View>
        </View>
    )
}

export default Friends;

const styles = new StyleSheet.create({
    container : {
        display:'flex',
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff'
    },

    header : {
        width:'95%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:'2.5%',
        alignSelf:'center',
        height:height*0.065,
    },

    listContainer : {
        width:'95%',
        alignSelf:'center',
        height:height*0.85
    }
})