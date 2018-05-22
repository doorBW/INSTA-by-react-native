import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
import { Icon, Container, Content } from 'native-base';

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