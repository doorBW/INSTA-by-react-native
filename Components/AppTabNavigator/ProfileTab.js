import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
    } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import CardCompnent from '../CardComponent';

var images=[
    require('../../assets/1.jpg'),
    require('../../assets/2.jpg'),
    require('../../assets/3.jpg'),
    require('../../assets/4.jpg'),
    require('../../assets/5.jpg'),
    require('../../assets/6.jpeg'),
    require('../../assets/7.jpg'),
    require('../../assets/beomwoo.jpeg'),
    require('../../assets/deep_learning.png'),
    require('../../assets/python.jpg')
]

var {width,height} = Dimensions.get('window')
class ProfileTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name='person' style={{color:tintColor}} />
        )
    }
    constructor(props){
        super(props)

        this.state = {
            activeIndex: 0
        };
    }

    segmentClicked=(index)=>{
        this.setState({
            activeIndex: index
        })
    }

    renderSectionOne = () => {
        return images.map((image,index) => {
            return (
                <View key={index} style={[{width:(width)/3}, {height:(width)/3}, index % 3 !== 0 ? {paddingLeft:2}:{paddingLeft:0},{marginBottom:2}]}>
                    <Image style={{flex:1, width:undefined, height:undefined}}
                    source = {image}
                    />
                </View>
            )
        })
    }

    renderSection = () =>{
        if (this.state.activeIndex == 0){
            return(
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        }
        else if(this.state.activeIndex == 1){
            return(
                <View>
                <CardCompnent imageSource='1' likes='100'/>
                <CardCompnent imageSource='2' likes='36'/>
                <CardCompnent imageSource='3' likes='240'/>
                </View>
            )
        }
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

                    {/* 하단 */}
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', borderTopWidth:1,borderTopColor:'#eae5e5'}}>
                            <Button transparent onPress={()=>this.segmentClicked(0)} active={this.state.activeIndex == 0}>
                                <Icon name='ios-apps-outline' style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]}/>
                            </Button>
                            <Button transparent onPress={()=>this.segmentClicked(1)} active={this.state.activeIndex == 1}>
                                <Icon name='ios-list-outline' style={[this.state.activeIndex == 1 ? {} : {color:'grey'}]}/>
                            </Button>
                            <Button transparent onPress={()=>this.segmentClicked(2)} active={this.state.activeIndex == 2}>
                                <Icon name='ios-people-outline' style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]}/>
                            </Button>
                            <Button transparent onPress={()=>this.segmentClicked(3)} active={this.state.activeIndex == 3}>
                                <Icon name='ios-bookmark-outline' style={[this.state.activeIndex == 3 ? {} : {color:'grey'}]}/>
                            </Button>
                        </View>
                        <View>
                            {this.renderSection()}
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