import { StyleSheet, Text, View, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { globalStyles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width

const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    const [term, setTerm] = useState('');

    useEffect( () => {

        if(term.length === 0) {
            return setPokemonFiltered([]);
        }

        if ( isNaN( Number(term)) ){
            setPokemonFiltered(
                simplePokemonList.filter( pokemon => {
                    return pokemon.name.toLowerCase().includes(term.toLowerCase());
                })
            )
        } else {
            const pokemonById = simplePokemonList.find( pokemon => {
                    return pokemon.id === term;
                })
            setPokemonFiltered(
                ( pokemonById ) ? [pokemonById] : []
            )

        }

    }, [term]);

    if( isFetching ) {
        return <Loading/>
    }

    return(
        <View style={{
            flex: 1, 
            // marginTop: top + 10,
            marginHorizontal: 20
        }}>
            <SearchInput
                onDebounce = { (value) => setTerm( value ) } 
                style={{ marginTop: top + 20, position: 'absolute', zIndex: 999, width: screenWidth - 40 }}
            />

            <FlatList
                data={pokemonFiltered}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <Text style={{
                        ...globalStyles.title,
                        ...globalStyles.globalMargin,
                        paddingBottom: 10,
                        marginTop: top + 60
                    }}>{term}</Text>
                )}
                numColumns={2}
                renderItem={({item}) => (<PokemonCard pokemon={item} />)}
            />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    
})