import { useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import { StatusBar as Status } from 'expo-status-bar'

import {
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
} from '@expo-google-fonts/raleway'
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico'

import Toast from 'react-native-toast-message'

import Routes from './src/routes'
import Loading from './src/components/loading'

import storeDeviceLanguage from './src/services/localization'

import getAppStyle from './src/global/styles/app'

export default function App() {
    let [fontsLoaded] = useFonts({
        Raleway_300Light,
        Raleway_400Regular,
        Raleway_500Medium,
        Raleway_600SemiBold,
        Raleway_700Bold,
        Pacifico_400Regular,
    })

    const statusBarHeight = StatusBar.currentHeight

    useEffect(() => {
        const fetchLanguage = async () => {
            await storeDeviceLanguage()
        }

        fetchLanguage()
    }, [])

    return (
        <View
            style={[
                getAppStyle().container,
                { paddingTop: statusBarHeight + 24 },
            ]}
        >
            {fontsLoaded ? (
                <>
                    <NavigationContainer>
                        <Routes />
                    </NavigationContainer>
                    <Status style="light" />
                    <Toast />
                </>
            ) : (
                <Loading />
            )}
        </View>
    )
}
