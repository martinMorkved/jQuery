$("h1").click(function () {
    $("h1").css("color", "purple");
});

$("button").click(function () {
    $("button").text("I don't work");
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
});
