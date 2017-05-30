import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    Switch
} from 'react-native';


import Dimensions from 'Dimensions';
let screenWidth = Dimensions.get('window').width;
export default class CommonCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            isSwitch:false,
            isOn:false,
            uri:''

        };
    }
    render() {
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.mineLeft}>
                        <Image source={{uri:this.props.uri}} style={styles.mineImage}/>
                        <Text style={styles.textSize}>{this.props.title}</Text>
                    </View>
                    {this.renderRight()}
                </View>
            </TouchableOpacity>
        );
    }
    renderRight(){
        return(
            <View style={{flexDirection:'row'}}>
                {this.rightTitle()}
                <Image  source={{uri:'home_arrow'}} style={styles.moreGo}/>
            </View>
        )

    }
    rightTitle() {
        if (this.props.rightTitle) {
            return (
                <Text style={[styles.textSize,{color:'gray'}]}>{this.props.rightTitle}</Text>
            )
        }
        return(
            <Image source={{uri:this.props.rightImage}} style={styles.rightImage}/>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:38,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:8,
        paddingLeft:8,
    },
    switch:{
        paddingRight:20
    },
    textSize:{
        fontSize:12,
        paddingLeft:5
    },
    moreGo:{
        width:12,
        height:12
    },
    mineLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    mineImage:{
        width:15,
        height:15
    },
    rightImage:{
        width:24,
        height:13
    }

});
