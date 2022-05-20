import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { globalStyles } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
            showsVerticalScrollIndicator={false}
        >
            {/* Types */}
            <View style={{
                ...globalStyles.globalMargin,
                marginTop: 370
            }}>
                <Text style={styles.title}>Types</Text>
                <View style={{flexDirection: 'row'}}>
                    {
                        pokemon.types.map(({type}) => {
                            return (
                                <Text
                                    key={type.name}
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10
                                    }}
                                >
                                    {type.name}
                                </Text>
                            )
                        })
                    }

                </View>
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight} lb</Text>

            </View>
            {/* Sprites */}
            <View style={{
                ...globalStyles.globalMargin,
            }}>
                <Text style={styles.title}>Sprites</Text>
            </View>
            
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={ pokemon.sprites.front_default}
                    style={ styles.basicSprite}
                />
                <FadeInImage
                    uri={ pokemon.sprites.back_default}
                    style={ styles.basicSprite}
                />
                <FadeInImage
                    uri={ pokemon.sprites.front_shiny}
                    style={ styles.basicSprite}
                />
                <FadeInImage
                    uri={ pokemon.sprites.back_shiny}
                    style={ styles.basicSprite}
                />
            </ScrollView>

            {/* Skills */}
            <View style={{
                ...globalStyles.globalMargin,
            }}>
                <Text style={styles.title}>Base Skills</Text>
                <View style={{flexDirection: 'row'}}>
                    {
                        pokemon.abilities.map(({ability}) => {
                            return (
                                <Text
                                    key={ability.name}
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10
                                    }}
                                >
                                    {ability.name}
                                </Text>
                            )
                        })
                    }

                </View>
            </View>

            {/* Moves */}
            <View style={{
                ...globalStyles.globalMargin,
            }}>
                <Text style={styles.title}>Moves</Text>
                <View style={{flexDirection: 'row' ,flexWrap: 'wrap'}}>
                    {
                        pokemon.moves.map(({move}) => {
                            return (
                                <Text
                                    key={move.name}
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10
                                    }}
                                >
                                    {move.name}
                                </Text>
                            )
                        })
                    }

                </View>
            </View>

            {/* Stats */}
            <View style={{
                ...globalStyles.globalMargin,
            }}>
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, index) => {
                            return (
                                <View key={ stat.stat.name + index} style={{flexDirection: 'row'}}>
                                    <Text
                                        style={{
                                            ...styles.regularText,
                                            marginRight: 10,
                                            width: 150
                                        }}
                                    >
                                        {stat.stat.name}
                                    </Text>
                                    <Text
                                        style={{
                                            ...styles.regularText,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {stat.base_stat}
                                    </Text>

                                </View>
                            )
                        })
                    }

                </View>

                <View
                    style={{
                        marginBottom: 20,
                        alignItems: 'center'
                    }}
                >
                    <FadeInImage
                    uri={ pokemon.sprites.front_default}
                    style={ styles.basicSprite}
                />
                </View>

            </View>
        </ScrollView>
    )
}

export default PokemonDetails

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
        marginTop: 20
    },
    regularText: {
        fontSize: 19,
        color: 'black'
    },
    basicSprite: {
        width: 100,
        height: 100,
    }
})