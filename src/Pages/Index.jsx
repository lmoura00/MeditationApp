import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native';
import {Styles} from '../Styles/styles'


export function Index(){
    return(
        <View style={Styles.containerGeral}>
            <View style={Styles.viewLottieIndex}>
             <LottieView
                autoPlay
                style={Styles.lottieIndex}
                source={require('../LottieFiles/Animation - 1715103832349.json')}
            /> 
            </View>
            <TouchableOpacity style={Styles.botaoIniciar}>
                <Text style={Styles.textBtIniciar}>Começar</Text>
            </TouchableOpacity>
        </View>
    )
}