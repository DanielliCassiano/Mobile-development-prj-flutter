import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from './src/pages/Home'
import Login from './src/pages/Login'
import Cadastro from './src/pages/CadastrarAnuncio'
import Anuncio from './src/pages/Anuncio'

const Stack = createNativeStackNavigator()

export default function APP() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{title: 'Login'}}/>
        <Stack.Screen name="home" component={HomePage} options={{title: 'Anúncios'}}/>
        <Stack.Screen name="cadastro" component={Cadastro} options={{title: 'Criar anúncio'}}/>
        <Stack.Screen name="anuncio" component={Anuncio} options={{title: 'Anúncio'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}