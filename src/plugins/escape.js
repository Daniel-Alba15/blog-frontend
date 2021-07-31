export const func = {
    escape: (content) => {
        return content.replace(/&#x5C;n/g, "<br />")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&#x2F;/g, "/")
            .replace(/&#x27;/g, "'");
    },
    formatDate: (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("es-CO");
    }
}