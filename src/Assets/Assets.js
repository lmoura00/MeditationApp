import {MaterialCommunityIcons, FontAwesome5, FontAwesome6, FontAwesome, MaterialIcons} from '@expo/vector-icons'
const tags = [
    {
        id:1,
        icon:<FontAwesome5 name="person-booth" size={24} />,
        nome:"Calmaria"
    },
    {
        id:2,
        icon:<FontAwesome6 name="person-rays" size={24}  />,
        nome: "Espiritual"
    },
    {
        id:3,
        icon: <MaterialCommunityIcons name="eye-settings-outline" size={24} />,
        nome:'Foco'
    },
    {
        id:4,
        icon:<MaterialIcons name="nature" size={24}  />,
        nome:"Natureza"
    },
    {
        id:5,
        icon:<FontAwesome name="sun-o" size={24}  />,
        nome:"Manhãs"
    },
]

const frases = [
    {
        id:1,
        frase: "Desejamos uma excelente semana!"
    },
    {
        id:2,
        frase: "Tenha um ótimo dia!"
    },
    {
        id:3,
        frase: "O sucesso é a soma de pequenos esforços repetidos dia após dia."
    },
    {
        id:4,
        frase: "Acredite em si mesmo e tudo será possível."
    },
    {
        id:5,
        frase: "Quanto maior o obstáculo, maior a glória em superá-lo."
    },
    {
        id:6,
        frase: "O que você faz hoje pode melhorar todos os amanhãs."
    },
    {
        id:7,
        frase: "A persistência é o caminho do êxito." 
    },
]

const recomendados = [
    {
        id:1,
        name:"Mindful Moments",
        color: "#64b5f6",
        bolasColor: "#2196f3",
        time: "10 a 20 min"
    },
    {
        id:2,
        name:"Zen Harmony",
        color: "#81c784",
        bolasColor: "#4caf50",
        time: "15 a 20 min",
    },
    {
        id:3,
        name:"Others",
        color: "#ba68c8",
        bolasColor: "#a55cb2",
        time: "5 a 20 min"
    },
]

export {tags, frases, recomendados}