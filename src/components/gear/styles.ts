import { StyleSheet } from "react-native";

export default function getGearStyle() {
    return StyleSheet.create({
        container: {
            width: '100%',
            maxHeight: 24,
            flex: 1,
            alignItems: 'flex-end',
            paddingHorizontal: 24,
        },
    })
}