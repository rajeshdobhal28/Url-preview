export const getUrlFromString = (string = '') => {
    return string.match(/\bhttp?:\/\/\S+/gi) || string.match(/\bhttps?:\/\/\S+/gi);
}