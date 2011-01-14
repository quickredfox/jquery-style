module("Test jquery-style");
test('$.style, $.unstyle',function() {
    $.style("body{color:rgb(255, 0, 0)}");
    equals($('body').css('color'),'rgb(255, 0, 0)','Should add rules')
    $.unstyle();
    equals($('body').css('color'),'rgb(0, 0, 0)','Should remove rules')
});