// Canvas
let canvas = document.getElementById('cnvs');
let ctx = canvas.getContext('2d');
let ctx2 = canvas.getContext('2d');

ctx.lineWidth = 2;

ctx.moveTo(340, 150);
ctx.quadraticCurveTo(190,-20, 40, 150);
// line color
ctx.strokeStyle = "black";
ctx.stroke();

ctx2.lineWidth = 2;

ctx2.moveTo(510, 150);
ctx2.quadraticCurveTo(430,20, 340, 150);
// line color
ctx2.strokeStyle = "black";
// Canvas

// Logic

let number_2 = document.getElementById('number_2');
let button_7 = document.getElementById('button_7');
let number_1 = document.getElementById('number_1');
let input_replace_7 = document.getElementById('input_replace_7');
number_1.oninput = function () {
    console.log(parseInt(number_1.value));
    if (parseInt(number_1.value) === 7){
        ctx2.stroke();
        number_2.style = "display: inline";
        button_7.style = "background: dodgerblue";
        number_1.style = "display: none";
        input_replace_7.style = "display: flex";
    }
    else {
        number_1.style = "color: red";
        button_7.style = "color: red; background: yellow";
    }
};
let number_main_2 = document.getElementById('number_main_2');
let number_main_1 = document.getElementById('number_main_1');
let button_11 = document.getElementById('button_11');
let input_replace_11 = document.getElementById('input_replace_11');
number_2.oninput = function () {
    console.log(parseInt(number_2.value));
    if (parseInt(number_2.value) === 4){
        number_main_2.style = "display: inline";
        number_main_1.style = "display: none";
        button_11.style = "background: dodgerblue";
        number_2.style = "display: none";
        input_replace_11.style = "display: flex";
    }
    else {
        number_2.style = "color: red; display: inline";
        button_11.style = "color: red; background: yellow";
    }
};

let number_main = document.getElementById('number_main');
let number_main_3 = document.getElementById('number_main_3');
number_main.oninput = function () {
    console.log(parseInt(number_main.value));
    if (parseInt(number_main.value) === 11){
        number_main.style = "display: none";
        number_main_3.style = "display: inline";
    }
    else {
        number_main.style = "color: red";
    }
};