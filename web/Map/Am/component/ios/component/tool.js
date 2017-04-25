/**
 * Created by ava on 2017/4/25.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio
} from 'react-native';
module.exports = {
    size:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width
    },
    pixel: 1/PixelRatio.get(),
    get: function (url,successCallBack,failCallBack){
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                successCallBack(responseJson)
        })
            .catch((error) => {
                failCallBack(error)
            })
    }
};
