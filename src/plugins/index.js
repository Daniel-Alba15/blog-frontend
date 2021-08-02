const validator = require("validator");

export const func = {
    unescape: (content) => {
        return validator.unescape(content);
    },
    formatDate: (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("es-CO");
    }
}