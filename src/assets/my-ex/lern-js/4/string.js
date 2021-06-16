function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let lowerString = str.toLowerCase();
    return lowerString.includes('viagra') || lowerString.includes('xxx');
}

function truncate(str, maxlength) {
    if (length(str) > maxlength)
        return str.slice(0, maxlength - 1) + '…';
    return str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}