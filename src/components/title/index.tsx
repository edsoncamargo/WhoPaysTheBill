import React, { useState } from 'react'
import { Text } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'

import getTitleStyle from './styles'

import getText, { TextsI18nType } from '../../services/language'

export default function TitleWPB() {
    const [title, setTitle] = useState<string[]>([])

    useFocusEffect(() => {
        const getTexts = async () => {
            setTitle(await getText(TextsI18nType.AppName))
        }

        getTexts()
    })

    return (
        <>
            <Text style={getTitleStyle().container}>
                {title[0]}{' '}
                <Text style={getTitleStyle().highlight}>{title[1]} </Text>
                {title[2]} {title[3]}
            </Text>
        </>
    )
}
