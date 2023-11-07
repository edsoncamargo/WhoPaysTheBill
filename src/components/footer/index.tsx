import { Text } from 'react-native-elements'
import { A } from '@expo/html-elements'

import getWinningPlayerStyle from './styles'

export function Footer() {
    return (
        <Text style={getWinningPlayerStyle().container}>
            <A href="https://edsoncamargo.dev/">
                edsoncamargo
                <Text style={getWinningPlayerStyle().textDev}>.dev</Text>
            </A>
        </Text>
    )
}
