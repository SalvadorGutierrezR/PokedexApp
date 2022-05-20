import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage'
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

const PokemonScreen = ( {route, navigation}: Props ) => {

    const {color, simplePokemon} = route.params
    const { name, id} = simplePokemon
    const {top} = useSafeAreaInsets();

    const { isLoading, pokemon} = usePokemon(id);

    return(
        <View style={{flex: 1}}>
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 5
                    }}
                    onPress={ () => navigation.pop() }
                >
                    <Icon
                        name='arrow-back-outline'
                        color={'#ffffff'}
                        size={35}
                    />
                </TouchableOpacity>

                <Text style={{
                    ...styles.name,
                    top: top + 40
                }}>{name + `\n`}#{id}</Text>

                <Image
                    source={ require('../assets/pokebola-blanca.png') }
                    style={styles.pokeball}
                />

                <FadeInImage
                    uri={ simplePokemon.picture }
                    style={styles.pokemonImage}
                />

            </View>

            {
                ( isLoading )
                ?   <View style={{
                        ...styles.loadingIndicator
                    }}>
                        <ActivityIndicator
                            color={color}
                            size={50}
                        />
                    </View>
                :   <PokemonDetails pokemon={pokemon}/>
            }

            

        </View>
    )
}

export default PokemonScreen

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,

    },
    name: {
        color: '#ffffff',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})