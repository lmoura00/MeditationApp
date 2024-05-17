import React, {useEffect, useState, useRef} from "react";
import {View, StyleSheet, Text, Image, FlatList, TouchableOpacity, ScrollView, Animated, Easing} from 'react-native'
import LottieView from 'lottie-react-native';
import {Styles} from '../Styles/styles'
import {api} from '../../api'
import { AntDesign} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {frases, tags, recomendados} from '../Assets/Assets'
import { SafeAreaView } from "react-native-safe-area-context";

export function Home(){
    const [color, setColor] = useState("black")
    const [data, setData] = useState([])
    const navigation = useNavigation()
    const [horario, setHorario] = useState('')
    const [msg, setMsg] = useState("")
    const [selectedTag, setSelectedTag] = useState(null);

    const rotateAnim = useRef(new Animated.Value(0)).current;


    const handleTagPress = (tagId) => {
        setSelectedTag(tagId);
    };

    async function getData(){
        const response = await api.get("?results=1&nat=BR")
        setData(response.data.results)
        console.log(data)
    }

    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset();
    currentDate.setMinutes(currentDate.getMinutes());

    
    
    
    
    
    useEffect(()=>{
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        console.log(`Hora atual no seu fuso horário local: ${hours}:${minutes}`);
        console.log(hours);
        
        getData();
        
        let horarioMensagem = "";
        
        if (hours > 6 && hours <= 12) {
            horarioMensagem = "Bom dia, ";
        } else if (hours > 12 && hours <= 18) {
            horarioMensagem = "Boa tarde, ";
        } else {
            horarioMensagem = "Boa noite, ";
        }
        
        setHorario(horarioMensagem);
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        const fraseAleatoria = frases[indiceAleatorio].frase;
        setMsg(fraseAleatoria);
    },[])
    
    const animations = useRef(recomendados.map(() => new Animated.Value(0))).current;
    useEffect(() => {
        // Função para iniciar a animação
        const startAnimation = () => {
            recomendados.forEach((item, index) => {
                Animated.loop(
                    Animated.timing(animations[index], {
                        toValue: 1,
                        duration: 5000,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                ).start();
            });
        };

        // Iniciar a animação
        startAnimation();
    },[])
    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    return(
        <View style={Styles.containerGeral}>
            <FlatList
                data={data}
                key={(item)=>String(item.login.uuid)}
                renderItem={({item})=> (
                    <TouchableOpacity onPress={()=>navigation.navigate("Perfil", {item})}>
                        <View style={Styles.userContainer}>
    
                            <Image source={{uri: item.picture.medium}} style={Styles.image}/>
                            <View style={Styles.textHeader}>
                                <Text style={Styles.title}> {horario}{item.name.first}!</Text>
                                <Text style={Styles.subTitle}>{msg}</Text>
                            </View>
    
                        </View>
                    </TouchableOpacity>
                )}
            />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.ContainerScrollView}>
                {tags.map(tag => (
                    <TouchableOpacity
                        key={tag.id}
                        onPress={() => handleTagPress(tag.id)}
                        style={{
                        }}
                        >
                        <View style={{ 
                            marginRight: 10,
                            flexDirection: 'column', 
                            alignItems: 'center',
                            backgroundColor: selectedTag === tag.id ? '#3f51b5' : 'transparent',
                            padding: 5,
                            // borderRadius: selectedTag === tag.id ? 20 : 40,
                            // transform: [{ rotate: selectedTag === tag.id ? '45deg' : '0deg' }],
                            borderTopLeftRadius: selectedTag === tag.id ? 20 : 40,
                            borderTopRightRadius: selectedTag === tag.id ? 20 : 40,
                            borderBottomLeftRadius: selectedTag === tag.id ? 20 : 40,
                            borderBottomRightRadius: selectedTag === tag.id ? 20 : 40,
                            alignItems:'center',
                            justifyContent:'center',
                            borderWidth:2,
                            height:selectedTag === tag.id ? 80 : 80,
                            width:selectedTag === tag.id ? 80 : 80,
                            borderColor:"#3f51b5",
                            //transform:selectedTag === tag.id ? [{ rotate:'-45deg'}] : [{rotate:'0deg'}] //INTERESSANTE. PERMITE ROTACIONAR
                        }}>
                            {React.cloneElement(tag.icon,{color: selectedTag === tag.id? "#fff" : "#3f51b5"})}
                        </View>
                        <View>
                            <Text style={{color:"#3f51b5", textAlign:'center', marginLeft:-10 }}>{tag.nome}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={Styles.containerReadyToStart}>
                <View style={{paddingHorizontal:10}}> 
                    <Text style={Styles.TitleContainerReadyToStart}>Preparado para a sua primeira sessão?</Text>
                    <Text style={Styles.subtitleContainerReadyToStart}>Meditação 5 - 10 min</Text>
                    <TouchableOpacity style={Styles.btReadyToStart}>
                        <Text style={Styles.textBtReadyToStart}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <LottieView
                        autoPlay
                        style={Styles.lottieHome}
                        source={require('../LottieFiles/Animation - 1715188459341.json')}
                    /> 
                </View>
            </View>
            <View style={Styles.RecomendadoContainer}>
                <Text style={Styles.TextRecomendado}>Recomendado para você</Text>
                <TouchableOpacity style={Styles.btVerTudo}>
                    <Text style={Styles.textBtVerTudo}>Ver tudo</Text>
                </TouchableOpacity>
            </View>
            <View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.tagRecomendadas}>
                {recomendados.map((item, index) => (
                    <TouchableOpacity key={item.id} style={[Styles.tagRecomendadasUnico, { backgroundColor: item.color }]}>
                        <View style={Styles.bolasContainer}>
                            <Animated.View style={[Styles.bolas, { backgroundColor: item.bolasColor, transform: [{ rotate: animations[index].interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }] }]} />
                            <Animated.View style={[Styles.bolas2, { backgroundColor: item.bolasColor, transform: [{ rotate: animations[index].interpolate({ inputRange: [0, 1], outputRange: ['360deg', '0deg'] }) }] }]} />
                        </View>
                        <Text style={Styles.textRecomentadoTag}>{item.name}</Text>

                        <Text style={Styles.subtitletextRecomentadoTag1}>Curso</Text>
                        <Text style={Styles.subtitletextRecomentadoTag2}>{item.time}</Text>
                        <AntDesign name="play" size={24} color="#fff" style={{position:'absolute', bottom:10, right:10}} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
                </View>
        </View>
    )
}