import { Button, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native'

import AnuncioComponent from '../pages/components/anuncio';

export default function Home() {

  const navigation = useNavigation<NavigationProp<any>>()

  navigation.setOptions({
    headerLeft: () => <Button color= '#9370DB' title='Sair ' onPress={logOff}/>,
    headerRight: () => <Button color= '#9370DB' title='Criar anúncio' onPress={goToCadastro}/>
  })

  function logOff() {
    navigation.navigate('login')
  }

  function goToCadastro() {
    navigation.navigate('cadastro')
  }

  function goToAnuncio() {
    navigation.navigate('anuncio')
  }
  
  return (
    <View style={styles.centeredView}>
        <AnuncioComponent/>
        <AnuncioComponent/>
  </View>
);
};

const styles = StyleSheet.create({
centeredView: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#e5d0ff'
},
});