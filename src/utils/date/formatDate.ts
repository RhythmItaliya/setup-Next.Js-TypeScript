// src/utils/formatDate.ts

/**
 * Formats a Date object to a string in the specified format.
 * @param {Date} date - The date to format. Defaults to the current date.
 * @param {string} format - The format of the output date string (e.g., "YYYY-MM-DD HH:mm:ss").
 * @returns {string} The formatted date string.
 */
export const formatDate = (date: Date = new Date(), format: string = 'YYYY-MM-DD HH:mm:ss'): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', String(year))
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
};
