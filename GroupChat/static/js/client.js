$(document).ready(function() {
    var socket = io.connect();
    var name = "";

    $(".chat").hide();

    function submitName() {
        name = $(".prompt input").val();
        $(".prompt").hide();
        $(".chat").show();
    }
    $(".prompt .btn-primary").click(submitName);
    $(".prompt input").keydown(function () {
        if (event.keyCode === 13) { // on enter key
            submitName();
        }
    });

    function submitMessage() {
        message = $(".chat input").val();
        $(".chat input").val("");
        socket.emit("input", { name: name, message: message });
    }
    $(".chat .btn-primary").click(submitMessage);
    $(".chat input").keydown(function(event) {
        if (event.keyCode === 13) { // on enter key
            submitMessage();
        }
    });

    socket.on("update", function(messages) {
        $(".chat-area").html("");
        for (var i in messages) {
            $(".chat-area").append(`<p>${messages[i].name}: ${messages[i].message}</p>`);
        }
    });
});
