import React, { useState, useEffect, useCallback} from 'react'
import { Text, View, Dimensions, TouchableOpacity, StyleSheet, Image, Modal, Linking,ActivityIndicator} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import { removeAllListeners } from 'process';
const { height, width} = Dimensions.get('window')

const Home = ({navigation}) => {

    const [image, setImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [pickerResponse, setPickerResponse] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Linking.addEventListener('url', handleDeepLink());
        return () => {
            Linking.removeEventListener('url',null);
        } 
    },[])

    const handleDeepLink = () => {
        setIsLoaded(true);
        Linking.getInitialURL().then((url) => {
         console.log("url",url)
         let url1;
         if(url){
            url1 = url.split('/')
            redirectToDetails(url1[3]);
         }
        });
      };


    const redirectToDetails = async(id) => {
        axios({
          url:`https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice`,
          method:'GET',
        })
        .then((res) => {
            res.data.map((item) => {
                if(item.Name == id){
                  console.log("id found")
                  setIsLoaded(false)
                  navigation.navigate('FriendsStack',{screen:'Details',params : {"item" : item }},)
              }
            })
        })
        .catch((err) => {
            console.log("err",err);
        })
    }

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

    if(isLoaded){
        return(
            <View style={{height:'100%', width:'100%', flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size={"large"} color={"#1a4c9c"} />
            </View>
        )
    }

    return(
        <View style={{flex:1, flexDirection:'column',justifyContent:'center',alignItems:'center', backgroundColor:'#fff'}}>
            <View style={styles.imageContainer}>
            {
                pickerResponse?.assets ? 
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
            <TouchableOpacity onPress={() => {setPickerResponse(null)}} style={{width:width*0.35, height:height*0.045, justifyContent:'center',alignItems:'center', borderWidth:1, borderColor:'#6134eb'}}>
                <Text style={{color:'#6134eb'}}>Clear</Text>
            </TouchableOpacity>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                    <View onPress={() => {Keyboard.dismiss();setModalVisible(!modalVisible)}} style={styles.centeredView}>
                        <View style={{width: width*0.6, backgroundColor:'#fff', padding:height*0.025}}>
                            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={{fontSize:height*0.025, color:'#000'}}>Select</Text>
                                <TouchableOpacity style={{padding:8}} onPress={() => {setModalVisible(!modalVisible)}}>
                                    <Image style={{height:height*0.0125, width:height*0.0125}} source={require('../../assets/close.png')} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => {onCameraPress();setModalVisible(!modalVisible)}} style={{marginTop:'7%'}}>
                                <View style={styles.selectOption}>  
                                    <Image source={require('../../assets/camera.png')} style={{height:height*0.025, width: height*0.025}}/>
                                    <Text style={{fontSize:height*0.02, color:'#000',marginHorizontal:'5%'}}>Camera</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => {onImageLibraryPress();setModalVisible(!modalVisible)}} style={{marginTop:'5%'}}>
                                <View style={styles.selectOption}>  
                                    <Image source={require('../../assets/gallery.png')} style={{height:height*0.025, width: height*0.025}}/>
                                    <Text style={{fontSize:height*0.02, color:'#000',marginHorizontal:'5%'}}>Gallery</Text>
                                </View>
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

    selectOption : {
        display:'flex', 
        flexDirection:'row',
        padding:8, 
        alignItems:'center', 
        borderWidth:0.5,
        borderColor:'#c7c7c7', 
        borderRadius:4
    }
})
