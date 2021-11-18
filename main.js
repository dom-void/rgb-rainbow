const TEXT = 'RGB<br>rainbow'

const minColor = 0;
const maxColor = 255;
//TODO: podstaw consty za wartości '0' i '255'
const blackColor = 'rgb(20, 20, 20)';

const text = jQuery('#colors');
const mainBackgnd = jQuery('main');

let modified = text;

const delay = (msec) => {
    return new Promise(resolve => setTimeout(resolve, msec));
};

const rainbowText = (step) => {
    mainBackgnd.css('background-color', blackColor);
    text.empty();
    text.css('color', rainbow(step * 5));
    text.append(TEXT);
};

const rainbowBackgnd = (step) => {
    text.empty();
    text.css('color', blackColor);
    text.append(TEXT);
    mainBackgnd.css('background-color', rainbow(step * 5));
};

let isOnText = true;

const handleRainbowChange = () => {
    isOnText = !isOnText;
};

mainBackgnd.click(handleRainbowChange);

const rainbow = (step) => {
    let r, g, b;
    if (step <= 255) {
        r = 255;
        g = step;
        b = 0;
    } else if (step > 255 && step <= 2 * 255) {
        r = 2 * 255 - step;
        g = 255;
        b = 0;
    } else if (step > 2 * 255 && step <= 3 * 255) {
        r = 0;
        g = 255;
        b = step - 2 * 255;
    } else if (step > 3 * 255 && step <= 4 * 255) {
        r = 0;
        g = 4 * 255 - step;
        b = 255;
    } else if (step > 4 * 255 && step <= 5 * 255) {
        r = step - 4 * 255;
        g = 0;
        b = 255;
    } else {
        r = 255;
        g = 0;
        b = 6 * 255 - step;
    };
    return `rgb(${r}, ${g}, ${b})`;
};

const loop = async () => {
    for (let i = 0; i <= 6 * (255 / 5); i++) {
        if (isOnText) {
            rainbowText(i)
        } else {
            rainbowBackgnd(i)
        }
        await delay(10);
    }
    loop();
};

loop();