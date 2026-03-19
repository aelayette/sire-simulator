const API_BASE = import.meta.env.VITE_API_BASE?.replace(/\/$/, "") || "http://localhost:8080/api";

function getAuthToken() {
    return localStorage.getItem("authToken");
}

/** Asynchronous function to make API requests. */
async function request(endpoint, options = {}) {
    const token = getAuthToken();

    // Merges default headers with any provided in options, and adds Authorization header
    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    // Makes the API request with credentials included for session management
    const response = await fetch(`${API_BASE}${endpoint}`, {
        credentials: "include",  // Includes cookies in requests for session management
        ...options,
        headers,
    });

    const text = await response.text();           // Reads response as text to handle both JSON and non-JSON responses
    const data = text ? JSON.parse(text) : null;  // Parses response text as JSON if it exists
    
    if (!response.ok) {
        const errorMessage = data?.message || `${response.status} ${response.statusText}` || "Unknown API error";
        const error = new Error(errorMessage);  // Creates an Error object with the message from the response
        error.status = response.status;         // Attaches the HTTP status code to the error object
        error.data = data;                      // Attaches the response data to the Error object for additional context
        throw error;                            // Throws the error to be caught by the caller
    }

    return data;  // Returns the parsed response data to the caller
}

/** API client for making HTTP requests. */
export default {
    
    /** Method for making GET requests. */
    get(endpoint) {
        return request(endpoint, { method : "GET" });
    },
    /** Method for making POST requests. */
    post(endpoint, body) {
        return request(endpoint, { method : "POST", body: JSON.stringify(body) });
    },
    /** Method for making PUT requests. */
    put(endpoint, body) {
        return request(endpoint, { method : "PUT", body: JSON.stringify(body) });
    },
    /** Method for making DELETE requests. */
    delete(endpoint) {
        return request(endpoint, { method : "DELETE" });
    },
};