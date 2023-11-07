import { TouchableOpacity } from 'react-native'
import getBackStyle from './styles'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import { setColor, theme } from '../../global/styles/theme'

export function Back() {
    const { WpbColor } = theme.colors
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            style={getBackStyle().buttonBack}
        >
            <FontAwesomeIcon
                icon={faArrowLeft}
                color={setColor(WpbColor.Primary.Regular, 0.6)}
                size={24}
            />
        </TouchableOpacity>
    )
}
