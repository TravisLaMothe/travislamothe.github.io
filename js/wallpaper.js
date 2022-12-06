function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var background = getRandomIntInclusive(1, 6);
document.body.style.background = 'url(./images/wallpapers/wallpaper' + background + '.jpg)';
document.body.style.backgroundSize = 'cover';

var colors = ['#ADBDDD','#191E48','#5C5C4C','#685E74','#505778','#322529'];
var opacity = ['0.9','0.9','0.9','0.9','0.7','0.7'];

//tree ADBDDD
// blue city 505778
// kitty 322529
// ship stars 191E48
//tropical 685E74

document.documentElement.style.setProperty("--listcolor", colors[background - 1]);
document.documentElement.style.setProperty("--listopacity", opacity[background - 1]);