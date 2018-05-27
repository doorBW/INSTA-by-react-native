import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
    } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
class ProfileTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name='person' style={{color:tintColor}} />
        )
    }

    render(){
        return (
            <Container style={{flex:1, backgroundColor:'white'}}>
                <Header>
                    <Left style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:17}}>tigercow.door</Text>
                        <Icon name='caret-down' type='FontAwesome' style={{paddingLeft:10, fontSize:14}}/>
                    </Left>
                    <Right style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name='back-in-time' type='Entypo' style={{paddingRight:10, fontSize:23}}/>
                        <Icon name='user-plus' type='Feather' style={{paddingRight:10, fontSize:23}}/>
                        <Icon name='dots-vertical' type='MaterialCommunityIcons' style={{fontSize:23}}/>
                    </Right>
                </Header>
                <Content>
                    <View style={{paddingTop:10}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1, alignItems:'center'}}>
                                <Image source={require('../../assets/beomwoo.jpeg')}
                                style={{width:75, height:75, borderRadius:37.5}}/>
                            </View>
                            <View style={{flex:3}}>
                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={{fontSize:17, fontWeight:'bold'}}>167</Text>
                                        <Text style={{fontSize:12, color:'gray'}}>게시물</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={{fontSize:17, fontWeight:'bold'}}>346</Text>
                                        <Text style={{fontSize:12, color:'gray'}}>팔로워</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={{fontSize:17, fontWeight:'bold'}}>192</Text>
                                        <Text style={{fontSize:12, color:'gray'}}>팔로잉</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Button bordered dark
                                    style={{flex:1, justifyContent:'center', height:30, marginHorizontal:10, marginTop:10}}>
                                        <Text>프로필 수정</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingHorizontal:10, paddingVertical:10}}>
                            <Text style={{fontWeight:'bold'}}>범우[25:?]</Text>
                            <Text> React-Native로</Text>
                            <Text> Instagram UI 따라하기!!!</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default ProfileTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})