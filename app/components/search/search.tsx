import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { palette } from "../../theme";

interface SearchProps {
    searchTerm: string;
    onChangeText: (newSearchTerm: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchTerm, onChangeText }) => {

    const rendeSearchIcon = () => {
        return (
            <FontAwesomeIcon
                name="search"
                size={23}
                color={palette.grey}
                style={styles.searchIcon}
            />
        )
    }

    const renderSearchInput = () => {
        return (
            <TextInput
                style={styles.searchInput}
                onChangeText={onChangeText}
                placeholderTextColor={palette.grey}
                value={searchTerm}
                underlineColorAndroid="transparent"
                placeholder={'What you would like to buy?'}
            />
        )
    }

    const renderClearIcon = () => {
        if (searchTerm) {
            return (
                <TouchableOpacity
                    style={styles.clearIcon}
                    onPress={() => onChangeText('')}
                >
                    <IonIcon
                        name="ios-close-circle"
                        size={23}
                        color={palette.grey}
                    />
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.mainContainer}>
            {rendeSearchIcon()}
            {renderSearchInput()}
            {renderClearIcon()}
        </View>
    );
};

