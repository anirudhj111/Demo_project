import React from "react";
import {Text, View,Image,Dimensions,StyleSheet} from'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Friends from "../screens/friends";
import Settings from "../screens/settings";
const {height, width } = Dimensions.get('window');

const BottomTabNavigator = createBottomTabNavigator();

const BottomTab = () => {
    return(
        <BottomTabNavigator.Navigator 
            screenOptions={{
                headerShown : false,
                tabBarShowLabel:false,
                tabBarStyle:{height:height*0.08}
            }}>
            <BottomTabNavigator.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon:({focused}) => {
                        return(
                            <View style={styles.tabIconStyle}>
                                <Image style={{height:height*0.03,width:height*0.03, tintColor:focused?'#325ea8':'#000'}} source={require('../../assets/home.png')}/>
                                <Text style={{color:focused?'#325ea8':'#000'}}>Home</Text>
                            </View>
                        )
                    }
                }}/>
            <BottomTabNavigator.Screen name="Friends" component={Friends} 
                options={{
                    tabBarIcon:({focused}) => {
                        return(
                            <View style={styles.tabIconStyle}>
                                <Image style={{height:height*0.03,width:height*0.03, tintColor:focused?'#325ea8':'#000'}} source={require('../../assets/friends.png')}/>
                                <Text style={{color:focused?'#325ea8':'#000'}}>Friends</Text>
                            </View>
                        )
                    }
                }}/>
            <BottomTabNavigator.Screen name="Settings" component={Settings} 
                options={{
                    tabBarIcon:({focused}) => {
                        return(
                            <View style={styles.tabIconStyle}>
                                <Image style={{height:height*0.03,width:height*0.03, tintColor:focused?'#325ea8':'#000'}} source={require('../../assets/settings.png')}/>
                                <Text style={{color:focused?'#325ea8':'#000'}}>Settings</Text>
                            </View>
                        )
                    }
                }}/>
        </BottomTabNavigator.Navigator>
    )
}

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <BottomTab/>
        </NavigationContainer>
    )
}

export default AppNavigator;

const styles = StyleSheet.create({
    tabIconStyle : {
        display:'flex', 
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})