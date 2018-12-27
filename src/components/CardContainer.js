import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Carousel from './Carousel';
import {
    Text,
    Dimensions
} from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardContainer extends Component {

    state = {
        currentIndex: 0,
    }   

    render() {
        const { height, width } = Dimensions.get('window');
        const { profileImage, name } = this.props.user;
        const sliderWidth = width;
        const itemWidth = width - 60;

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: `${profileImage}` }} />
                        <Body>
                            <Text>{this.props.user.name}</Text>
                            <Text note>{this.props.postDetails.startDate}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Carousel
                        ref={(c) => { this._carousel = c;}}
                        data={this.props.getImages()}
                        renderItem={this.props._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        autoplay={this.props.autoplay}
                        autoplayDelay={1000}
                        onSnapToItem={this.printCurrentPlaceIndex}
                    />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Text style={{ marginRight: 5 }}>{this.props.likes}</Text>
                        <Button onPress={() => { this.props.onLikePress() }} transparent>
                            <Icon name="ios-heart" style={this.props.likeActive ? { color: 'red' } : { color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{ color: 'black' }} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900", marginRight: 5 }}>{name}</Text>
                            <Text> {this.showDescription()} </Text>
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
    showDescription = () => {
        if( this.state.currentIndex === 0 ){
            return this.props.postDetails.tourDescription
        }else{
            return this.props.postDetails.places[this.state.currentIndex-1].description;
        }
    }

    printCurrentPlaceIndex = (index) => {
        this.setState({
            currentIndex:index,
        });
    }
}

CardContainer.propTypes = {

}

export default CardContainer;
