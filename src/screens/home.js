import React, { useState, useEffect } from 'react'
import { Text, View, Dimensions, TouchableOpacity, StyleSheet, Image} from 'react-native'
const { height, width} = Dimensions.get('window')

const Home = () => {

    const [image, setImage] = useState(null)

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fff'}}>
            <View style={styles.imageContainer}>
            {
                image ? 
                    <View>
                            
                    </View>
                :
                    <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Image style={{height: height*0.04, width: height*0.04, tintColor:'#ababab'}}  source={require('../../assets/box.png')}/>
                        <Text style={{marginVertical:'2%'}}>No Image selected</Text>
                    </View>
            }
            </View>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',width:'80%',marginVertical:'2.5%'}}>
                <TouchableOpacity onPress={() => {}} style={{width:width*0.35, height:height*0.05, justifyContent:'center',alignItems:'center', backgroundColor:'#6134eb'}}>
                    <Text style={{color:'#fff'}}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={{width:width*0.35, height:height*0.05, justifyContent:'center',alignItems:'center', backgroundColor:'#6134eb'}}>
                    <Text style={{color:'#fff'}}>Camera + Gallery</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;

const styles = new StyleSheet.create({
    imageContainer : {
        width:'80%', 
        height : height*0.5, 
        borderWidth:1, 
        borderStyle:'dashed', 
        alignSelf:'center', 
        borderColor:'#c7c7c7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    }
})
