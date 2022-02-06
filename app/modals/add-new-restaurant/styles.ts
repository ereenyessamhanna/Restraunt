import { StyleSheet } from "react-native";
import { palette } from '../../theme';
export const styles = StyleSheet.create({
    container: {
        height: 400,
        marginTop: 'auto',
        backgroundColor: palette.white,
        zIndex: 2,
        borderRadius: 30,
        borderTopColor: palette.brightGrey,
        borderTopWidth: 1,
        shadowColor: palette.brightGrey,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 20,
    },

    addRestaurantContainer: {
        alignSelf:'center',
        width: '90%',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius:25,
        backgroundColor: palette.yellow,
        marginTop:40
    },

    addRestaurant: {
        color: palette.darkGreen,
        fontWeight:'700',
        fontSize:16,
    },

    close: {
        alignSelf:'flex-end',
        marginVertical:20,
        paddingRight:20
    }

});