import { StyleSheet } from "react-native";

import { setColor, theme } from "../../global/styles/theme";

export default function getCardWinnerStyle() {
    const { Raleway700Bold } = theme.fonts
    const { WpbColor } = theme.colors

    return StyleSheet.create({
        container: {
            borderRadius: 16,
            padding: 24,
            position: 'relative',
        },
        iconContainer: {
            width: '100%',
            fontSize: 124,
            fontWeight: 'bold',
            textAlign: 'center',
            color: setColor(WpbColor.Neutral[100]),
        },
        message: {
            width: '100%',
            fontFamily: Raleway700Bold,
            fontSize: 32,
            textAlign: 'center',
            color: setColor(WpbColor.Neutral[100]),
            marginBottom: 24,
        },
        circleButton: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 64,
            height: 64,
            borderRadius: 999,
            backgroundColor: setColor(WpbColor.Primary.Regular),
            position: 'absolute',
            bottom: -32,
            borderWidth: 4,
            borderColor: '#211F33',
            left: '50%',
        },
        circleButtonIcon: {
            position: 'absolute',
            top: -15,
            left: 4,
            fontSize: 48,
            color: setColor(WpbColor.Neutral[100]),
        }
    })
}