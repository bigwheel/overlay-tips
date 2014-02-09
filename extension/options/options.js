function save_options() {
    store.set('elasticsearch_url', $('input[name="elasticsearch_url"]').val());
}

function restore_options() {
    var favorite = store.get('elasticsearch_url');
    if (!favorite) {
        return;
    }
    $('input[name="elasticsearch_url"]').val(favorite);
}

$(function() {
    restore_options();
    $('input[type="button"]').click(function(){ save_options(); });
});
