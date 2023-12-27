import { StyleSheet, Dimensions} from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1, 
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4ebfe',
    },

    inputView: {
        marginBottom: 30,
    },

    label: {
        fontSize: 18,
        marginBottom: 5,
    },

    input: {
        height: 30,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        width: Dimensions.get('screen').width - 100
    },

    buttonView: {
        marginTop: 10,
        width: Dimensions.get('screen').width - 100,
        height: 50,
    },

    buttonStyle: {
        width: Dimensions.get('screen').width - 100,
        height: 50,
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