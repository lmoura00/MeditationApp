import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Index } from "../Pages/Index";
import { Home } from "../Pages/Home";

export function Public(){
    const {Navigator, Screen} = createNativeStackNavigator()
    return(

            <Navigator>
                <Screen name="Index" component={Index} options={{headerShown:false}}/>
                <Screen name="Home" component={Home} options={{headerShown:false}}/>
            </Navigator>

    )
}