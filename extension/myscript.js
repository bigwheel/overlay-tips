$(function() {
    $.ajax("http://192.168.33.10:9200/overlay_tips/tip/1").done(
        function(data, textStatus, jqXHR) {
            console.log(data);
            $("#s").val(data._source.tip);
        }
    );
    //$("#s").val("test");
});
