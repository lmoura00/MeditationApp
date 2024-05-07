import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({
    containerGeral:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fcf9ff'
    },
    textTest:{
        fontSize:25,
        color:'#2f2f2f',
        fontStyle:'italic'
    },
    botaoIniciar:{
        backgroundColor:'#fff',
        bottom:40,
        position:'absolute'
    },
    textBtIniciar:{},
    viewLottieIndex:{
        width:Dimensions.get("window").width,
        height:300,
        borderTopLeftRadius:200,
        borderTopRightRadius:200,
        backgroundColor:'#2f2f2f',
        position:'absolute',
        bottom:0,
    },
    lottieIndex:{
        width: 400,
        height: 400,
        bottom:120
    },
})

export {Styles}