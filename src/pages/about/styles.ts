import { StyleSheet } from "react-native";
import { setColor, theme } from "../../global/styles/theme";

export default function getAboutStyle() {
    const { WpbColor } = theme.colors

    return StyleSheet.create({
        content: {
            marginTop: 48,
        },
        title: {
            fontSize: 32,
            fontWeight: "bold",
            color: setColor(WpbColor.Neutral[100]),
            marginBottom: 16
        },
        paragraph: {
            fontSize: 16,
            color: setColor(WpbColor.Neutral[100]),
            marginBottom: 24
        },
    })
}