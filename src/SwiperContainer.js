import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ProfileCard from "./ProfileCard";

const SLIDER_1_FIRST_ITEM = 1;

export default class SwiperContainer extends Component{

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            sliderCard:true,
        };
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <ProfileCard
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }


    render(){
        const data=[{key:1},{key:2},{key:3},{key:4},{key:5},{key:6}]
        return(
            <View style={styles.container}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={data}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={1000}
                    itemWidth={280}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.74}
                    inactiveSlideOpacity={0.7}
                    //inactiveSlideShift={20}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={false}
                    //autoplayDelay={500}
                    //autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />

            </View>

        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#95CAE4',
    },
    slider: {
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    headerStyle:{
        marginTop:15,
        height:40,
        backgroundColor:'white'
    }


})