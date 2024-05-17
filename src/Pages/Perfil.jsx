import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { Styles } from "../Styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
export function Perfil(){
    const navigation = useNavigation()
    const {params} = useRoute()
    const image = params.item.picture
    console.log(params)
    const isoDate = params.item.dob.date

    // Cria um objeto Date a partir da string ISO
    const date = new Date(isoDate);

    // Extrai o dia, mês e ano do objeto Date
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses são base 0, então adicionamos 1
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    //console.log(params.item.location.street)
    
    return(
        <View style={Styles.containerGeral}>
            <Text style={Styles.name}>{params.item.name.first} {params.item.name.last}</Text>
            <Image source={{uri:params.item.picture.large}} style={Styles.FotoPerfil}/>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>USERNAME: </Text>
                <Text style={Styles.item}>{params.item.login.username}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>Senha: </Text>
                <Text style={Styles.item}>{params.item.login.password}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>E - MAIL: </Text>
                <Text style={Styles.item}>{params.item.email}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>TELEFONE: </Text>
                <Text style={Styles.item}>{params.item.phone}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>CELULAR: </Text>
                <Text style={Styles.item}>{params.item.cell}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>IDADE: </Text>
                <Text style={Styles.item}>{params.item.dob.age} anos</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>NASCIMENTO: </Text>
                <Text style={Styles.item}>{formattedDate}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>GÊNERO: </Text>
                <Text style={Styles.item}>{params.item.gender === 'female' ? "Feminino": "Masculino"}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>CPF: </Text>
                <Text style={Styles.item}>{params.item.id.value}</Text>
            </View>
            <View style={{alignSelf:"center", width:'70%', height:150}}>
                <Text style={Styles.label}>LOCALIZAÇÃO: </Text>
                <Text style={Styles.item}>{params.item.location.street.name}, </Text>
                <Text style={Styles.item}>{params.item.location.street.number}, </Text>
                <Text style={Styles.item}>{params.item.location.city} - </Text>
                <Text style={Styles.item}>{params.item.location.state}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Text style={Styles.label}>Coordenadas: </Text>
                <Text style={Styles.item}>{params.item.location.coordinates.latitude}   </Text>
                <Text style={Styles.item}>{params.item.location.coordinates.longitude}</Text>
            </View>
        </View>
    )
}