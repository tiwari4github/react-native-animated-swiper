import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Platform, Dimensions,ScrollView} from 'react-native';
import {WorkItemCard} from "./WorkItemCard";


const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default class ProfileCard extends Component {

    render () {
        const { data: { key, }, even } = this.props;

        return (
            <View activeOpacity={1} style={styles.slideInnerContainer}>

                <View style={[styles.Container, even ? styles.ContainerEven : {}]}>
                    <ScrollView>
                        <View style={styles.innerContainer}>
                            <Image source={require('./assets/oldman.jpeg')} style={{alignSelf:'center',height:80,width:80,borderRadius:40,margin:5}}/>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Prashant Tiwari ({key})</Text>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>9811338569</Text>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>mark.ruffalo@gmail.com</Text>
                            <Text style={{margin:10}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales sem mattis hendrerit commodo.  consectetur adipiscing elit. Phasellus blandit,
                            </Text>
                            <Text style={{fontSize:14,fontWeight:'bold',marginTop:5,}}> Skills</Text>
                            <View style={{flexDirection:'row',flexWrap:'wrap',margin:15,alignItems:'center'}}>
                                <WorkItemCard entry={'GARDENING'}/>
                                <WorkItemCard entry={'COOKING'}/>
                                <WorkItemCard entry={'AC REPAIR'}/>
                                <WorkItemCard entry={'HOUSEKEEPING'}/>
                                <WorkItemCard entry={'CAR CLEANING'}/>
                            </View>

                            <Text style={{fontSize:14,fontWeight:'bold',margin:5,}}> Language</Text>
                            <Text style={{fontSize:12}}>ENGLISH | FRNECH | SPANISH</Text>
                            <Text style={{fontSize:14,fontWeight:'bold',margin:5,}}> Location</Text>
                            <Text style={{fontSize:12}}>MALBOURNE | SYDNY | CANBERRA</Text>

                            <Text style={{fontSize:14,fontWeight:'bold',margin:5,}}> Schedule</Text>
                            <View style={{backgroundColor:'lightgrey',height:30, width:250,alignItems:'center',marginBottom:5}}>
                                <View style={{margin:5,flexDirection:'row',}}>
                                    <Text style={{fontSize:12,marginRight:20}}>May 1,2018    </Text>
                                    <Text>2:00am - 4:00am</Text>
                                </View>

                            </View>
                            <View style={{backgroundColor:'lightgrey',height:30, width:250,alignItems:'center'}}>
                                <View style={{margin:5,flexDirection:'row',}}>
                                    <Text style={{fontSize:12,marginRight:20}}>May 2,2018    </Text>
                                    <Text>Entire day</Text>
                                </View>

                            </View>
                            <View style={{flexDirection:'row',margin:10}}>
                                <Text style={{fontSize:12,marginRight:15}}> See Avaialibility Calender</Text>
                                <Image source={require('./assets/calc.png')} style={{height:20,width:20}}/>

                            </View>
                        </View>
                    </ScrollView>

                </View>
                <TouchableOpacity onPress={() => { alert(`You've clicked '${key}' item`); }}>
                    <View style={styles.textContainer}>
                        <Text style={{fontSize:18,fontWeight:'bold',}}>Select</Text>


                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles= StyleSheet.create({
    slideInnerContainer: {
        marginTop:15,
        ...Platform.select({
            ios: {
                width: 320,
                height: 630,
                paddingRight:35,
                paddingBottom: 18
            },
            android: {
                width: 280,
                height: 535,
                paddingBottom: 18
            },
        }),
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    Container: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: '#FFCC33',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        alignItems:'center',
        borderRightWidth:1,
        borderLeftWidth:1,
        borderTopWidth:1,
    },
    ContainerEven: {
        backgroundColor: '#F5FCFF',
        alignItems:'center'
    },
    innerContainer:{
        flex:1,
        alignItems:'center',
    },
    textContainer: {
        justifyContent: 'center',
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        height:50,
        backgroundColor: 'lightgrey',
        alignItems:'center',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },

});