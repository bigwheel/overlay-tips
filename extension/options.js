function save_options() {
    localStorage["favorite_color"] = $("#color").val();
}

function restore_options() {
    var favorite = localStorage["favorite_color"];
    if (!favorite) {
        return;
    }
    $("#color").val(favorite);
}

$(function() {
    restore_options();
    $('button').click(function(){ save_options(); });
});
