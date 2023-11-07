import { StyleSheet } from "react-native";

import { setColor, theme } from "../../global/styles/theme";

export default function getListPlayersStyle() {
    const {
        Raleway500Medium,
        Raleway600SemiBold,
        Raleway700Bold
    } = theme.fonts

    const {
        WpbColor
    } = theme.colors;

    return StyleSheet.create({
        buttonDelete: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            maxWidth: 18
        },
        listItemTitle: {
            fontSize: 18,
            fontFamily: Raleway700Bold,
            color: setColor(WpbColor.Neutral[100]),
        },
        listItemContainer: {
            backgroundColor: 'transparent',
            borderColor: setColor(WpbColor.Primary.Regular),
            paddingHorizontal: 0,
        },
        listItemContent: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'transparent',
        },
        listItemText: {
            fontFamily: Raleway500Medium,
            fontSize: 18,
            color: setColor(WpbColor.Neutral[100]),
        },
        listItemMessage: {
            fontFamily: Raleway600SemiBold,
            fontSize: 18,
            color: setColor(WpbColor.Neutral[100]),
        }
    })
}