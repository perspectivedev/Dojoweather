var cookieCard = document.querySelector('#cookie-cards');

function removeCookies(element){
    console.log('Cookies accepted:', element);
    if(element.innerText === 'I Accept'){
        cookieCard.remove();
    }
}

const FARENHEIT = 1;
const CELSIUS = 0;

let tempStyle = FARENHEIT;






function toCelsius(f) {
    return (f - 32) / 1.8;
}

function toFarenheit(c) {
    return (c * 1.8) + 32;
}

function changeTemp(tempSelector){
    const style = tempSelector.selectedIndex;

    let convert = null;
    if (tempStyle === CELSIUS) {
        convert = toFarenheit;
    } else if (tempStyle === FARENHEIT) {
        convert = toCelsius;
    }

    const temps = document.querySelectorAll('.temp');
    for (const tempItem of temps) {
        tempItem.innerHTML = Math.round(convert(+tempItem.innerHTML), 0);
    }
    tempStyle = style;
}