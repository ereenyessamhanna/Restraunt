import { PlatformColor, StyleSheet } from "react-native";
import { palette } from "../../theme";

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 8,
        height: 50,
        margin: 20,
        borderBottomWidth: 1,
        borderBottomColor: palette.brightGrey
    },

    searchIcon: {
        transform: [{ scaleX: -1 }],
        marginRight: 16
    },

    searchIconColor: {
        color: palette.grey
    },

    searchInput: {
        flex: 1,
        height: 45,
        fontSize: 14,
        color: palette.black
    },

    clearIcon: {
        padding: 5,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});