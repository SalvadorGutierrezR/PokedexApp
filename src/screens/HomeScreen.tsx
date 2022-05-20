import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { FadeInImage } from '../components/FadeInImage'
import PokemonCard from '../components/PokemonCard'

const HomeScreen = () => {

    const {top} = useSafeAreaInsets()
    const { isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated();

    return(
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={ globalStyles.pokebolaBG }
            />
            <View 
                style={{
                    alignItems: 'center'
                }}
            >
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={(
                        <Text style={{
                            ...globalStyles.title,
                            ...globalStyles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10
                        }}>Pokédex</Text>
                    )}
                    numColumns={2}
                    renderItem={({item}) => (<PokemonCard pokemon={item} />)}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={(
                        <ActivityIndicator 
                            style={{height: 100}} 
                            size={20} 
                            color='gray' />
                    )}
                />
            </View>
            {/*  */}
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})