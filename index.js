document.write("1st Pyramid as below <br> <br>");

// first pyramid start
var rows = 14;
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(" * ");
    }
    document.write("<br>");
}
// first pyramid end

document.write("<br>2nd Pyramid as below <br> <br>");

// secind pyramid start
var rows = 14;
for (var i = 0; i <= rows; i++) {
    for (var j = rows - 1; j >= i; j--) {
        document.write(" * ");
    }
    document.write('<br>');
}
// second pyramid end

document.write("<br>3rd Pyramid as below <br> <br>");

// third pyramid start
var rows = 7;
for (var i = 1; i <= rows; i++) {
    for (var k = 1; k <= (rows - i); k++) {
        document.write("&nbsp");
    }

    for (var j = 1; j <= i; j++) {
        document.write(" * ");
    }
    document.write("<br>")
}
// third pyramid end

document.write("<br>4th Pyramid as below <br> <br>");

// fourth pyramid start
var rows = 7;
for (var i = 1; i <= rows; i++) {
    for (var k = rows; k >= (rows - i); k--) {
        document.write("&nbsp");
    }
    for (var j = rows; j >= i; j--) {
        document.write(" * ");
    }
    document.write("<br>")
}
// fourth pyramid end