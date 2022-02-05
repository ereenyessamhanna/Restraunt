import { StyleSheet } from "react-native";
import { palette } from "../../theme";
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    innerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
        resizeMode: 'contain'
    },

    name: {
        fontWeight: 'bold',
        paddingBottom:10,
        fontSize:18
    },

    tags: {
        color: palette.grey
    }
});