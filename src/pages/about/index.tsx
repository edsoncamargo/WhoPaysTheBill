import { ScrollView, View } from 'react-native'

import { Back } from '../../components/back'
import { Text } from 'react-native-elements'
import getAboutStyle from './styles'
import { Footer } from '../../components/footer'
import Version from '../../components/version'
import { useFocusEffect } from '@react-navigation/native'
import { useState } from 'react'
import getText, { TextsI18nType } from '../../services/language'

export function About() {
    const [textAbout, setTextAbout] = useState<string>('')

    useFocusEffect(() => {
        const getTexts = async () => {
            setTextAbout(await getText(TextsI18nType.About))
        }

        getTexts()
    })

    return (
        <>
            <Version />
            <Back />
            <ScrollView style={getAboutStyle().content}>
                <View>
                    <Text style={getAboutStyle().title}>{textAbout[0]}</Text>
                    <Text style={getAboutStyle().paragraph}>
                        {textAbout[1]}
                    </Text>
                </View>

                <View>
                    <Text style={getAboutStyle().title}>{textAbout[2]}</Text>
                    <Text style={getAboutStyle().paragraph}>
                        {textAbout[3]}
                    </Text>
                </View>

                <View>
                    <Text style={getAboutStyle().title}>{textAbout[4]}</Text>
                    <Text style={getAboutStyle().paragraph}>
                        {textAbout[5]}
                    </Text>
                </View>

                <View>
                    <Text style={getAboutStyle().title}>{textAbout[6]}</Text>
                    <Text style={getAboutStyle().paragraph}>
                        {textAbout[7]}
                    </Text>

                    <Text style={getAboutStyle().paragraph}>
                        {textAbout[8]}
                    </Text>

                    <Text style={getAboutStyle().paragraph}>
                        {textAbout[9]}
                    </Text>
                </View>

                <View>
                    <Text style={getAboutStyle().title}>{textAbout[10]}</Text>
                    <Text style={getAboutStyle().paragraph}>
                        {textAbout[11]}
                    </Text>

                    <Text style={getAboutStyle().paragraph}>
                        {textAbout[12]}
                    </Text>
                </View>

                <View style={{ marginTop: 24 }}>
                    <Footer />
                </View>
            </ScrollView>
        </>
    )
}
