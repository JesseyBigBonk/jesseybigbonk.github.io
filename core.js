// ------------------------------------ //
// Р Р°Р·Р»РёС‡РЅРµ РѕР±СЉРµРєС‚С‹ РґР»СЏ СЂР°Р±РѕС‚С‹
// ------------------------------------ //

// РћР±СЉРµРєС‚ РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РєСѓРєР°РјРё
var Cookie = {
    get: function (name) {
        return document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)") || null;
    },
    set: function (name, value) {
        var date = new Date(new Date().getTime() + 365 * 24 * 3600 * 1000).toUTCString();
        document.cookie = name + "=" + value + ";path=/;expires=" + date;
    }
};

// РћР±СЉРµРєС‚ РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ СЂР°РЅРґРѕРјРѕРј
var Random = {
    bool: function () {
        return Random.int(0, 1);
    },
    int: function (a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
};

// ------------------------------------ //
// РЎРµРєС†РёСЏ РіРѕРІРЅРѕРіРѕРґР°
// ------------------------------------ //

levl = 0;   //РєР°Р¶РґС‹Рµ 5 РѕС‚РІРµС‚РѕРІ new levl
health = 100; //РІ 1 СЃРµРєСѓРЅРґСѓ -4 health
count = 0;   //РєРѕР»-РІРѕ РѕС‚РІРµС‚РѕРІ
gAnswer = 0;
timer = 0;

var data = {
    1: "#f00",
    2: "#f70",
    3: "#080",
    4: "#707",
    5: "#734",
    6: "#94b70a",
    7: "#b75a0a",
    8: "#633d46",
    9: "#d85674",
    10: "#5684d8",
    11: "#56d86c",
    12: "#f0f",
    14: "#000",
    15: "#fff",
    16: "#433",
    17: "#dfd"
};

//generate РїСЂРёРјРµСЂ 
function summ() {
    var int0 = 10;
    var u = 0;

    while (u <= levl) {
        int0 = int0 * 10;
        u++;
    }

    var status = Random.bool();

    var int1 = Random.int(1, int0);
    var int2 = Random.int(1, int0);
    var answer = int1 + int2;

    if (status == 1) {
        if (Random.bool() == 0) {
            if (int0 >= 100) {
                var res = Random.int(-10, 10);
            } else if (int0 >= 1000) {
                var res = Random.int(-100, 100);
            } else {
                var res = Random.int(-1000, 1000)
            }
        } else {
            if (Random.bool() == 1) {
                var res = 10;
            } else {
                var res = -10;
            }
        }

        if (res == 0) {
            status = 0;
        } else {
            answer = answer + res;
        }
    }
    window.gAnswer = status;
    $("#task-text").text(int1 + " + " + int2 + " = " + answer);
}

function minus() {
    var int0 = 10;
    var u = 0;


    while (u <= (levl - 4)) {
        int0 = int0 * 10;
        u++;
    }

    var status = Random.bool();

    var int1 = Random.int(1, int0);
    var int2 = Random.int(1, int0);
    var answer = int1 - int2;

    if (status == 1) {
        if (Random.bool() == 0) {
            if (int0 >= 100) {
                var res = Random.int(-10, 10);
            } else if (int0 >= 1000) {
                var res = Random.int(-100, 100);
            } else {
                var res = Random.int(-1000, 1000)
            }
        } else {
            if (Random.bool() == 1) {
                var res = 10;
            } else {
                var res = -10;
            }
        }

        if (res == 0) {
            status = 0;
        } else {
            answer = answer + res;
        }
    }
    window.gAnswer = status;
    $("#task-text").text(int1 + " - " + int2 + " = " + answer);
}

function umnozjet() {
    var int0 = 10;
    var u = 0;

    while (u <= (levl - 8)) {
        int0 = int0 * 10;
        u++;
    }

    var status = Random.bool();

    var int1 = Random.int(1, int0);
    var int2 = Random.int(1, 20);
    var answer = int1 * int2;

    if (status == 1) {
        if (Random.bool() == 0) {
            if (int0 >= 100) {
                var res = Random.int(-10, 10);
            } else if (int0 >= 1000) {
                var res = Random.int(-100, 100);
            } else {
                var res = Random.int(-1000, 1000)
            }
        } else {
            if (Random.bool() == 1) {
                var res = 10;
            } else {
                var res = -10;
            }
        }

        if (res == 0) {
            status = 0;
        } else {
            answer = answer + res;
        }
    }
    window.gAnswer = status;
    $("#task-text").text(int1 + " x " + int2 + " = " + answer);
}

function delenie() {
    var int0 = 10;
    var u = 0;

    while (u <= (levl - 11)) {
        int0 = int0 * 10;
        u++;
    }

    var status = Random.bool();

    var int1 = Random.int(1, int0);
    var int2 = Random.int(1, 20);
    var answer = int1 * int2;

    if (status == 1) {
        if (Random.bool() == 0) {
            if (int0 >= 100) {
                var res = Random.int(-10, 10);
            } else if (int0 >= 1000) {
                var res = Random.int(-100, 100);
            } else {
                var res = Random.int(-1000, 1000)
            }
        } else {
            if (Random.bool() == 1) {
                var res = 10;
            } else {
                var res = -10;
            }
        }

        if (res == 0) {
            status = 0;
        } else {
            int2 = int2 + res;
        }
    }
    window.gAnswer = status;
    $("#task-text").text(answer + " % " + int1 + " = " + int2);
}

function generateAsk() {
    if (levl < 3) {
        summ();
    } else if (levl >= 3 && levl < 7) {
        minus();
    } else if (levl >= 7 && levl < 10) {
        umnozjet();
    } else if (levl >= 10 && levl < 14) {
        delenie();
    } else if (levl > 14) {
        delenie();
    }

}
// Math path
function gameOver() {
    clearInterval(timer);
    setColor(data[1]);

    $("#main-btn").text("START");
    $("#task-text").text("Game over. Your score: " + count);
    $(".main-btn-wrapper").show();

}

function badAnswer() {
    window.health = window.health - 30;
    window.count++;
    if ((count % 5) == 0) {
        window.levl++;
        $(".wrapper").css("background", data[levl]);
    }
    generateAsk();
}

function goodAnswer() {
    window.health = window.health + 30;
    window.count++;
    if ((count % 5) == 0) {
        window.levl++;
        setColor(data[(levl % 6) + 1]);
    }
    if (window.health >= 100) {
        window.health = 100;
    }
    generateAsk();
}


function healthS() {
    window.health = window.health - 0.08;
    if (health <= 0) {
        gameOver();
        $(".task-buttons").hide();
        $(".buttons-ref").show();
    }
}


function answer(data) {
    if (gAnswer == data) {
        goodAnswer();
    } else {
        badAnswer();
    }

    if (health == 0 || health < 0) {
        $(".task-buttons").hide();
        $(".main-btn-wrapper").show();
    }
}


function start() {
    levl = 0;
    health = 100;
    count = 0;
    gAnswer = 0;
    timer = setInterval(function () {
        healthS();
        $("#bar").css("width", health + "%");
    }, 10);
    $(".task-buttons").show();
    $(".main-btn-wrapper").hide();
    generateAsk();
}

// ------------------------------------ //

// РР·РјРµРЅРµРЅРёРµ С„РѕРЅР°
function setColor(color) {
    $(".task-bg").css("background", color);
}

// Р“РµРЅРµСЂР°С†РёСЏ РєР»СЋС‡Р° РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
function keygen() {
    var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var result = '';
    for (var i = 0; i < 64; ++i) {
        result += words[Random.int(0, 62)];
    }
    return result;
}

// РљРѕРґ РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ Р±СЌРєРµРЅРґРѕРј
function sendUserInfo() {
    if (Cookie.get("userPass") == null) Cookie.set("userPass", keygen());
    var screenSize = window.screen.width + "x" + window.screen.height;
    var userPass = Cookie.get("userPass");
    $.ajax({
        url: "http://78.24.221.181/math/backend/heandlerUserInfo.php",
        data: {screenSize: screenSize, userPass: userPass},
        type: 'POST'
    });
}

window.onload = sendUserInfo;