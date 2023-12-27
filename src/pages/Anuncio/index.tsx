import { Button, TouchableOpacity, Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation<NavigationProp<any>>()

  navigation.setOptions({
    headerLeft: () => <Button color= '#9370DB' title='Voltar ' onPress={goToHome}/>,
  })

  function goToHome() {
    navigation.navigate('home')
  }
  
  return (
    <View style={styles.centeredView}>
      {/* <View style={styles.centeredView}> */}
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Casa de Veraneio em Santos</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2020/04/Casa-de-luxo-frente-a-praia-em-Interlagos-Bahia.jpg',
              }}
            />
          </View>
          <View style={styles.textsContainer}>
            <Text style={styles.modalText}>Roberta Matias</Text>
            <Text style={styles.modalText}>R$ 1000,00</Text>
          </View>
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textButton}>Entrar em Contato</Text>
              </TouchableOpacity>
          </View>
        </View>
      {/* </View> */}
  </View>
);
};

const styles = StyleSheet.create({
centeredView: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#e5d0ff'
},
modalView: {
  margin: 20,
  marginBottom: 20,
  width: Dimensions.get('screen').width - 60,
  height: 700,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
},
modalText: {
  marginTop: -15,
  marginBottom: 15,
  textAlign: 'center',
  fontSize: 25,
  color: '#9370DB'
},

imageContainer: {
  marginLeft: 0
},

textsContainer: {
  marginLeft: 0,
  marginTop: 70,
},

tinyLogo: {
  width: 300,
  height: 260,
},

buttonContainer: {
  marginLeft: 0,
  marginTop: 40
},

buttonStyle: {
  width: 320,
  height: 100,
  backgroundColor: '#9370DB',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
}, 

textButton: {
  fontSize: 20,
  color: '#fff',
},
});