/**
 * Created by akashgupta on 2016-11-03.
 */
$(function () {
    //if navigation is not set to closet
    if (navigation != navLedgers.canvas) {
        return;
    }

    var closet = null;

    function registerCanvas() {
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request.id == "saveImage") {
                alert(request.newImageAdded);
            }
        });

    }

    $.get(chrome.extension.getURL('../html/canvas.html'), function (data) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                if (currentCloset) {
                    closet = currentCloset;
                    $("#outfitmatch_wrapper").empty();
                    $(data).prependTo('#outfitmatch_wrapper');
                    registerCanvas();
                }
            }
        });

    });
});