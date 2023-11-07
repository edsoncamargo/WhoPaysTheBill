import { useState } from 'react'
import { Keyboard, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Button, Input } from 'react-native-elements'

import { Formik } from 'formik'
import * as Yup from 'yup'

import getAddPlayerStyle from './styles'

import TitleWPB from '../title'

import getText, { TextsI18nType } from '../../services/language'

import { setColor, theme } from '../../global/styles/theme'

type props = {
    addPlayer: (player: string) => void
}

export default function AddPlayers({ addPlayer }: props) {
    const { WpbColor } = theme.colors

    const [textPlaceholder, setTextPlaceholder] = useState<string>('')
    const [textAddPlayer, setTextAddPlayer] = useState<string>('')
    const [textMinErrorMessage, setTextMinErrorMessage] = useState<string>('')
    const [textMaxErrorMessage, setTextMaxErrorMessage] = useState<string>('')
    const [textRequiredErrorMessage, setTextRequiredErrorMessage] =
        useState<string>('')
    const [textOnlyLethersErrorMessage, setTextOnlyLethersErrorMessage] =
        useState<string>('')

    useFocusEffect(() => {
        const getTexts = async () => {
            setTextPlaceholder(
                await getText(TextsI18nType.PlaceholderNameToAdd)
            )
            setTextAddPlayer(await getText(TextsI18nType.AddPlayer))
            setTextMinErrorMessage(await getText(TextsI18nType.MinErrorMessage))
            setTextMaxErrorMessage(await getText(TextsI18nType.MaxErrorMessage))
            setTextRequiredErrorMessage(
                await getText(TextsI18nType.RequiredErrorMessage)
            )
            setTextOnlyLethersErrorMessage(
                await getText(TextsI18nType.OnlyLethersErrorMessage)
            )
        }

        getTexts()
    })

    return (
        <>
            <TitleWPB />
            <Formik
                initialValues={{ player: '' }}
                validationSchema={Yup.object({
                    player: Yup.string()
                        .min(3, textMinErrorMessage)
                        .max(16, textMaxErrorMessage)
                        .required(textRequiredErrorMessage)
                        .matches(/^[aA-zZ\s]+$/, textOnlyLethersErrorMessage),
                })}
                onSubmit={(values, { resetForm }) => {
                    const { player } = values
                    addPlayer(player)
                    Keyboard.dismiss()

                    setTimeout(() => {
                        resetForm({
                            values: { player: '' },
                        })
                    }, 125)
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    touched,
                    errors,
                    values,
                }) => (
                    <View style={{ marginBottom: 48 }}>
                        <Input
                            placeholder={textPlaceholder}
                            renderErrorMessage={
                                Boolean(touched.player) &&
                                Boolean(errors.player)
                            }
                            errorMessage={errors.player}
                            inputStyle={getAddPlayerStyle().input}
                            placeholderTextColor={setColor(
                                WpbColor.Primary.Regular,
                                0.6
                            )}
                            selectionColor={setColor(WpbColor.Primary.Regular)}
                            errorStyle={getAddPlayerStyle().error}
                            onChangeText={handleChange('player')}
                            onBlur={handleBlur('player')}
                            value={values.player}
                        />

                        <View style={getAddPlayerStyle().margin}>
                            <Button
                                buttonStyle={getAddPlayerStyle().button}
                                title={textAddPlayer}
                                onPress={() => {
                                    handleSubmit()
                                }}
                                disabled={
                                    (values && values.player.length <= 0) ||
                                    Boolean(errors.player)
                                }
                                disabledStyle={{
                                    backgroundColor: setColor(
                                        WpbColor.Primary.Regular,
                                        0.6
                                    ),
                                }}
                                disabledTitleStyle={{
                                    color: setColor(WpbColor.Neutral[100], 0.6),
                                }}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </>
    )
}
