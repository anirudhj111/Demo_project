import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Dimensions} from 'react-native'
import axios from 'axios';
import AddUserButton from '../components/adduserbutton';
import UserCard from '../components/usercard';
const { height, width } = Dimensions.get('window')

const Friends = () => {

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
            console.log(res.data.length);
        })
        .catch((err) => {
            console.log("err",err);
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{color:'#000', fontSize:height*0.04}}>Friends</Text>
                <AddUserButton/>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    data={userList}
                    renderItem={({item,key}) => {
                        return(
                            <UserCard 
                                name={item.First_Name__c + " " + item.Last_Name__c}
                                age={item.Age__c}/>
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
        flexDirection:'column'
    },

    header : {
        width:'95%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:'2.5%',
        alignSelf:'center',
        height:height*0.075,
    },

    listContainer : {
        width:'95%',
        alignSelf:'center',
        height:height*0.8
    }
})