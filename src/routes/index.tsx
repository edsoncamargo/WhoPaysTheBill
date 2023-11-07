import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListPlayer from '../pages/list-player'
import WinningPlayer from '../pages/winning-player'

import { RootStackParamList } from '../types/types'
import { Settings } from '../pages/settings'
import { Language } from '../pages/language'
import { About } from '../pages/about'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Routes() {
    return (
        <Stack.Navigator
            initialRouteName="ListPlayer"
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Stack.Screen name="ListPlayer" component={ListPlayer} />
            <Stack.Screen name="WinningPlayer" component={WinningPlayer} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Language" component={Language} />
        </Stack.Navigator>
    )
}
