import React from "react";
import { View, TouchableOpacity, Text, Dimensions,StyleSheet} from "react-native";
const { height, width } = Dimensions.get('window');

const UserCard = ({style}) => {
    return(
        <TouchableOpacity style={[styles.card,style]}>
            
        </TouchableOpacity>
    )
};

export default UserCard;

const styles = new StyleSheet.create({
    card : {

    }
})