import * as React from 'react'
// import { View } from 'react-native-web'
// import {NavigationContainer} from '@react'
import { NavigationContainer } from '@react-navigation/native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';



///screens
import Home from './screens/Home'
import Settings from './screens/Settings'
import Details from './screens/Details'

const homeName ='Home'
const detailsName ='Details'
const settingsName ='Settings'


const Tab = createBottomTabNavigator();

export default function MainScreen(){
    return(
<NavigationContainer>
<Tab.Navigator 
initialRouteName={homeName}
screenOptions={({route}) =>({

    tabBarIcon:({focused, color, size}) =>{
        let iconName;
        let rn =route.name;

        if(rn===homeName){
            iconName= focused? 'home' : 'home_ouline';
        }
        else if(rn===detailsName){
            iconName= focused? 'home' : 'list_ouline';
        }
        else if(rn===settingsName){

            iconName= focused? 'home' : 'settings_ouline';
        }
        return <Ionicons name={iconName} size={size} color={color} />
    }


})}
>
    <Tab.Screen name={homeName} component={Home}/>
    <Tab.Screen name={homeName} component={Settings}/>
    <Tab.Screen name={homeName} component={Details}/>


    {/* </Tab.Screen> */}

</Tab.Navigator>
</NavigationContainer>

        // <View>Hello</View>
    )
}