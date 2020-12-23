import React from 'react';
import {Text,View} from 'react-native';
import Header1 from "./Header";

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}> 
                <Header1/>
               <Text style={{alignText: 'center', marginTop: 200}}> Read Story </Text> 
            </View>
        )
    }    
}