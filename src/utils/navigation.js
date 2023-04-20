import React from "react";
import {Text, View,Image,Dimensions,StyleSheet} from'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Friends from "../screens/friends";
import Settings from "../screens/settings";
import CreateUser from "../screens/createuser";
import UserDetails from "../screens/userdetails";
import 'react-native-gesture-handler'
const {height, width } = Dimensions.get('window');


const FriendsStackNavigator = createStackNavigator();
const FriendsStack = () => {
    return(
        <FriendsStackNavigator.Navigator>
            <FriendsStackNavigator.Screen name="Friends" component={Friends} options={{headerShown:false}}/>
            <FriendsStackNavigator.Screen name="NewFriend" component={CreateUser} options={{headerShown:false}}/>
            <FriendsStackNavigator.Screen name="Details" component={UserDetails} options={{headerShown:false}}/>
        </FriendsStackNavigator.Navigator>
    )
    
}

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
            <BottomTabNavigator.Screen name="FriendsStack" component={FriendsStack} 
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

const AppNavigator = ({linking}) => {
    return(
        <NavigationContainer linking={linking}>
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