import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Dimensions,ActivityIndicator} from 'react-native'
import AddUserButton from '../components/adduserbutton';
import UserCard from '../components/usercard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/core';
import axios from 'axios';
const { height, width } = Dimensions.get('window')

const Friends = ({navigation}) => {
    let isFocused = useIsFocused()
    const [userList, setUserList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getUserData();
        // AddNewFriends();
    },[isFocused])

    const getUserData = async() => {
        try{
            const value = await AsyncStorage.getItem('@userlist')
            const newUsers = await AsyncStorage.getItem('@newusers')
             if(value !== null) {
                let obj = JSON.parse(value);
                if(newUsers){
                    let newUserObj = JSON.parse(newUsers);
                    let newUserList = [...newUserObj, ...obj];
                    setUserList(newUserList);
                }
                else{
                    setUserList(obj);
                }
             }
             else{
                getUserData()
             }
        }
        catch (e){
            console.log("err",e)
        }
    }
    
    const AddNewFriends = async() => {
        try{
            const newUsers = await AsyncStorage.getItem('@newusers');
            let obj = [];
            obj = JSON.parse(newUsers);

            axios({
                url:`https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice`,
                method:'POST',
                data:obj
            }).then(async(res) => {
                console.log("new users updated");
                await AsyncStorage.setItem('@newusers',null);
                console.log("cleared local");
            }).catch((err) => {
                console.log("update users error",err)
            })
        }
        catch(e){
            console.log("err",e);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{color:'#000', fontSize:height*0.04}}>Friends</Text>
                <AddUserButton onPress={() => {navigation.navigate('NewFriend')}}/>
            </View>
            {  
                isLoaded ?
                <View style={styles.listContainer}>
                    <FlatList 
                        data={userList}
                        ListFooterComponent={() => {
                            <View style={{marginBottom:'25%'}}/>
                        }}
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
                :
                <View style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size={'large'} color={'#2643ad'} />
                </View>
            }
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
        height:height*0.83
    }
})