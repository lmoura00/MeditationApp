import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native';
import {Styles} from '../Styles/styles'
import { useNavigation } from "@react-navigation/native";

export function Index(){
    const navigation = useNavigation()
    return(
        <View style={Styles.containerPageIndex}>
            <Text style={Styles.textoTitle}>Bem vindo ao Centro de Meditação</Text>
            <View style={Styles.viewLottieIndex}>
             <LottieView
                autoPlay
                style={Styles.lottieIndex}
                source={require('../LottieFiles/Animation - 1715103832349.json')}
            /> 
            </View>
            <TouchableOpacity style={Styles.botaoIniciar} onPress={()=>navigation.navigate("Home")}>
                <Text style={Styles.textBtIniciar}>Começar</Text>
            </TouchableOpacity>
        </View>
    )
}