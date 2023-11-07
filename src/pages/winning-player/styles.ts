import { StyleSheet } from "react-native";
import { setColor, theme } from "../../global/styles/theme";

export default function getWinningPlayerStyle() {
    const {
        Raleway500Medium,
        Raleway600SemiBold,
    } = theme.fonts
    const { WpbColor } = theme.colors

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        title: {
            fontFamily: Raleway500Medium,
            letterSpacing: 4,
            width: '100%',
            fontSize: 24,
            color: setColor(WpbColor.Neutral[99]),
        },
        subtitle: {
            fontFamily: Raleway600SemiBold,
            letterSpacing: 4,
            width: '100%',
            fontSize: 24,
            color: setColor(WpbColor.Neutral[100]),
        },
    })
}