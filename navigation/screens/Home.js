import * as React from 'react';
import { View, Text } from 'react-native-web';

export default function Home({navigation}) {

    return(

        <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text
        onPress={()=> alert('Home')}
        style={{fontSize:20, fontWeight:bold}}
        >
        Home page
        </Text>
        </View>
    )
}