import { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { ListItem, Text } from 'react-native-elements'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import getListPlayersStyle from './styles'

import getText, { TextsI18nType } from '../../services/language'
import { useFocusEffect } from '@react-navigation/native'

type props = {
    players: string[]
    deletePlayerByIndex: (index: number) => void
}

export default function ListPlayers({ players, deletePlayerByIndex }: props) {
    const [textListItemMessage, setTextListItemMessage] = useState<string>('')
    const [textListItemTitle, setTextListItemTitle] = useState<string>('')

    useFocusEffect(() => {
        const getTexts = async () => {
            setTextListItemMessage(await getText(TextsI18nType.ListItemMessage))
            setTextListItemTitle(await getText(TextsI18nType.ListItemTitle))
        }

        getTexts()
    })

    function renderPlayers() {
        return players.map((player, index) => (
            <ListItem
                key={`${player}-${index}`}
                bottomDivider
                containerStyle={getListPlayersStyle().listItemContainer}
            >
                <ListItem.Content style={getListPlayersStyle().listItemContent}>
                    <ListItem.Title style={getListPlayersStyle().listItemText}>
                        {player}
                    </ListItem.Title>

                    <TouchableOpacity
                        onLongPress={() => deletePlayerByIndex(index)}
                        style={[getListPlayersStyle().buttonDelete]}
                    >
                        <Text>
                            <FontAwesomeIcon
                                icon={faTrash}
                                color="#FD727C"
                                size={18}
                            />
                        </Text>
                    </TouchableOpacity>
                </ListItem.Content>
            </ListItem>
        ))
    }

    return (
        <ScrollView style={{ maxHeight: 200 }}>
            <View style={{ marginBottom: 24 }}>
                {players && players.length > 0 ? (
                    <>
                        <Text style={getListPlayersStyle().listItemTitle}>
                            {textListItemTitle}
                        </Text>
                        {renderPlayers()}
                    </>
                ) : (
                    <Text style={getListPlayersStyle().listItemMessage}>
                        {textListItemMessage}
                    </Text>
                )}
            </View>
        </ScrollView>
    )
}
