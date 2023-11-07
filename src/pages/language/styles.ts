import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export default function getSettingsStyle() {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 24,
        },
    })
}