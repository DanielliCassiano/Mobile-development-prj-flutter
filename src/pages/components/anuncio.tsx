import {TouchableOpacity, Dimensions, StyleSheet, Text, View, Image,  } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native'

export default function anuncioComponent() {
    const navigation = useNavigation<NavigationProp<any>>()

    function goToAnuncio() {
        navigation.navigate('anuncio')
      }
  return (
    <View>
        <View style={styles.anuncioView}>
          <Text style={styles.anuncioText}>Casa de Veraneio em Santos</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageAnuncio}
              source={{
                uri: 'https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2020/04/Casa-de-luxo-frente-a-praia-em-Interlagos-Bahia.jpg',
              }}
            />
          </View>
          <View style={styles.textsContainer}>
            <Text style={styles.anuncioText}>Roberta Matias</Text>
            <Text style={styles.anuncioText}>R$ 1000,00</Text>
          </View>
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyle} onPress={goToAnuncio}>
                <Text style={styles.textButton}>Conferir</Text>
              </TouchableOpacity>
          </View>
        </View>
    </View>
);
};

const styles = StyleSheet.create({

anuncioView: {
  margin: 20,
  marginBottom: 20,
  width: Dimensions.get('screen').width - 60,
  height: 240,
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

anuncioText: {
  marginTop: -15,
  marginBottom: 15,
  textAlign: 'center',
  fontSize: 18,
  color: '#9370DB'
},

imageContainer: {
  marginLeft: -180
},

textsContainer: {
  marginLeft: 140,
  marginTop: -130,
},

imageAnuncio: {
  width: 150,
  height: 150,
},

buttonContainer: {
  marginLeft: 150
},

buttonStyle: {
  width: 140,
  marginTop: 10,
  height: 70,
  backgroundColor: '#9370DB',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
}, 

textButton: {
  fontSize: 20,
  color: '#fff',
},
})