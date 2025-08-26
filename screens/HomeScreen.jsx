import {StyleSheet, View, ScrollView} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCont from "../components/BtnCont";
import sizes from "../design/sizes"
import colors from "../design/colors"
import EmptyList from "../components/EmptyList";
import Search from "../components/Search";
import Card from "../components/Card";

export default function HomeScreen() {

    const navigation = useNavigation();

    function irParaProdutos(){
        navigation.navigate("Produto")
    }

    return (
        <ScrollView>
            <Header/>
            <FormCadastro/>

            <View style={styles.containerBotoes}>
                <BtnCont titulo={"Tarefas criadas"} numero={12}/>
                <BtnCont titulo={"Concluídas"} numero={5} eVerde={true}/>
            </View>
            <Search/>
            <Card ativo={true}/>
            <Card/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerBotoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: sizes.margin_horizontal,
        marginTop: sizes.padding_large,
        paddingBottom: sizes.padding_large,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray_330
    }
})