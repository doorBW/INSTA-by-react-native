import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardCompnent extends Component{
    render(){
        const images = {
            '1': require('../assets/react_native.jpg'),
            '2': require('../assets/python.jpg'),
            '3': require('../assets/deep_learning.png')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/beomwoo.jpeg')} />
                        <Body>
                            <Text>Beomwoo</Text>
                            <Text note>2018년 5월 22일</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    {/* <Image source={require('../assets/react_native.jpg')} style={{height:200, width:null, flex:1}}/> */}
                    <Image source={images[this.props.imageSource]} style={{height:200, width:null, flex:1}}/>
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart-outline' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles-outline' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send-outline' style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height:40 }}>
                    {/* <Text>좋아요 101개</Text> */}
                    <Text>좋아요 {this.props.likes}개</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'900'}}>Beomwoo </Text>
                        #인스타그램 #따라하기 #리액트네이티브</Text>
                </CardItem>
            </Card>
        );
    }
}
export default CardCompnent;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})