import { faCircleQuestion, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-elements'
import getSettingsStyle from './styles'
import { Back } from '../../components/back'
import { useState } from 'react'
import getText, { TextsI18nType } from '../../services/language'
import { setColor, theme } from '../../global/styles/theme'

export function Settings({}) {
    const { WpbColor } = theme.colors
    const navigation = useNavigation()

    const [textSettings, setTextSettings] = useState<string>('')

    useFocusEffect(() => {
        const getTexts = async () => {
            setTextSettings(await getText(TextsI18nType.Settings))
        }

        getTexts()
    })

    return (
        <View style={getSettingsStyle().container}>
            <Back />

            <View style={getSettingsStyle().listContainer}>
                <Text style={getSettingsStyle().listTitle}>
                    {textSettings[0]}
                </Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={getSettingsStyle().listOption}
                    onPress={() => navigation.navigate('About' as never)}
                >
                    <View
                        style={[
                            {
                                backgroundColor: setColor(WpbColor.Info),
                            },
                            getSettingsStyle().listOptionIcon,
                        ]}
                    >
                        <FontAwesomeIcon
                            icon={faCircleQuestion}
                            color={setColor(WpbColor.Neutral[100])}
                            size={24}
                        />
                    </View>

                    <Text style={getSettingsStyle().listOptionText}>
                        {textSettings[1]}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={getSettingsStyle().listOption}
                    onPress={() => navigation.navigate('Language' as never)}
                >
                    <View
                        style={[
                            {
                                backgroundColor: setColor(WpbColor.Error),
                            },
                            getSettingsStyle().listOptionIcon,
                        ]}
                    >
                        <FontAwesomeIcon
                            icon={faLanguage}
                            color={setColor(WpbColor.Neutral[100])}
                            size={24}
                        />
                    </View>

                    <Text style={getSettingsStyle().listOptionText}>
                        {textSettings[2]}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
