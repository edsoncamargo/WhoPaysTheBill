
import StorageService from '../storage'

export enum TextsI18nType {
    AppName = "appName",
    PlaceholderNameToAdd = "placeholderNameToAdd",
    AddPlayer = "addPlayer",
    MinErrorMessage = "minErrorMessage",
    MaxErrorMessage = "maxErrorMessage",
    RequiredErrorMessage = "requiredErrorMessage",
    OnlyLethersErrorMessage = "onlyLethersErrorMessage",
    ListItemMessage = "listItemMessage",
    ListItemTitle = "listItemTitle",
    BtnGetTheLooser = "btnGetTheLooser",
    Hi = "hi",
    WinningMessage = "winningMessage",
    WinningMessages = "winningMessages",
    ToastAddedPlayer = "toastAddedPlayer",
    ToastRemovedPlayer = "toastRemovedPlayer",
    Settings = "settings",
    About = "about",
}

export default async function getText(key: string) {
    const language = await StorageService.retrieveData('language')
    const json = await require("../../i18n/i18n.json")[language]

    return json[key]
}
