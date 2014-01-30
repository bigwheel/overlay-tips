// Saves options to localStorage.
function save_options() {
    var select = document.getElementById("color");
    var color = select.children[select.selectedIndex].value;
    localStorage["favorite_color"] = color;
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    var favorite = localStorage["favorite_color"];
    if (!favorite) {
        return;
    }
    var select = document.getElementById("color");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == favorite) {
            child.selected = "true";
            break;
        }
    }
}

$(function() {
    restore_options();
    $('button').click(function(){ save_options(); });
});
