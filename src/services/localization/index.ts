import * as Localization from 'expo-localization'
import StorageService from '../storage'

export default async function storeDeviceLanguage(language?: string): Promise<string | number | {}> {
    if (language) {
        StorageService.storeData("manualLanguage", language);
        StorageService.storeData("language", language);
    } else {
        const hasManualLanguage = await StorageService.retrieveData(
            'manualLanguage'
        )

        await StorageService.storeData(
            'language',
            hasManualLanguage ? hasManualLanguage : (Localization.locale.includes('en')
                ? 'en'
                : Localization.locale.includes('pt')
                    ? 'pt'
                    : 'en')
        )
    }


    return await StorageService.retrieveData('language')
}
