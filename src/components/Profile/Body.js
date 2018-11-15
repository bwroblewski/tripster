import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon, Button } from 'native-base';
import { View } from "react-native";
import ProfileContent from './ContentSelector';

class Body extends Component {
    state = {
        name: 'Maks Kolodiy',
        nickame: 'kolkol69',
        following: 190,
        followers: 256,
        posts: 12,
        activeIndex: 0
    }

    segmentClicked = (activeIndex) => {
        this.setState({activeIndex});
    }
    
    render() {
        return (
            <View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                    <Button
                        onPress={() => this.segmentClicked(0)}
                        transparent
                        active={this.state.activeIndex == 0}
                    >
                        <Icon name="ios-apps" style={[this.state.activeIndex == 0 ? {} : { color: 'grey' }]} />
                    </Button>
                    <Button
                        onPress={() => this.segmentClicked(1)}
                        transparent active={this.state.activeIndex == 1}>
                        <Icon name="ios-list" style={[{ fontSize: 32 }, this.state.activeIndex == 1 ? {} : { color: 'grey' }]} />
                    </Button>
                    <Button
                        onPress={() => this.segmentClicked(2)}
                        transparent active={this.state.activeIndex == 2}>
                        <Icon name="ios-bookmark" style={this.state.activeIndex == 2 ? {} : { color: 'grey' }}></Icon>
                    </Button>
                    <Button
                        onPress={() => this.segmentClicked(3)}
                        transparent last active={this.state.activeIndex == 3}>
                        <Icon name="ios-people" style={[{ fontSize: 32 }, this.state.activeIndex == 3 ? {} : { color: 'grey' }]} />
                    </Button>
                </View>

                {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares */}
                <ProfileContent active={this.state.activeIndex} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Body)