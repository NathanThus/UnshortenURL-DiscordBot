async function UnshortenURL(URL, token) {
    const url = "https://unshorten.me/api/v2/unshorten?url=" + URL;
    const headers = {
        Authorization: "Token " + token
    };

    try {
        const response = await fetch(url, { headers });
        const data = await response.json();

        if (!data || typeof data.unshortened_url === 'undefined') {
            return "⚠️ Error: No unshortened URL found in API response.";
        }

        if (data.success) {
            return data.unshortened_url;
        } else {
            return "⚠️ Error: API reported failure unshortening the URL.";
        }
    } catch (error) {
        console.error("UnshortenURL error:", error);
        return "⚠️ Error: Unable to connect to the unshorten.me API.";
    }
}

export default {
    UnshortenURL,
};