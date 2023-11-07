import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageService = {
    storeData: async (key: string, value: string | number | {}) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error storing data:', error);
        }
    },

    retrieveData: async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);

            if (value !== null) {
                return JSON.parse(value);
            }

            return null;
        } catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    },

    removeData: async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing data:', error);
        }
    },

    clearAllData: async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error('Error clearing data:', error);
        }
    },
};

export default StorageService;