import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
    } from 'react-native';
import { Icon, Container, Content, Thumbnail } from 'native-base';

import CardComponent from '../CardComponent';

class HomeTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name='ios-home' style={{color:tintColor}} />
        )
    }

    render(){
        return (
            <Container style = {style.container}>
                <Content>
                    <View style={{height:100}}>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:7}}>
                            <Text style={{fontWeight:'bold'}}>스토리</Text>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon name='md-play' style={{fontSize:14}}/>
                                <Text style={{fontWeight:'bold'}}>모두 보기</Text>
                            </View>
                        </View>
                        <View style={{flex:3}}>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems:'center',
                                    paddingStart:5,
                                    paddingEnd:5
                                }}
                            >
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={require('../../assets/beomwoo.jpeg')}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={require('../../assets/1.jpg')}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={require('../../assets/2.jpg')}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={require('../../assets/3.jpg')}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={require('../../assets/4.jpg')}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={require('../../assets/5.jpg')}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={require('../../assets/6.jpeg')}/>
                                <Thumbnail style={{marginHorizontal:5, borderColor:'red', borderWidth:2}} source={require('../../assets/7.jpg')}/>
                                
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource='1' likes='2324'/>
                    <CardComponent imageSource='2' likes='46'/>
                    <CardComponent imageSource='3' likes='208'/>
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})