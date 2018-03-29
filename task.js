
// Logic
let arrow_0_7 = document.getElementById('arrow_0_7');
let arrow_7_11 = document.getElementById('arrow_7_11');
let arrow_0_8 = document.getElementById('arrow_0_8');
let arrow_8_12 = document.getElementById('arrow_8_12');
let arrow_0_9 = document.getElementById('arrow_0_9');
let arrow_9_13 = document.getElementById('arrow_9_13');
let arrow_9_11 = document.getElementById('arrow_9_11');
let arrow_0_6 = document.getElementById('arrow_0_6');
let arrow_6_11 = document.getElementById('arrow_6_11');
let arrow_7_12 = document.getElementById('arrow_7_12');
let arrow_8_13 = document.getElementById('arrow_8_13');
let arrow_9_14 = document.getElementById('arrow_9_14');
let arrow_9_12 = document.getElementById('arrow_9_12');
let arrow_8_11 = document.getElementById('arrow_8_11');
let arrow_8_14 = document.getElementById('arrow_8_14');
let arrow_7_13 = document.getElementById('arrow_7_13');
let arrow_7_14 = document.getElementById('arrow_7_14');
let arrow_6_12 = document.getElementById('arrow_6_12');
let arrow_6_13 = document.getElementById('arrow_6_13');
let arrow_6_14 = document.getElementById('arrow_6_14');


let number_2 = document.getElementById('number_2');
let button_7 = document.getElementById('button_7');
let button_6 = document.getElementById('button_6');
let button_8 = document.getElementById('button_8');
let button_12 = document.getElementById('button_12');
let button_9 = document.getElementById('button_9');
let button_14 = document.getElementById('button_14');
let button_13 = document.getElementById('button_13');
let number_1 = document.getElementById('number_1');
let input_replace_7 = document.getElementById('input_replace_7');
let span_1 = document.getElementById('span_1');

let button_11 = document.getElementById('button_11');
let input_replace_11 = document.getElementById('input_replace_11');
let span_2 = document.getElementById('span_2');
let span_3 = document.getElementById('span_3');
let input_number_1 = document.querySelector('.input_number_1');
let input_number_2 = document.querySelector('.input_number_2');

let number_main = document.getElementById('number_main');
let number_main_3 = document.getElementById('number_main_3');
let top_number_3 = document.getElementById('number_main_3').innerHTML;

// Step 1

play = function () {
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    number_1.focus();
    arrow_0_7.style.display = "inline";

    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_7.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_7_11.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_7.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_11.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_11.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_2()}, 2000);

        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
play();
// Step 2

play_2 = function(){
    span_1.innerHTML = 8;
    input_replace_7.innerHTML = 8;
    top_number_3 = 12;
    span_2.innerHTML = 4;
    number_main_3.innerHTML = "12";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 4;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_11.style = "";
    button_7.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_0_7.style.display = "none";
    arrow_7_11.style.display = "none";
    arrow_0_8.style.display = "inline";
    input_number_1.style.flex = "0 1 35%";
    input_number_2.style.flex = "0 1 17%";

    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_8.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_8_12.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_8.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_12.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_12.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_3()}, 2000);
            number_main.focus();
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 2

// Step 3
play_3 = function(){

    span_1.innerHTML = 9;
    input_replace_7.innerHTML = 9;
    top_number_3 = 13;
    // span_2.innerHTML = 2;
    number_main_3.innerHTML = "13";
    number_1.style.display = "inline";
    number_1.value = "";
    // input_replace_11.innerHTML = 4;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_12.style = "";
    button_8.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_0_8.style.display = "none";
    arrow_0_9.style.display = "inline";
    arrow_8_12.style.display = "none";
    input_number_1.style.flex = "0 1 41%";
    input_number_2.style.flex = "0 1 15%";

    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_9.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_9_13.style.display = "inline";

        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_9.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_13.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_13.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_4()}, 2000);

        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 3

// Step 4
play_4 = function(){

    span_1.innerHTML = 9;
    input_replace_7.innerHTML = 9;
    top_number_3 = 11;
    span_2.innerHTML = 2;
    number_main_3.innerHTML = "11";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 2;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_13.style = "";
    button_9.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_9_13.style.display = "none";
    arrow_0_9.style.display = "inline";
    input_number_1.style.flex = "0 1 41%";
    input_number_2.style.flex = "0 1 6%";



    console.log(top_number_1);

    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_9.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_9_11.style.display = "inline";

        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_9.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_11.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_11.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_5()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 4
// Step 5
play_5 = function(){

    span_1.innerHTML = 6;
    input_replace_7.innerHTML = 6;
    top_number_3 = 11;
    span_2.innerHTML = 5;
    number_main_3.innerHTML = "11";
    number_1.style.display = "inline";
    number_1.value = "";
    number_main.value = "";
    input_replace_11.innerHTML = 5;
    number_2.style.display = "none";
    number_2.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_11.style = "";
    button_9.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_9_11.style.display = "none";
    arrow_0_9.style.display = "none";
    arrow_0_6.style.display = "inline";
    input_number_1.style.flex = "0 1 26%";
    input_number_2.style.flex = "0 1 23%";

    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_6.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_6_11.style.display = "inline";

        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_6.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_11.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_11.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_6()}, 2000);

        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 5

// Step 6
play_6 = function(){

    span_1.innerHTML = 7;
    input_replace_7.innerHTML = 7;
    top_number_3 = 12;
    span_2.innerHTML = 5;
    number_main_3.innerHTML = "12";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 5;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_11.style = "";
    button_6.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_6_11.style.display = "none";
    arrow_0_6.style.display = "none";
    arrow_0_7.style.display = "inline";
    input_number_1.style.flex = "0 1 31%";
    input_number_2.style.flex = "0 1 22%";

    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_7.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_7_12.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_7.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_12.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_12.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_7()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 6

// Step 7
play_7 = function(){

    span_1.innerHTML = 8;
    input_replace_7.innerHTML = 8;
    top_number_3 = 13;
    span_2.innerHTML = 5;
    number_main_3.innerHTML = "13";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 5;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_12.style = "";
    button_7.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_7_12.style.display = "none";
    arrow_0_7.style.display = "none";
    arrow_0_8.style.display = "inline";
    input_number_1.style.flex = "0 1 36%";
    input_number_2.style.flex = "0 1 21%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_8.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_8_13.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_8.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_13.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_13.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_8()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 7

// Step 8
play_8 = function(){

    span_1.innerHTML = 9;
    input_replace_7.innerHTML = 9;
    top_number_3 = 14;
    span_2.innerHTML = 5;
    number_main_3.innerHTML = "14";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 5;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_13.style = "";
    button_8.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_8_13.style.display = "none";
    arrow_0_8.style.display = "none";
    arrow_0_9.style.display = "inline";
    input_number_1.style.flex = "0 1 41%";
    input_number_2.style.flex = "0 1 20%";

    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_9.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_9_14.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_9.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_14.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_14.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_9()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 8

// Step 9
play_9 = function(){

    span_1.innerHTML = 9;
    input_replace_7.innerHTML = 9;
    top_number_3 = 12;
    span_2.innerHTML = 3;
    number_main_3.innerHTML = "12";
    number_1.style.display = "inline";
    number_1.value = "";
    number_main.value = "";
    input_replace_11.innerHTML = 3;
    number_2.style.display = "none";
    number_2.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_14.style = "";
    button_9.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_0_9.style.display = "inline";
    arrow_9_14.style.display = "none";
    input_number_1.style.flex = "0 1 41%";
    input_number_2.style.flex = "0 1 10%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_9.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_9_12.style.display = "inline";

        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_9.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_12.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_12.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_10()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 9

// Step 10
play_10 = function(){

    span_1.innerHTML = 8;
    input_replace_7.innerHTML = 8;
    top_number_3 = 11;
    span_2.innerHTML = 3;
    number_main_3.innerHTML = "11";
    number_1.style.display = "inline";
    number_1.value = "";
    number_main.value = "";
    input_replace_11.innerHTML = 3;
    number_2.style.display = "none";
    number_2.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_9.style = "";
    button_12.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_9_12.style.display = "none";
    arrow_0_9.style.display = "none";
    arrow_0_8.style.display = "inline";
    input_number_1.style.flex = "0 1 35%";
    input_number_2.style.flex = "0 1 13%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_8.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_8_11.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_8.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_11.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_11.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_11()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 10

// Step 11
play_11 = function(){

    span_1.innerHTML = 8;
    input_replace_7.innerHTML = 8;
    top_number_3 = 14;
    span_2.innerHTML = 6;
    number_main_3.innerHTML = "14";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 6;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_11.style = "";
    button_8.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_8_11.style.display = "none";
    arrow_0_8.style.display = "inline";
    input_number_1.style.flex = "0 1 35%";
    input_number_2.style.flex = "0 1 27%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_8.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_8_14.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_8.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_14.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_14.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_12()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 11

// Step 12
play_12 = function(){

    span_1.innerHTML = 7;
    input_replace_7.innerHTML = 7;
    top_number_3 = 13;
    span_2.innerHTML = 6;
    number_main_3.innerHTML = "13";
    number_1.style.display = "inline";
    number_1.value = "";
    number_main.value = "";
    input_replace_11.innerHTML = 6;
    number_2.style.display = "none";
    number_2.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_14.style = "";
    button_8.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_8_14.style.display = "none";
    arrow_0_8.style.display = "none";
    arrow_0_7.style.display = "inline";
    input_number_1.style.flex = "0 1 31%";
    input_number_2.style.flex = "0 1 27%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_7.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_7_13.style.display = "inline";

        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_7.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_13.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_13.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_13()}, 2000);

        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 12

// Step 13
play_13 = function(){

    span_1.innerHTML = 7;
    input_replace_7.innerHTML = 7;
    top_number_3 = 14;
    span_2.innerHTML = 7;
    number_main_3.innerHTML = "14";
    number_1.style.display = "inline";
    number_1.value = "";
    number_main.value = "";
    input_replace_11.innerHTML = 7;
    number_2.style.display = "none";
    number_2.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_13.style = "";
    button_7.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_7_13.style.display = "none";
    arrow_0_7.style.display = "inline";
    input_number_1.style.flex = "0 1 31%";
    input_number_2.style.flex = "0 1 31%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_7.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_7_14.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_7.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_14.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_14.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_14()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 13

// Step 14
play_14 = function(){

    span_1.innerHTML = 6;
    input_replace_7.innerHTML = 6;
    top_number_3 = 12;
    span_2.innerHTML = 6;
    number_main_3.innerHTML = "12";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 6;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_14.style = "";
    button_7.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_0_7.style.display = "none";
    arrow_7_14.style.display = "none";
    arrow_0_6.style.display = "inline";
    input_number_1.style.flex = "0 1 26%";
    input_number_2.style.flex = "0 1 27%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_6.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_6_12.style.display = "inline";
        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_6.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_12.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_12.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_15()}, 2000);
        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 14

// Step 15
play_15 = function(){

    span_1.innerHTML = 6;
    input_replace_7.innerHTML = 6;
    top_number_3 = 13;
    span_2.innerHTML = 7;
    number_main_3.innerHTML = "13";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 7;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_12.style = "";
    button_6.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_6_12.style.display = "none";
    arrow_0_6.style.display = "inline";
    input_number_1.style.flex = "0 1 26%";
    input_number_2.style.flex = "0 1 32%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_6.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_6_13.style.display = "inline";

        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_6.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_13.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_13.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){play_16()}, 2000);

        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
// Step 15

// Step 16
play_16 = function(){

    span_1.innerHTML = 6;
    input_replace_7.innerHTML = 6;
    top_number_3 = 14;
    span_2.innerHTML = 8;
    number_main_3.innerHTML = "14";
    number_1.style.display = "inline";
    number_1.value = "";
    input_replace_11.innerHTML = 8;
    number_2.style.display = "none";
    number_2.value = "";
    number_main.value = "";
    let top_number_1 = document.getElementById('span_1').innerHTML;
    let top_number_2 = document.getElementById('span_2').innerHTML;
    input_replace_7.style = "display: none";
    input_replace_11.style = "display: none";
    button_13.style = "";
    button_6.style = "";
    number_main_3.style.display = "none";
    span_3.style.display = "inline";
    number_1.focus();
    arrow_6_13.style.display = "none";
    arrow_0_6.style.display = "inline";
    input_number_1.style.flex = "0 1 26%";
    input_number_2.style.flex = "0 1 37%";


    number_1.oninput = function () {
        if (parseInt(number_1.value) === parseInt(top_number_1)) {
            number_2.style = "display: inline";
            button_6.style = "background: dodgerblue";
            number_1.style = "display: none";
            input_replace_7.style = "display: flex";
            span_1.style = "background: ";
            number_2.focus();
            arrow_6_14.style.display = "inline";

        }
        else {
            span_1.style = "background: red";
            number_1.style = "color: red";
            button_6.style = "color: red; background: yellow";
        }
    };
    number_2.oninput = function () {
        if (parseInt(number_2.value) === parseInt(top_number_2)) {
            number_main.style = "display: inline";
            span_3.style = "display: none";
            button_14.style = "background: dodgerblue";
            number_2.style = "display: none";
            input_replace_11.style = "display: flex";
            span_2.style = "background: ";
            number_main.focus();
        }
        else {
            span_2.style = "background: red";
            number_2.style = "color: red; display: inline";
            button_14.style = "color: red; background: yellow";

        }
    };
    number_main.oninput = function () {
        if (parseInt(number_main.value) === parseInt(top_number_3)) {
            number_main.style.display = "none";
            number_main_3.style.display = "inline";
            setTimeout(function(){location.reload()}, 10000);

        }
        else {
            number_main.style.color = "red";
            number_main.style.display = "inline";
        }
    };
};
