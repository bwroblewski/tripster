import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '../Carousel';
import TestMap from './TestMap'
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

const sliderWidth = width;
const itemWidth = width-60;
const SavedPosts = (props) => {
    return (
        // <Carousel
        //     ref={(c) => { this._carousel = c; }}
        //     data={getImages(props)}
        //     renderItem={_renderItem}
        //     sliderWidth={sliderWidth}
        //     itemWidth={itemWidth}
        // />
        <TestMap/>
    )
}
const _renderItem = ({ item, index }) => {
    return (
        <View style={styles.slide}>
            <Image source={{ uri: item.url }} style={{ height: 200, width: null, flex: 1 }} />
        </View>
    );
}

const getImages = (props) => {
    const places = findSelectedPost(props, props.savedPostsIDs[0]);
    places.images.push();
    return places.images;
}

const findSelectedPost = (props, id) => {
    return props.posts.places.filter(place => place.id === id)[0];
}

SavedPosts.propTypes = {

}

const styles = StyleSheet.create({
    slides: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    },
    title: {},
});

export default SavedPosts