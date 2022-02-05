import { StyleSheet } from "react-native";
import { palette } from "../../theme";
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingLeft: 20,
        borderRadius:10,
        borderWidth:1,
        borderColor: palette.brightGrey,
        marginHorizontal:20,
        marginVertical: 10,
    },

    innerContainer: {
        width:'70%'
    },

    name: {
        fontWeight: 'bold',
        paddingVertical: 10,
        fontSize: 18
    },

    description: {
        color: palette.grey,
        fontSize: 14,
        fontWeight: '200',
        paddingBottom: 10,
    },

    price: {
        color: palette.darkGreen,
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
    }
});