import { LocalStorageKeys } from '../../../config/local-storage.config';

const setItem = (key: LocalStorageKeys, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: LocalStorageKeys) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
const clearItem = (key: LocalStorageKeys) => {
  window.localStorage.removeItem(key);
};

const clearAll = () => {
  window.localStorage.clear();
}

export const LocalStorageUtils = {
  setItem,
  getItem,
  clearItem,
  clearAll
};
