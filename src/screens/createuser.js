import React ,{useState, useEffect}from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, TextInput} from "react-native";
import axios from "axios";
import CommonHeader from "../components/commonheader";
const {height, width} = Dimensions.get('window')

const CreateUser = ({navigation}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);

    const onClear = () => {
        setFirstName("");
        setLastName("");
        setAge(null);
    }

    const CreateUser = () => {
        let body = [
            {
                "attributes" : {
                    "type" : "Friend__c"
                },
                "Name" : "FR-00999",
                "First_Name__c": firstName,
                "Last_Name__c": lastName,
                "Age__c": age
            }
        ]

        axios({
            url : `https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice`,
            method : 'POST',
            body : body
        }).then((res) => {
            console.log("resda", res.data)
        }).catch((err) => {
            console.log("err",err)
        })
    }
    return(
        <View style={{flex:1}}>
            <CommonHeader onPress={() => {navigation.pop()}} title={"New Friend"}/>
            <View style={styles.detailContainer}>
                <View style={{display:'flex', flexDirection:'column'}}>
                    <Text style={{color:'#000'}}>First Name: </Text>
                    <View style={{width:'100%',borderWidth:1,marginVertical:'1%', borderColor:'#c7c7c7', borderRadius:4, paddingHorizontal:4}}>
                        <TextInput 
                            placeholder="Enter First Name"
                            value={firstName}
                            onChangeText={(value) => {setFirstName(value)}}
                        />
                    </View>
                </View>
                <View style={{display:'flex', flexDirection:'column',marginVertical:'1%'}}>
                    <Text style={{color:'#000'}}>Last Name: </Text>
                    <View style={{width:'100%',borderWidth:1,marginVertical:'1%', borderColor:'#c7c7c7', borderRadius:4, paddingHorizontal:4}}>
                        <TextInput
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChangeText={(value) => {setLastName(value)}}
                        />
                    </View>
                </View>
                <View style={{display:'flex', flexDirection:'column',marginVertical:'1%'}}>
                    <Text style={{color:'#000'}}>Age: </Text>
                    <View style={{width:'100%',borderWidth:1,marginVertical:'1%', borderColor:'#c7c7c7', borderRadius:4, paddingHorizontal:4}}>
                        <TextInput
                            placeholder="Enter Age"
                            value={age}
                            keyboardType={'number-pad'}
                            onChangeText={(value) => {setAge(value)}}
                        />
                    </View>
                </View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', marginVertical:'2%'}}>
                    <TouchableOpacity onPress={() => {onClear()}} style={{borderWidth:1, borderColor:'#d92b3d',paddingVertical:8, paddingHorizontal:12,marginHorizontal:'2.5%', borderRadius:4}}>
                        <Text style={{color:'#d92b3d', fontSize:height*0.0175}}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#28458a',paddingVertical:8, paddingHorizontal:12, borderRadius:4}}>
                        <Text style={{color:'#fff', fontSize:height*0.0175}}>Add</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    )
}

export default CreateUser;

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
        width:'95%',
        alignSelf:'center', 
        borderColor:'#c7c7c7', 
        marginVertical:'2.5%', 
        borderRadius:8
    }
})