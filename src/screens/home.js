import React, { useState, useEffect, useCallback} from 'react'
import { Text, View, Dimensions, TouchableOpacity, StyleSheet, Image, Modal} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const { height, width} = Dimensions.get('window')

const Home = () => {

    const [image, setImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [pickerResponse, setPickerResponse] = useState(null);

    const onImageLibraryPress = useCallback(() => {
        const options = {
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: false,
        };
        launchImageLibrary(options, setPickerResponse);
    }, []);


    const onCameraPress = useCallback(() => {
        const options = {
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
        };
        launchCamera(options, setPickerResponse);
    }, []);



    

    return(
        <View style={{flex:1, flexDirection:'column',justifyContent:'center',alignItems:'center', backgroundColor:'#fff'}}>
            <View style={styles.imageContainer}>
            {
                pickerResponse ? 
                    <View style={{width:'100%',height:'100%'}}>
                            <Image style={{height:'100%', width:'100%'}} source={{uri:pickerResponse?.assets && pickerResponse.assets[0].uri}}/>
                    </View>
                :
                    <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Image style={{height: height*0.04, width: height*0.04, tintColor:'#ababab'}}  source={require('../../assets/box.png')}/>
                        <Text style={{marginVertical:'2%'}}>No Image selected</Text>
                    </View>
            }
            </View>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',width:'80%',marginVertical:'2.5%'}}>
                <TouchableOpacity onPress={() => {onCameraPress()}} style={{width:width*0.35, height:height*0.05, justifyContent:'center',alignItems:'center', backgroundColor:'#6134eb'}}>
                    <Text style={{color:'#fff'}}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}} style={{width:width*0.35, height:height*0.05, justifyContent:'center',alignItems:'center', backgroundColor:'#6134eb'}}>
                    <Text style={{color:'#fff'}}>Camera + Gallery</Text>
                </TouchableOpacity>
            </View>

                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                    <View onPress={() => {Keyboard.dismiss();setModalVisible(!modalVisible)}} style={styles.centeredView}>
                        <View style={{height : height*0.3, width: width*0.6, backgroundColor:'#fff', padding:16}}>
                            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={{fontSize:height*0.025, color:'#000'}}>Select</Text>
                                <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}}>
                                    <Image style={{height:height*0.0125, width:height*0.0125}} source={require('../../assets/close.png')} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => {onCameraPress();setModalVisible(!modalVisible)}} style={{marginTop:'5%'}}>
                                <Text style={{fontSize:height*0.025, color:'#000'}}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => {onImageLibraryPress();setModalVisible(!modalVisible)}} style={{marginTop:'2.5%'}}>
                                <Text style={{fontSize:height*0.025, color:'#000'}}>Gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            
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
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        position:'absolute',
        height:'100%',
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent:'center',
        alignItems:'center'
    },
})
