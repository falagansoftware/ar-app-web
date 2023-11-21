import { LocalStorageKeys } from "../../../config/local-storage.config";
import { LocalStorageUtils } from "../utils/local-storage.utils";
import { httpClient } from "./http.client";

const refreshAccessToken = async () => {
    const apiBaseUrl = import.meta.env.VITE_AR_API_BASE_URL;
    const refreshToken = LocalStorageUtils.getItem(LocalStorageKeys.REFRESH_TOKEN);
    const response = await httpClient.get(`${apiBaseUrl}/auth/refresh`, {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
    });
    if (response.status === 200) {
        const { accessToken } = response.data;
        LocalStorageUtils.setItem(LocalStorageKeys.ACCESS_TOKEN, accessToken);
        return accessToken;
    }
    return null;
}

// Request interceptor for API calls
httpClient.interceptors.request.use(
    async (config: any ) => {
        if(config.url.includes('sign-in') || config.url.includes('sign-up') || config.url.includes('auth/refresh')) return config;
        const accessToken = LocalStorageUtils.getItem(LocalStorageKeys.ACCESS_TOKEN);
        if(accessToken){
            config.headers = {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            return config; 
        }
        return config;
    },
    (error: any) => {
        Promise.reject(error)
    });
// Response interceptor for API calls
httpClient.interceptors.response.use((response: any) => {
    return response
}, async function (error: { config: any; response: { status: number; }; }) {
    const originalRequest = error.config;
    if(error.response.status === 401 && originalRequest.url.includes('auth/refresh')) {
        LocalStorageUtils.clearAll();
        return Promise.reject(error);
    }
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const accessToken = await refreshAccessToken();
        if(!accessToken) return Promise.reject(error);
        httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        return httpClient(originalRequest);
    }
    return Promise.reject(error);
});
