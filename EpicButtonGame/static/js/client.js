$(document).ready(function() {
    var socket = io.connect();

    socket.on("update", function(count) {
        $("h1").text(`The button has been pushed ${count} time(s).`);
    });

    $(".epic").click(function () {
        socket.emit("click");
    });

    $(".reset").click(function () {
        socket.emit("reset");
    });
});
