import { StatusBar, View } from 'react-native'
import { Text } from 'react-native-elements'

import pkg from '../../../package.json'

export default function Version() {
    const version = `V${pkg.version}`

    return (
        <View style={{ position: 'absolute', top: 0, right: 24 }}>
            <Text style={{ color: '#FFF', opacity: 0.08 }}>{version}</Text>
        </View>
    )
}
