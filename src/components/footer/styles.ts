import { StyleSheet } from "react-native";
import { setColor, theme } from "../../global/styles/theme";

export default function getWinningPlayerStyle() {
    const {
        Raleway300Light,
        Raleway700Bold
    } = theme.fonts

    const { WpbColor } = theme.colors

    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            textAlign: 'center',
            fontFamily: Raleway300Light,
            color: '#fff',
        }, textDev: {
            fontFamily: Raleway700Bold, color: setColor(WpbColor.Primary.Regular)
        }
    })
}