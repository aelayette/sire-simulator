import apiClient from "./apiClient";

/** Logs in a user. */
export const login = async (email, password) => {
    return apiClient.post("/login", { email, password });
};

/** Signs up a new user. */
export const signup = async (email, password, name) => {
    return apiClient.post("/signup", { email, password, name });
};

/** Refreshes the access token using the refresh token. */
export const refreshToken = async (refreshToken) => {
    return apiClient.post("/refresh-token", { refreshToken });
};

/** Retrieves the current user profile. */
export const getProfile = async () => {
    return apiClient.get("/me");
};

/** Logs out the current user. */
export const logout = async () => {
    localStorage.removeItem("authToken");
    return { success: true };
};

/** Checks the health of the API. */
export const checkHealth = async () => {
    return apiClient.get("/health");
}