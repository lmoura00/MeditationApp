import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, Image} from 'react-native'
import LottieView from 'lottie-react-native';
import {Styles} from '../Styles/styles'


export function Home(){
    return(
        <View style={Styles.containerGeral}>
            <Text style={Styles.textTest}>Home</Text>
        </View>
    )
}