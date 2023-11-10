import { LocalStorageUtils } from './local-storage.utils';
import { LocalStorageKeys } from '../../../config/local-storage.config';

const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  let [resource, config] = [...args];
  const urlApi = 'http://localhost:3001/auto-repair-api';
  let newConfig = { ...config };
  const isApiRequest = resource.toString().includes(urlApi);
  const isSignInRequest = resource.toString().includes('sign-in');
  const isRefreshTokenRequest = resource.toString().includes('refresh');
  if (isApiRequest && !isSignInRequest && !isRefreshTokenRequest) {
    const accessToken = LocalStorageUtils.getItem(LocalStorageKeys.ACCESS_TOKEN);
    if (accessToken) {
      newConfig = newConfig
        ? {
            ...newConfig,
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        : { headers: { Authorization: `Bearer ${accessToken}` } };
      const response = await originalFetch(resource as Request, newConfig);
      if (!response.ok && response.status === 401) {
        const refreshToken = LocalStorageUtils.getItem(LocalStorageKeys.REFRESH_TOKEN);
        const newCredentials = await fetch('http://localhost:3001/auto-repair-api/auth/refresh', {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        if (!newCredentials.ok) {
          LocalStorageUtils.clearItem(LocalStorageKeys.ACCESS_TOKEN);
          LocalStorageUtils.clearItem(LocalStorageKeys.REFRESH_TOKEN);
          document.location.href = '';
          return Promise.reject({ error: 'error' });
        }
        const res = await newCredentials.json();
        LocalStorageUtils.setItem(LocalStorageKeys.ACCESS_TOKEN, res.accessToken);
        LocalStorageUtils.setItem(LocalStorageKeys.REFRESH_TOKEN, res.refreshToken);
        newConfig = { ...newConfig, headers: { Authorization: `Bearer ${res.accessToken}` } };
        return await originalFetch(resource as Request, newConfig);
      }
    } else {
      return Promise.reject({ error: 'error' });
    }
  }

  return await originalFetch(resource as Request, newConfig);
};
