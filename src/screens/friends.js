import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import axios from 'axios'

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
        })
        .catch((err) => {
            console.log("err",err);
        })
    }

    return(
        <View style={styles.container}>
            <Text>Friends</Text>
        </View>
    )
}

export default Friends;

const styles = new StyleSheet.create({
    container : {
        display:'flex',
        flex:1,
        flexDirection:'column'
    }
})