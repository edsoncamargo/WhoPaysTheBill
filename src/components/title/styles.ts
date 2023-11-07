import { StyleSheet } from "react-native";

import { setColor, theme } from "../../global/styles/theme";

export default function getTitleStyle() {
    const {
        Pacifico400Regular
    } = theme.fonts

    const {
        WpbColor
    } = theme.colors;

    return StyleSheet.create({
        container: {
            width: '100%',
            fontFamily: Pacifico400Regular,
            fontSize: 32,
            letterSpacing: 3,
            textAlign: 'center',
            color: setColor(WpbColor.Neutral[100]),
            marginBottom: 24,
        },
        highlight: {
            fontFamily: Pacifico400Regular,
            color: setColor(WpbColor.Primary.Regular),
        }
    })
}