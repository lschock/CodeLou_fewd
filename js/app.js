$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//Adding dialog box for About, Contacts, and Newsletter sections//
$(".dialog").click(function(event){
    $("#dialogbox").dialog({
        width: 300,
        height: 200,
        draggable: false,
        blur: true,
        modal: true,  //makes it so the page dims and you cannot click on it - no interaction other than box//
        show:{
            effect: "fade",
            duration: 1000
        },
        hide: {
            effect: "blind",
            duration: 500
        },
        buttons: {
            Close: function() {  //Close will be the name of the button//
                $(this).dialog("close");
            },
        }
    });
}); // end ready