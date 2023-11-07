import { TouchableOpacity, View } from 'react-native'
import Brazil from '../../assets/icons/brazil.svg'
import Eua from '../../assets/icons/eua.svg'
import { useEffect, useState } from 'react'
import storeDeviceLanguage from '../../services/localization'
import StorageService from '../../services/storage'
import { Back } from '../../components/back'
import getSettingsStyle from './styles'

export function Language() {
    const [currentLanguage, setCurrentLanguage] = useState('')

    useEffect(() => {
        const fetchLanguage = async () => {
            const hasManualLanguage = await StorageService.retrieveData(
                'manualLanguage'
            )

            setLanguage(hasManualLanguage)
        }

        fetchLanguage()
    }, [])

    useEffect(() => {
        const fetchLanguage = async () => {
            await storeDeviceLanguage(currentLanguage)
        }

        fetchLanguage()
    }, [currentLanguage])

    function setLanguage(language: string) {
        setCurrentLanguage(language)
    }

    return (
        <>
            <Back />
            <View style={getSettingsStyle().container}>
                <TouchableOpacity
                    style={{
                        opacity: currentLanguage === 'pt' ? 1 : 0.4,
                    }}
                    onPress={() => setLanguage('pt')}
                >
                    <Brazil width="100" height="71" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        opacity: currentLanguage === 'en' ? 1 : 0.4,
                    }}
                    onPress={() => setLanguage('en')}
                >
                    <Eua width="100" height="71" />
                </TouchableOpacity>
            </View>
        </>
    )
}
