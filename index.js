function updateTheme() {
    let background = document.getElementById("background").value.replace("0x", "#");
    let foreground = document.getElementById("foreground").value.replace("0x", "#");

    let normal_black = document.getElementById("normal-black").value.replace("0x", "#");
    let normal_red = document.getElementById("normal-red").value.replace("0x", "#");
    let normal_green = document.getElementById("normal-green").value.replace("0x", "#");
    let normal_yellow = document.getElementById("normal-yellow").value.replace("0x", "#");
    let normal_blue = document.getElementById("normal-blue").value.replace("0x", "#");
    let normal_magenta = document.getElementById("normal-magenta").value.replace("0x", "#");
    let normal_cyan = document.getElementById("normal-cyan").value.replace("0x", "#");
    let normal_white = document.getElementById("normal-white").value.replace("0x", "#");

    let bright_black = document.getElementById("bright-black").value.replace("0x", "#");
    let bright_red = document.getElementById("bright-red").value.replace("0x", "#");
    let bright_green = document.getElementById("bright-green").value.replace("0x", "#");
    let bright_yellow = document.getElementById("bright-yellow").value.replace("0x", "#");
    let bright_blue = document.getElementById("bright-blue").value.replace("0x", "#");
    let bright_magenta = document.getElementById("bright-magenta").value.replace("0x", "#");
    let bright_cyan = document.getElementById("bright-cyan").value.replace("0x", "#");
    let bright_white = document.getElementById("bright-white").value.replace("0x", "#");

    document.getElementById("viewport").style.background = background;

    var foregrounds = document.getElementsByClassName("foreground-color"); for (var i = 0; i < foregrounds.length; i++) { foregrounds[i].style.color = foreground;}

    var normal_blacks = document.getElementsByClassName("normal-black-color"); for (var i = 0; i < normal_blacks.length; i++) { normal_blacks[i].style.color = normal_black;}
    var normal_reds = document.getElementsByClassName("normal-red-color"); for (var i = 0; i < normal_reds.length; i++) { normal_reds[i].style.color = normal_red;}
    var normal_greens = document.getElementsByClassName("normal-green-color"); for (var i = 0; i < normal_greens.length; i++) { normal_greens[i].style.color = normal_green;}
    var normal_yellows = document.getElementsByClassName("normal-yellow-color"); for (var i = 0; i < normal_yellows.length; i++) { normal_yellows[i].style.color = normal_yellow;}
    var normal_blues = document.getElementsByClassName("normal-blue-color"); for (var i = 0; i < normal_blues.length; i++) { normal_blues[i].style.color = normal_blue;}
    var normal_magentas = document.getElementsByClassName("normal-magenta-color"); for (var i = 0; i < normal_magentas.length; i++) { normal_magentas[i].style.color = normal_magenta;}
    var normal_cyans = document.getElementsByClassName("normal-cyan-color"); for (var i = 0; i < normal_cyans.length; i++) { normal_cyans[i].style.color = normal_cyan;}
    var normal_whites = document.getElementsByClassName("normal-white-color"); for (var i = 0; i < normal_whites.length; i++) { normal_whites[i].style.color = normal_white;}


    var bright_blacks = document.getElementsByClassName("bright-black-color"); for (var i = 0; i < bright_blacks.length; i++) { bright_blacks[i].style.color = bright_black;}
    var bright_reds = document.getElementsByClassName("bright-red-color"); for (var i = 0; i < bright_reds.length; i++) { bright_reds[i].style.color = bright_red;}
    var bright_greens = document.getElementsByClassName("bright-green-color"); for (var i = 0; i < bright_greens.length; i++) { bright_greens[i].style.color = bright_green;}
    var bright_yellows = document.getElementsByClassName("bright-yellow-color"); for (var i = 0; i < bright_yellows.length; i++) { bright_yellows[i].style.color = bright_yellow;}
    var bright_blues = document.getElementsByClassName("bright-blue-color"); for (var i = 0; i < bright_blues.length; i++) { bright_blues[i].style.color = bright_blue;}
    var bright_magentas = document.getElementsByClassName("bright-magenta-color"); for (var i = 0; i < bright_magentas.length; i++) { bright_magentas[i].style.color = bright_magenta;}
    var bright_cyans = document.getElementsByClassName("bright-cyan-color"); for (var i = 0; i < bright_cyans.length; i++) { bright_cyans[i].style.color = bright_cyan;}
    var bright_whites = document.getElementsByClassName("bright-white-color"); for (var i = 0; i < bright_whites.length; i++) { bright_whites[i].style.color = bright_white;}


    var normal_black_bgs = document.getElementsByClassName("normal-black-background"); for (var i = 0; i < normal_black_bgs.length; i++) { normal_black_bgs[i].style.background = normal_black;}
    var normal_red_bgs = document.getElementsByClassName("normal-red-background"); for (var i = 0; i < normal_red_bgs.length; i++) { normal_red_bgs[i].style.background = normal_red;}
    var normal_green_bgs = document.getElementsByClassName("normal-green-background"); for (var i = 0; i < normal_green_bgs.length; i++) { normal_green_bgs[i].style.background = normal_green;}
    var normal_yellow_bgs = document.getElementsByClassName("normal-yellow-background"); for (var i = 0; i < normal_yellow_bgs.length; i++) { normal_yellow_bgs[i].style.background = normal_yellow;}
    var normal_blue_bgs = document.getElementsByClassName("normal-blue-background"); for (var i = 0; i < normal_blue_bgs.length; i++) { normal_blue_bgs[i].style.background = normal_blue;}
    var normal_magenta_bgs = document.getElementsByClassName("normal-magenta-background"); for (var i = 0; i < normal_magenta_bgs.length; i++) { normal_magenta_bgs[i].style.background = normal_magenta;}
    var normal_cyan_bgs = document.getElementsByClassName("normal-cyan-background"); for (var i = 0; i < normal_cyan_bgs.length; i++) { normal_cyan_bgs[i].style.background = normal_cyan;}
    var normal_white_bgs = document.getElementsByClassName("normal-white-background"); for (var i = 0; i < normal_white_bgs.length; i++) { normal_white_bgs[i].style.background = normal_white;}


    var bright_black_bgs = document.getElementsByClassName("bright-black-background"); for (var i = 0; i < bright_black_bgs.length; i++) { bright_black_bgs[i].style.background = bright_black;}
    var bright_red_bgs = document.getElementsByClassName("bright-red-background"); for (var i = 0; i < bright_red_bgs.length; i++) { bright_red_bgs[i].style.background = bright_red;}
    var bright_green_bgs = document.getElementsByClassName("bright-green-background"); for (var i = 0; i < bright_green_bgs.length; i++) { bright_green_bgs[i].style.background = bright_green;}
    var bright_yellow_bgs = document.getElementsByClassName("bright-yellow-background"); for (var i = 0; i < bright_yellow_bgs.length; i++) { bright_yellow_bgs[i].style.background = bright_yellow;}
    var bright_blue_bgs = document.getElementsByClassName("bright-blue-background"); for (var i = 0; i < bright_blue_bgs.length; i++) { bright_blue_bgs[i].style.background = bright_blue;}
    var bright_magenta_bgs = document.getElementsByClassName("bright-magenta-background"); for (var i = 0; i < bright_magenta_bgs.length; i++) { bright_magenta_bgs[i].style.background = bright_magenta;}
    var bright_cyan_bgs = document.getElementsByClassName("bright-cyan-background"); for (var i = 0; i < bright_cyan_bgs.length; i++) { bright_cyan_bgs[i].style.background = bright_cyan;}
    var bright_white_bgs = document.getElementsByClassName("bright-white-background"); for (var i = 0; i < bright_white_bgs.length; i++) { bright_white_bgs[i].style.background = bright_white;}
}

updateTheme()

var colors = document.getElementsByClassName("color");
for (var i = 0; i < colors.length; i++) { colors[i].onchange = function() {updateTheme();} }