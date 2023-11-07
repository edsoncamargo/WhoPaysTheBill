import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'

import Toast from 'react-native-toast-message'

import getListPlayerStyle from './styles'

import ListPlayers from '../../components/list-players'
import AddPlayers from '../../components/add-players'

import getText, { TextsI18nType } from '../../services/language'
import { Gear } from '../../components/gear'
import { setColor, theme } from '../../global/styles/theme'

export default function ListPlayer({ navigation, route }) {
    const { WpbColor } = theme.colors

    let [players, setPlayers] = useState<string[]>(
        route && route.params ? route.params.playersLoaded : []
    )
    const [textBtnLooser, setTextBtnLooser] = useState<string>('')
    const [textToastAddedPlayer, setTextToastAddedPlayer] = useState<string>('')
    const [textToastRemovedPlayer, setTextToastRemovedPlayer] =
        useState<string>('')

    useFocusEffect(() => {
        const getTexts = async () => {
            setTextBtnLooser(await getText(TextsI18nType.BtnGetTheLooser))
            setTextToastAddedPlayer(
                await getText(TextsI18nType.ToastAddedPlayer)
            )
            setTextToastRemovedPlayer(
                await getText(TextsI18nType.ToastRemovedPlayer)
            )
        }

        getTexts()
    })

    function addPlayer(player: string) {
        setPlayers([...players, player])
        Toast.show({
            type: 'success',
            text1: `${textToastAddedPlayer} ${player} ✅`,
            position: 'bottom',
            bottomOffset: 40,
            visibilityTime: 1000,
        })
    }

    function deletePlayerByIndex(indexToDelete: number) {
        const player = players.filter((_, index) => index === indexToDelete)[0]
        const playersRemaining = players.filter(
            (_, index) => index !== indexToDelete
        )
        setPlayers(playersRemaining)
        Toast.show({
            type: 'error',
            text1: `${textToastRemovedPlayer} ${player} ❌`,
            position: 'bottom',
            bottomOffset: 40,
            visibilityTime: 1000,
        })
    }

    return (
        <>
            <Gear navigation={navigation} />

            <View style={getListPlayerStyle().spaceBetween}>
                <View>
                    <AddPlayers addPlayer={addPlayer} />
                    <ListPlayers
                        players={players}
                        deletePlayerByIndex={deletePlayerByIndex}
                    />
                </View>

                <Button
                    buttonStyle={[getListPlayerStyle().buttonLooser]}
                    title={textBtnLooser}
                    onPress={() => {
                        navigation.push('WinningPlayer', {
                            players,
                        })
                    }}
                    disabled={players.length < 2}
                    disabledStyle={{
                        backgroundColor: setColor(WpbColor.Cta, 0.6),
                    }}
                    disabledTitleStyle={{
                        color: setColor(WpbColor.Neutral[100], 0.6),
                    }}
                />
            </View>
        </>
    )
}
