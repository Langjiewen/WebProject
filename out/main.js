function output(m) {
    for (var i = 1; i <= m; i++) {
        var a = "";
        for (var j = 1; j <= m - i; j++) {
            var space = " ";
            a = a + space;
        }
        for (var k = 1; k <= 2 * i - 1; k++) {
            var star = "*";
            a = a + star;
        }
        console.log(a);
    }
}
window.onload = function () {
    output(5);
};
//# sourceMappingURL=main.js.map