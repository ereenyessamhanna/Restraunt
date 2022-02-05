import { StyleSheet } from "react-native";
import { palette } from '../../theme';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:palette.white
    },

    listContentContainer: {
        paddingTop:20,
        paddingHorizontal:20
    },

    itemContainer: {
        paddingRight:10
    },

    restaurantHeader: {
        fontSize: 24,
        fontWeight:'bold',
        paddingLeft:20,
        marginTop: 40,
        marginBottom: 20
    },

    restaurantItem: {
        paddingVertical:15,
        marginHorizontal: 20,
        marginBottom:20,
        borderColor: palette.brightGrey,
        borderWidth: 1,
        borderRadius: 10
    },

});