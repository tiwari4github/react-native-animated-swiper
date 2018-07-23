import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';


export class WorkItemCard extends Component{
    render(){
        return(
            <View style={styles.content}>
                <Text style={styles.textStyle}>{this.props.entry}</Text>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    content:{
        borderRadius:8,
        borderWidth:1/2,
        alignItems:'center',
        margin:4,
        backgroundColor:'lightgrey'
    },
    textStyle:{
        alignSelf:'center',
        margin:3,
        fontSize:12
    }



})