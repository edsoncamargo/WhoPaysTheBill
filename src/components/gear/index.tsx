import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity } from 'react-native'

import getGearStyle from './styles'

import { setColor, theme } from '../../global/styles/theme'

type props = {
    navigation: any
}

export function Gear({ navigation }: props) {
    const { WpbColor } = theme.colors

    return (
        <TouchableOpacity
            onPress={() => navigation.push('Settings')}
            style={getGearStyle().container}
            activeOpacity={0.7}
        >
            <FontAwesomeIcon
                icon={faGear}
                color={setColor(WpbColor.Primary.Regular, 0.6)}
                size={24}
            />
        </TouchableOpacity>
    )
}
