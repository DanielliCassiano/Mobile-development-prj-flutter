import { StyleSheet, Button, View, Dimensions, ButtonProps } from 'react-native';


export default function button(props: ButtonProps) {
    return (
        <View style={Styles.buttonView}>
            <Button {...props}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    buttonView: {
        marginTop: 20,
        width: Dimensions.get('screen').width - 160
    },
})