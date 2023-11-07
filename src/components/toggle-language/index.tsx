import { View } from 'react-native'

import Eua from '../../assets/icons/eua.svg'
import Brazil from '../../assets/icons/brazil.svg'

export function ToggleLanguage() {
    return (
        <View>
            <Eua width={24} height={17} />
            <Brazil width={24} height={17} />
        </View>
    )
}
