import React from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native'

import NewInput from '../components/input';
import Styles from './styles';

export default function User() {

    const navigation = useNavigation<NavigationProp<any>>()
    
    navigation.setOptions({
        headerLeft: () => <Button color= '#9370DB' title='Voltar ' onPress={goToHome}/>,
    })

    function goToHome() {
        navigation.navigate('home')
      }

    const [anuncioName, setAnuncioname] = React.useState('')
    const [proprietario, setProprietario] = React.useState('')
    const [valor, setValor] = React.useState('')
    const [imagemPropriedade, setImagemPropriedade] = React.useState('')

    function save() {
        if (!anuncioName || anuncioName.trim() === '') {
            Alert.alert('Campo com o nome do anúncio é obrigatório')
            return 
        }
        if (!proprietario || proprietario.trim() === '') {
            Alert.alert('Campo com o nome do proprietário é obrigatório')
            return
        }
        if (!valor || valor.trim() === '') {
            Alert.alert('Campo com o valor esperado é obrigatório')
            return
        }
        if (!imagemPropriedade || imagemPropriedade.trim() === '') {
            Alert.alert('É obrigatório inserir ao penos uma imagem no anúncio')
            return
        }

        Alert.alert('Anúncio salvo com sucesso')
    }
    return (
        <View style={Styles.container}>
            <NewInput value={anuncioName} onChangeText={setAnuncioname} label='Nome do anúncio' />
            <NewInput value={proprietario} onChangeText={setProprietario} label='Proprietário' />  
            <NewInput value={valor} onChangeText={setValor} label='Valor esperado pela diária' />
            <NewInput value={imagemPropriedade} onChangeText={setImagemPropriedade} label='Foto do apartamento ou casa' />

            <View style={Styles.buttonView}>
                <TouchableOpacity style={Styles.buttonStyle} onPress={save}>
                    <Text style={Styles.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
      )
}