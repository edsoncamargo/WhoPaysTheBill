import { StyleSheet } from "react-native";
import { setColor, theme } from "../../global/styles/theme";


export default function getAddPlayerStyle() {
    const {
        Raleway500Medium,
        Raleway700Bold
    } = theme.fonts
    const { WpbColor } = theme.colors

    return StyleSheet.create({
        input: {
            fontFamily: Raleway500Medium,
            color: setColor(WpbColor.Neutral[100]),
        },
        error: {
            fontFamily: Raleway500Medium,
            color: setColor(WpbColor.Error),
            marginHorizontal: 0,
        },
        margin: {
            marginTop: 24,
            marginBottom: 24
        },
        button: {
            fontFamily: Raleway700Bold,
            backgroundColor: setColor(WpbColor.Primary.Regular),
            borderRadius: 24,
        },
    })
}