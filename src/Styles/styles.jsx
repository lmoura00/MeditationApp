import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({
    //TAGS CONTAINER GERAL E TEXTO DE TESTE
    containerGeral:{
        flex:1,
        backgroundColor:'#fcf9ff'
    },
    textTest:{
        fontSize:25,
        color:'#2f2f2f',
        fontStyle:'italic'
    },
    //CONTAINER DA PAGE INDEX
    containerPageIndex:{
        flex:1,
        backgroundColor:'#fcf9ff',
        alignItems:'center',
    },

    //TAG DE BOTAO INICIAR
    botaoIniciar:{
        backgroundColor:'#fff',
        bottom:80,
        position:'absolute',
        width:"60%",
        height:50,
        justifyContent:'center',
        borderRadius:25,
        elevation:10,
        
    },
    textBtIniciar:{
        fontSize:18,
        textTransform:'uppercase',
        textAlign:'center',
        fontWeight:'400'
        
    },

    //VIEW LOTTIE DA PAGINA INDEX
    viewLottieIndex:{
        width:Dimensions.get("window").width,
        height:450,
        borderTopLeftRadius:200,
        borderTopRightRadius:200,
        backgroundColor:'#2f2f2f',
        position:'absolute',
        bottom:0,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderBottomWidth:0,
        borderColor:"#ffbc43",
        elevation:0
    },
    lottieIndex:{
        width: 400,
        height: 400,
        bottom:120
    },
    //TEXTO DA PAGE INDEX
    textoTitle:{
        color:'#2f2f2f',
        fontSize:35,
        marginTop:105,
        textAlign:"center",
        width:'80%',
        fontWeight:"700"
    },

    //TAG DO HEADER DA PAGINA HOME
    userContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'95%',
        height: 70,
        alignSelf:'center',
        marginBottom:10,
        marginTop:45,
        
    },
    image:{
        height:50,
        width:50,
        borderRadius:50,
        borderColor:'black',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    subTitle:{
        color:'#a2a8db',
        width:'90%',
        textAlign:'justify'
    },
    textHeader:{
        width:'80%',
    },


    //TAG SCROLLVIEW PAGINA HOME
    ContainerScrollView:{
        position:'absolute',
        top:135,
        width:"auto",
        //backgroundColor:'red',
        alignSelf:'center',
        maxHeight:100,
        marginLeft:35,
        
    },
    //TAG CONTAINER READY TO START
    containerReadyToStart:{
        width:'90%',
        height:200,
        backgroundColor:'#7986cb',
        alignSelf:'center',
        marginTop:25,
        borderRadius:25,
        padding:10,
        elevation:10,
        flexDirection:'row',
        position:'absolute',
        top:250
    },
    TitleContainerReadyToStart:{
        color:"#fff",
        textAlign:'left',
        fontSize:25,
        width:'70%',
        fontWeight:'600',
        marginTop:20
    },
    subtitleContainerReadyToStart:{
        color:"#ffff",
        marginTop:10,
        marginBottom:10,
    },
    lottieHome:{
        width:200,
        height:200, 
        position:'absolute',
        left:-290,
        //bottom:10,
        //backgroundColor:'red'
        
    },
    viewContainerLottieHome:{
        width:250,
        height:250,
    },
    btReadyToStart:{
        backgroundColor:'#fff',
        width:"25%",
        height:35,
        justifyContent:'center',
        borderRadius:15,
        padding:5,
        marginLeft:15
    },
    textBtReadyToStart:{
        textAlign:'center',
        color:'#7986cb',
        fontSize:15,
        textTransform:'uppercase',
        fontWeight:"500"
        
    },
    RecomendadoContainer:{
        //backgroundColor:'red',
        paddingHorizontal:30,
        paddingStart:15,
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        top:500,
        width:'90%',
        alignSelf:'center',
        marginBottom:25
    },
    TextRecomendado:{
        color:'#2f2f2f',
        fontSize:22,
        fontWeight:'600'
    },
    btVerTudo:{
        alignItems:'center',
        justifyContent:'center'
    },
    textBtVerTudo:{
        color:'#314ddf',
        fontSize:15
    },

    //TAGS RECOMENDADAS
    tagRecomendadas: {
        //backgroundColor: 'red',
        width: "90%",
        maxHeight: 250,
        marginTop:55,
        marginBottom: 55,
        alignSelf: 'center'
    },
    tagRecomendadasUnico: {
        backgroundColor: 'yellow',
        height: 200,
        width: 180,
        margin: 10,
        borderRadius: 25,
        position: 'relative', // Adicionado para garantir que as bolas fiquem dentro da tag
        overflow: 'hidden' // Adicionado para garantir que as bolas não sejam renderizadas fora da tag
    },
    bolasContainer: {
        position: 'relative', // Adicionado para garantir que as bolas fiquem dentro da tag
        width: '100%', // Adicionado para garantir que as bolas ocupem todo o espaço da tag
        height: '100%' // Adicionado para garantir que as bolas ocupem todo o espaço da tag
    },
    bolas: {
        backgroundColor: '#2196f3',
        width: 80,
        height: 80,
        borderRadius: 40,
        opacity: 0.9,
        position: 'absolute',
        top: '50%', // Adicionado para posicionar as bolas verticalmente no centro
        left: '50%', // Adicionado para posicionar as bolas horizontalmente no centro
        transform: [{ translateX: -40 }, { translateY: -40 }], // Adicionado para corrigir o posicionamento das bolas
        transformOrigin: 'top',
    },
    bolas2: {
        backgroundColor: '#2196f3',
        width: 80,
        height: 80,
        borderRadius: 40,
        opacity: 0.9,
        position: 'absolute',
        bottom: 10,
        right: 10,
        transformOrigin: 'top',
    },
    textRecomentadoTag:{
        color:'#fff',
        fontSize:25,
        fontWeight:'700',
        paddingLeft:10,
        paddingTop:55,
        position:'absolute'
    },
    subtitletextRecomentadoTag1:{
        position:"absolute",
        color:'#fff',
        fontSize:15,
        fontWeight:'700',
        paddingLeft:10,
        paddingTop:125,
    },
    subtitletextRecomentadoTag2:{
        position:"absolute",
        color:'#fff',
        fontSize:15,
        fontWeight:'700',
        paddingLeft:10,
        paddingTop:155,
    },
    FotoPerfil:{
        width:200,
        height:200,
        borderWidth:2,
        borderColor:"#ffbc43",
        borderRadius:100,
        alignSelf:"center",
        
        
    },
    name:{
        fontSize:29,
        textTransform:'uppercase',
        marginBottom:10,
        textAlign:'center',
        fontStyle:'italic',
        fontWeight:'bold',
        marginTop:55
    },
    label:{
        fontWeight:"bold",
        fontSize:20,
    },
    item:{
        fontWeight:"400",
        fontSize:20,
        fontStyle:'italic',
        textAlign:'center',
    },
    viewItens:{
        alignSelf:"center", width:'70%', height:150
    }
})

export {Styles}