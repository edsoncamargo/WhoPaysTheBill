import { StyleSheet } from "react-native";
import { setColor, theme } from "../../global/styles/theme";

export default function getLoadingStyle() {
    const {
        WpbColor
    } = theme.colors;

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loadingContainer: {
            width: 120,
            height: 16,
            backgroundColor: setColor(WpbColor.Primary.Medium),
            borderRadius: 999,
            overflow: 'hidden',
            position: 'relative',
        },
        loadingAnimated: {
            flex: 1,
            width: '50%',
            height: 16,
            backgroundColor: setColor(WpbColor.Primary.Regular),
            position: 'absolute',
            marginBottom: 24,
        },
        title: {
            width: '100%',
            fontSize: 32,
            letterSpacing: 3,
            textAlign: 'center',
            color: '#fff',
            marginBottom: 24,
        },
        titleHighlighted: {
            fontSize: 32,
            letterSpacing: 3,
            color: setColor(WpbColor.Primary.Regular),
        }
    })
}