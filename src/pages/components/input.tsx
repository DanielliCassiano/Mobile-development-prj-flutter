import { StyleSheet, TextInput, Text, View, Dimensions, TextInputProps } from 'react-native';


interface Props  extends TextInputProps {
    label: string
}

export default function input(props: Props) {
    return (
        <View style={Styles.inputView}>
        <Text style={Styles.label}>{props.label}</Text>
        <TextInput style={Styles.input} 
            onChangeText={props.onChangeText}  
            secureTextEntry={props.secureTextEntry}
        />
    </View>
    )
}

const Styles = StyleSheet.create({
    inputView: {
        marginBottom: 30,
    },

    label: {
        fontSize: 18,
        marginBottom: 5,
        color: '#9370DB',
    },

    input: {
        height: 50,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        width: Dimensions.get('screen').width - 100,
        backgroundColor: '#fff',
        borderColor: '#9370DB',
        color: '#6900a3',
    },
})