import AsyncStorage from '@react-native-community/async-storage';
import {useCallback, useState} from 'react';

function useLocalStorage(key: string, initialValue: any, raw?: boolean) {
  // async storage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = AsyncStorage.getItem(key);
      return item ? (raw ? item : JSON.parse(item)) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = useCallback(
    value => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        AsyncStorage.setItem(
          key,
          raw ? valueToStore : JSON.stringify(valueToStore),
        );
      } catch (error) {
        console.log(error);
      }
    },
    [key, raw, storedValue],
  );
  return [storedValue, setValue];
}
