import { StyleSheet } from "react-native";
import { setColor, theme } from "../../global/styles/theme";

export const {
    Pacifico400Regular,
    Raleway500Medium,
    Raleway600SemiBold,
    Raleway700Bold,
} = theme.fonts

export default function getListPlayerStyle() {
    const { WpbColor } = theme.colors

    return StyleSheet.create({
        spaceBetween: {
            flex: 1,
            justifyContent: 'space-between',
        },
        buttonLooser: {
            fontFamily: Raleway700Bold,
            backgroundColor: setColor(WpbColor.Cta),
            borderRadius: 24,
        },
    })
}