function rgbToHexColor(red, green, blue) {

    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {

        return undefined; // Red value is invalid

    }

    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    } if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    } return "#" + ("0" + red.toString(16).toUpperCase()).slice(-2) + ("0" + green.toString(16).toUpperCase()).slice(-2) + ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
    /*Take an array as an argument

· Return false for any input that isn’t of the correct type

· Return true if the input array is symmetric

· Otherwise, return false */

console.log(rgbToHexColor(22, 33, 44))