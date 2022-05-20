import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import useDebouncedValue from '../hooks/useDebouncedValue';

interface Props {
    style?: StyleProp<ViewStyle>
    onDebounce: (value: string) => void
}

const SearchInput = ( {style, onDebounce}: Props ) => {

    const [textValue, setTextValue] = useState('');

    const debouncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue])

    return(
        <View style={{
            ...styles.container,
            ...style as any
        }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Search Pokémon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={(text) => setTextValue(text)}
                />
                <Icon
                    name='search-outline'
                    color='grey'
                    size={25}
                />
            </View>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#255000',
    },
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2
    }
})