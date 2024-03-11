import {expect} from "chai"

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

/*· Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]

· Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')

· Return undefined if any of the input parameters are of an invalid type or not in the expected rang */

describe("rgbToHexColor", function () {
    it("returns hex color for valid RGB values", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
        expect(rgbToHexColor(255, 0, 0)).to.equal("#FF0000");
        expect(rgbToHexColor(0, 255, 0)).to.equal("#00FF00");
        expect(rgbToHexColor(0, 0, 255)).to.equal("#0000FF");
    });

    it("returns undefined for non-integer input", function () {
        expect(rgbToHexColor("255", 255, 255)).to.be.undefined;
        expect(rgbToHexColor(255, "255", 255)).to.be.undefined;
        expect(rgbToHexColor(255, 255, "255")).to.be.undefined;
        expect(rgbToHexColor(255.5, 255, 255)).to.be.undefined;
        expect(rgbToHexColor(255, 255.5, 255)).to.be.undefined;
        expect(rgbToHexColor(255, 255, 255.5)).to.be.undefined;
    });

    it("returns undefined for out-of-range values", function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

   

    it("returns undefined for non-numeric input", function () {
        expect(rgbToHexColor("red", "green", "blue")).to.be.undefined;
    });
});