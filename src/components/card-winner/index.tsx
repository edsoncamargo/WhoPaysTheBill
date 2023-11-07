import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Text } from 'react-native-elements'

import { LinearGradient } from 'expo-linear-gradient'

import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import getCardWinnerStyle from './styles'

import getText, { TextsI18nType } from '../../services/language'
import { setColor, theme } from '../../global/styles/theme'
import Loading from '../loading'

type props = {
    players: string[]
    navigation: any
}

export default function CardWinner({ players, navigation }: props) {
    const { WpbColor } = theme.colors
    const [loading, setLoading] = useState<boolean>(true)
    const [message, setMessage] = useState<string>('')
    const [messages, setMessages] = useState<string>('')
    const random = Math.floor(Math.random() * 5)
    console.log(random)

    useFocusEffect(() => {
        const getTexts = async () => {
            const messages = await getText(TextsI18nType.WinningMessages)
            setMessages(messages)
            setLoading(false)
        }

        getTexts()
    })

    useEffect(() => {
        setMessage(messages[random])
    }, [messages])

    if (loading) return <Loading />

    return (
        <LinearGradient
            style={getCardWinnerStyle().container}
            colors={[
                setColor(WpbColor.Primary.Medium),
                setColor(WpbColor.Primary.Regular),
            ]}
        >
            <Text style={getCardWinnerStyle().iconContainer}>
                <FontAwesomeIcon
                    icon={faSackDollar}
                    color={setColor(WpbColor.Neutral[100])}
                    size={100}
                />
            </Text>

            <Text style={getCardWinnerStyle().message}>{message}</Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.push('ListPlayer', {
                        playersLoaded: players,
                    })
                }}
                activeOpacity={1}
                style={getCardWinnerStyle().circleButton}
            >
                <Text style={getCardWinnerStyle().circleButtonIcon}>←</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
