function updateTheme() {
    var background = document.getElementById("background").value.replace("0x", "#");
    var foreground = document.getElementById("foreground").value.replace("0x", "#");

    var normal_black = document.getElementById("normal-black").value.replace("0x", "#");
    var normal_red = document.getElementById("normal-red").value.replace("0x", "#");
    var normal_green = document.getElementById("normal-green").value.replace("0x", "#");
    var normal_yellow = document.getElementById("normal-yellow").value.replace("0x", "#");
    var normal_blue = document.getElementById("normal-blue").value.replace("0x", "#");
    var normal_magenta = document.getElementById("normal-magenta").value.replace("0x", "#");
    var normal_cyan = document.getElementById("normal-cyan").value.replace("0x", "#");
    var normal_white = document.getElementById("normal-white").value.replace("0x", "#");

    var bright_black = document.getElementById("bright-black").value.replace("0x", "#");
    var bright_red = document.getElementById("bright-red").value.replace("0x", "#");
    var bright_green = document.getElementById("bright-green").value.replace("0x", "#");
    var bright_yellow = document.getElementById("bright-yellow").value.replace("0x", "#");
    var bright_blue = document.getElementById("bright-blue").value.replace("0x", "#");
    var bright_magenta = document.getElementById("bright-magenta").value.replace("0x", "#");
    var bright_cyan = document.getElementById("bright-cyan").value.replace("0x", "#");
    var bright_white = document.getElementById("bright-white").value.replace("0x", "#");

    document.getElementById("viewport").style.background = background;

    var foregrounds = document.getElementsByClassName("foreground-color"); for (var i = 0; i < foregrounds.length; i++) { foregrounds[i].style.color = foreground;}

    var e039 = document.getElementsByClassName("039"); for (var i = 0; i < e039.length; i++) { e039[i].style.color = foreground; e039[i].style.background = background;}
    var e030 = document.getElementsByClassName("030"); for (var i = 0; i < e030.length; i++) { e030[i].style.color = normal_black; e030[i].style.background = background;}
    var e031 = document.getElementsByClassName("031"); for (var i = 0; i < e031.length; i++) { e031[i].style.color = normal_red; e031[i].style.background = background;}
    var e032 = document.getElementsByClassName("032"); for (var i = 0; i < e032.length; i++) { e032[i].style.color = normal_green; e032[i].style.background = background;}
    var e033 = document.getElementsByClassName("033"); for (var i = 0; i < e033.length; i++) { e033[i].style.color = normal_yellow; e033[i].style.background = background;}
    var e034 = document.getElementsByClassName("034"); for (var i = 0; i < e034.length; i++) { e034[i].style.color = normal_blue; e034[i].style.background = background;}
    var e035 = document.getElementsByClassName("035"); for (var i = 0; i < e035.length; i++) { e035[i].style.color = normal_magenta; e035[i].style.background = background;}
    var e036 = document.getElementsByClassName("036"); for (var i = 0; i < e036.length; i++) { e036[i].style.color = normal_cyan; e036[i].style.background = background;}


    var e049 = document.getElementsByClassName("049"); for (var i = 0; i < e049.length; i++) { e049[i].style.color = foreground; e049[i].style.background = background;}
    var e040 = document.getElementsByClassName("040"); for (var i = 0; i < e040.length; i++) { e040[i].style.color = foreground; e040[i].style.background = normal_black;}
    var e041 = document.getElementsByClassName("041"); for (var i = 0; i < e041.length; i++) { e041[i].style.color = foreground; e041[i].style.background = normal_red;}
    var e042 = document.getElementsByClassName("042"); for (var i = 0; i < e042.length; i++) { e042[i].style.color = foreground; e042[i].style.background = normal_green;}
    var e043 = document.getElementsByClassName("043"); for (var i = 0; i < e043.length; i++) { e043[i].style.color = foreground; e043[i].style.background = normal_yellow;}
    var e044 = document.getElementsByClassName("044"); for (var i = 0; i < e044.length; i++) { e044[i].style.color = foreground; e044[i].style.background = normal_blue;}
    var e045 = document.getElementsByClassName("045"); for (var i = 0; i < e045.length; i++) { e045[i].style.color = foreground; e045[i].style.background = normal_magenta;}
    var e046 = document.getElementsByClassName("046"); for (var i = 0; i < e046.length; i++) { e046[i].style.color = foreground; e046[i].style.background = normal_cyan;}


    var e037 = document.getElementsByClassName("037"); for (var i = 0; i < e037.length; i++) { e037[i].style.color = normal_white; e037[i].style.background = background;}
    var e090 = document.getElementsByClassName("090"); for (var i = 0; i < e090.length; i++) { e090[i].style.color = bright_black; e090[i].style.background = background;}
    var e091 = document.getElementsByClassName("091"); for (var i = 0; i < e091.length; i++) { e091[i].style.color = bright_red; e091[i].style.background = background;}
    var e092 = document.getElementsByClassName("092"); for (var i = 0; i < e092.length; i++) { e092[i].style.color = bright_green; e092[i].style.background = background;}
    var e093 = document.getElementsByClassName("093"); for (var i = 0; i < e093.length; i++) { e093[i].style.color = bright_yellow; e093[i].style.background = background;}
    var e094 = document.getElementsByClassName("094"); for (var i = 0; i < e094.length; i++) { e094[i].style.color = bright_blue; e094[i].style.background = background;}
    var e095 = document.getElementsByClassName("095"); for (var i = 0; i < e095.length; i++) { e095[i].style.color = bright_magenta; e095[i].style.background = background;}
    var e096 = document.getElementsByClassName("096"); for (var i = 0; i < e096.length; i++) { e096[i].style.color = bright_cyan; e096[i].style.background = background;}


    var e047 = document.getElementsByClassName("047"); for (var i = 0; i < e047.length; i++) { e047[i].style.color = foreground; e047[i].style.background = normal_white;}
    var e100 = document.getElementsByClassName("100"); for (var i = 0; i < e100.length; i++) { e100[i].style.color = foreground; e100[i].style.background = bright_black;}
    var e101 = document.getElementsByClassName("101"); for (var i = 0; i < e101.length; i++) { e101[i].style.color = foreground; e101[i].style.background = bright_red;}
    var e102 = document.getElementsByClassName("102"); for (var i = 0; i < e102.length; i++) { e102[i].style.color = foreground; e102[i].style.background = bright_green;}
    var e103 = document.getElementsByClassName("103"); for (var i = 0; i < e103.length; i++) { e103[i].style.color = foreground; e103[i].style.background = bright_yellow;}
    var e104 = document.getElementsByClassName("104"); for (var i = 0; i < e104.length; i++) { e104[i].style.color = foreground; e104[i].style.background = bright_blue;}
    var e105 = document.getElementsByClassName("105"); for (var i = 0; i < e105.length; i++) { e105[i].style.color = foreground; e105[i].style.background = bright_magenta;}
    var e106 = document.getElementsByClassName("106"); for (var i = 0; i < e106.length; i++) { e106[i].style.color = foreground; e106[i].style.background = bright_cyan;}

    var rawConfig = "\n"
                    + "[colors.primary]\n"
                    + "background = '"+background.replace("#", "0x")+"'\n"
                    + "foreground = '"+foreground.replace("#", "0x")+"'\n"
                    + "\n"
                    + "[colors.normal]\n"
                    + "black = '"+normal_black.replace("#", "0x")+"'\n"
                    + "blue = '"+normal_blue.replace("#", "0x")+"'\n"
                    + "cyan = '"+normal_cyan.replace("#", "0x")+"'\n"
                    + "green = '"+normal_green.replace("#", "0x")+"'\n"
                    + "magenta = '"+normal_magenta.replace("#", "0x")+"'\n"
                    + "red = '"+normal_red.replace("#", "0x")+"'\n"
                    + "white = '"+normal_white.replace("#", "0x")+"'\n"
                    + "yellow = '"+normal_yellow.replace("#", "0x")+"'\n"
                    + "\n"
                    + "[colors.bright]\n"
                    + "black = '"+bright_black.replace("#", "0x")+"'\n"
                    + "blue = '"+bright_blue.replace("#", "0x")+"'\n"
                    + "cyan = '"+bright_cyan.replace("#", "0x")+"'\n"
                    + "green = '"+bright_green.replace("#", "0x")+"'\n"
                    + "magenta = '"+bright_magenta.replace("#", "0x")+"'\n"
                    + "red = '"+bright_red.replace("#", "0x")+"'\n"
                    + "white = '"+bright_white.replace("#", "0x")+"'\n"
                    + "yellow = '"+bright_yellow.replace("#", "0x")+"'"

    document.getElementById("raw-config").value = rawConfig
}

updateTheme()

var colors = document.getElementsByClassName("color");
for (var i = 0; i < colors.length; i++) { colors[i].onchange = function() {updateTheme();} }
