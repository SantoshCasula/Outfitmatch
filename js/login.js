/**
 * Created by akashgupta on 2016-11-03.
 */
$(function login() {
    if (navigation != navLedgers.login) {
        return;
    }
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            navigation = navLedgers.closet;
            chrome.runtime.sendMessage({todo: navigation});
        }
    });

    function registerLogin() {
        $('#pageName').text("Login");
        //events
        //loginButton event
        $("#outfitmatch_login_button").click(function (data) {
                var email = $("#outfitmatch_login_email").val();
                var password = $("#outfitmatch_login_password").val();
                loginWithEmailAndPassword(email, password);
                if (firebase.auth().currentUser) {
                    navigation = navLedgers.closet;
                    chrome.runtime.sendMessage({todo: navigation});
                }
            }
        );

        $("#outfitmatch_login_register_button").click(function (data) {
            navigation = navLedgers.register;
            chrome.runtime.sendMessage({todo: navigation});
        });

        //closebutton event
        $('#outfitmatch_login_exit').click(function (data) {
            $('#outfitmatch_wrapper').hide();
        });
    }

    //adding login wrapper to outfitmatch_wrappers
    $.get(chrome.extension.getURL('../html/login.html'), function (data) {
        $('#outfitmatch_wrapper').empty();
        $(data).prependTo('#outfitmatch_wrapper');
        registerLogin();
    });
})
;
