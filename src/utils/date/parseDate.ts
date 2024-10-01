// src/utils/parseDate.ts

/**
 * Parses a date string in multiple formats and returns a Date object.
 * Supported formats: 
 * - YYYY-MM-DD HH:mm:ss
 * - YYYY-MM-DD
 * - HH:mm:ss
 * @param {string} dateString - The date string to parse.
 * @returns {Date | null} The parsed Date object, or null if the string is invalid.
 */
export const parseDate = (dateString: string): Date | null => {
    const formats = [
        /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, // YYYY-MM-DD HH:mm:ss
        /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
        /^\d{2}:\d{2}:\d{2}$/, // HH:mm:ss
    ];

    const matchedFormat = formats.find(format => format.test(dateString));

    if (!matchedFormat) {
        console.error('Invalid date format.');
        return null;
    }

    if (matchedFormat === formats[0]) {
        const [datePart, timePart] = dateString.split(' ');
        const [year, month, day] = datePart.split('-').map(Number);
        const [hours, minutes, seconds] = timePart.split(':').map(Number);
        return new Date(year, month - 1, day, hours, minutes, seconds);
    }

    if (matchedFormat === formats[1]) {
        const [year, month, day] = dateString.split('-').map(Number);
        return new Date(year, month - 1, day);
    }

    if (matchedFormat === formats[2]) {
        const [hours, minutes, seconds] = dateString.split(':').map(Number);
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);
    }

    return null;
};
