import { StyleSheet } from "react-native";
import { setColor, theme } from "../../global/styles/theme";

export default function getSettingsStyle() {
    const {
        Raleway600SemiBold,
        Raleway700Bold,
    } = theme.fonts
    const { WpbColor } = theme.colors

    return StyleSheet.create({
        container: {
            flex: 1
        },
        listContainer: {
            width: '100%', marginTop: 24
        },
        listTitle: {
            fontFamily: Raleway700Bold,
            fontSize: 32,
            textAlign: 'center',
            color: setColor(WpbColor.Neutral[100]),
            marginTop: 24,
            marginBottom: 124,
        },
        listOption: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 24,
            paddingVertical: 16,
            marginBottom: 24,
            backgroundColor: setColor(WpbColor.Primary.Regular, 0.6),
            borderRadius: 999,
        },
        listOptionIcon: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 6,
            borderRadius: 12,
        },
        listOptionText: {
            fontFamily: Raleway600SemiBold,
            fontSize: 24,
            color: setColor(WpbColor.Neutral[100]),
            marginLeft: 16,
        }
    })
}