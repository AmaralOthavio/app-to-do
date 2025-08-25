import {Button, Text, View} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import Header from "../components/Header";

export default function HomeScreen() {

    const navigation = useNavigation();

    function irParaProdutos(){
        navigation.navigate("Produto")
    }

    return (
        <View>
            <Header/>
        </View>
    )
}