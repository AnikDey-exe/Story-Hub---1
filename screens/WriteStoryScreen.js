import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image, Alert, Header} from "react-native";
import Header1 from "./Header";

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            bookName: '',
            author: '',
            story: ''
        }
    }
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}> 
                <Header1/>
                <TextInput
                style={styles.inputBox}
                placeholder="Book Name"
                value={this.state.bookName}
                />
                <TextInput
                style={styles.inputBox}
                placeholder="Author"
                value={this.state.author}
                />
                <TextInput
                style={styles.inputBox}
                placeholder="Write Story Here"
                multiline={true}
                numberOfLines={4}
                value={this.state.story}
                />
                <TouchableOpacity style={styles.submitButton}> 
                    <Text style={{textAlign: 'center'}}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    inputBox: {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 30,
        marginLeft: 0
    },
    submitButton: {
        backgroundColor: 'cyan',
        height: 30,
        width: 60,
        borderWidth: 1.5,
        marginTop: 50
    }
});