import { useState } from 'react'
import { Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import getText, { TextsI18nType } from '../../services/language'

import getWinningPlayerStyle from './styles'

import CardWinner from '../../components/card-winner'
import { Footer } from '../../components/footer'

export default function WinningPlayer({ navigation, route }) {
    const [textHi, setTextHi] = useState<string>('')
    const [textWinningMessage, setWinningMessage] = useState<string>('')
    const { players } = route.params
    const player = players[Math.floor(Math.random() * players.length)]

    useFocusEffect(() => {
        const getTexts = async () => {
            setTextHi(await getText(TextsI18nType.Hi))
            setWinningMessage(await getText(TextsI18nType.WinningMessage))
        }

        getTexts()
    })

    return (
        <View style={getWinningPlayerStyle().container}>
            <View style={{ marginBottom: 24 }}>
                <Text style={getWinningPlayerStyle().title}>
                    {textHi}, {player} 👋🏼
                </Text>

                <Text style={getWinningPlayerStyle().subtitle}>
                    {textWinningMessage}
                </Text>
            </View>

            <CardWinner players={players} navigation={navigation} />

            <Footer />
        </View>
    )
}
