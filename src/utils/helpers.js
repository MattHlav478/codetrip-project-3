export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validatePhone(phone) {
    var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return re.test(phone);
}

export function validateExists(variable) {
    if (variable) {
        return true;
    } else {
        return false;
    }
}
