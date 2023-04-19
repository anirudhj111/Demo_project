import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";

const UserDetails = ({item}) => {
    return(
        <View style={styles.container}>
            <View style={{display:'flex', flexDirection:'row'}}>
                <Text>First Name</Text>
            </View>
        </View>
    )
}

export default UserDetails;

const styles = new StyleSheet.create({
    container : {
        flex : 1,
        flexDirection:'column'
    }
})