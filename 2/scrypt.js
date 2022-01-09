$( document ).ready(function() {
    console.log( "ready!" );
    $(".draggable").on("dragstart", function(e, pos) {
        console.log("dragstart:", this, pos.left + "," + pos.top);
    }).on("dragend", function(e, pos) {
        console.log("dragend:", this, pos.left + "," + pos.top);
    });
    dictRemoveFile:"Remove file",

});