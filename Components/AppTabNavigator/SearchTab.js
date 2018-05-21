import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
import { Icon } from 'native-base';

class SearchTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name='ios-search' style={{color:tintColor}} />
        )
    }

    render(){
        return (
            <View style={style.container}>
                <Text>SearchTab</Text>
            </View>
        );
    }
}
export default SearchTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})