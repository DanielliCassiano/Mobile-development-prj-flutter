import React from 'react';
import { TouchableOpacity , Text, View, Alert } from 'react-native';
import NewInput from '../components/input';
import { NavigationProp, useNavigation } from '@react-navigation/native'

import Styles from './styles';

export default function Login() {

    const [userName, setUsername] = React.useState('')
    const [passWord, setPassword] = React.useState('')

    const navigation = useNavigation<NavigationProp<any>>()

    function signIn() {
        if (!userName || userName.trim() === '') {
            Alert.alert('Login é obrigatório')
            return 
        }

        if( userName === 'dani' && passWord === '1234') {
           navigation.navigate('home')
        } else {
             Alert.alert('Usuário ou senha inválido(a)')
        }
    }

  return (
    <View style={Styles.container}>
        <NewInput label='Login' onChangeText={setUsername} />
        <NewInput label='Senha' onChangeText={setPassword} secureTextEntry/>

        <View style={Styles.buttonView}>
            <TouchableOpacity style={Styles.buttonStyle} onPress={signIn}>
                <Text style={Styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
