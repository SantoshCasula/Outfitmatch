/**
 * Created by akashgupta on 2016-11-01.
 */
$(function () {

    function initializeFirebase() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDwE984DHtBVj1Y1ZFKUUWvpwxZQZSzTQU",
            authDomain: "outfitmatch-671cf.firebaseapp.com",
            databaseURL: "https://outfitmatch-671cf.firebaseio.com",
            storageBucket: "outfitmatch-671cf.appspot.com",
            messagingSenderId: "274978013104"
        };
        firebase.initializeApp(config);
        firebaseInitialize = true;
    }

    if (firebaseInitialize == false) {
        initializeFirebase();
    }

    //adding the main wrapper into the webpage.
    $.get(chrome.extension.getURL('../html/content.html'), function (data) {
        $('#outfitmatch_wrapper').empty();
        $(data).prependTo("body");
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                $("#sign_in").hide();
                $("#sign_out").show();
                $("#sign_out").click(function () {
                    firebase.auth().signOut().then(function () {
                        // Sign-out successful.
                        navigation = navLedgers.login;
                        chrome.runtime.sendMessage({"todo": navigation});
                    }, function (error) {
                        // An error happened.

                    });
                });
            } else {
                $("#sign_out").hide();
                $("#sign_in").show();
                $("#sign_in").click(function (data) {
                    navigation = navLedgers.login;
                    chrome.runtime.sendMessage({"todo": navigation});
                })
            }
        });
        $('#icon').attr('src', chrome.extension.getURL('../images/logo.png'));
        $("#outfitmatch_wrapper").empty();
        navigation = navLedgers.login;
        chrome.runtime.sendMessage({"todo": navigation});
    });
});


function loginWithEmailAndPassword(email, password) {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    }
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and password.

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });

}

function getAuthenticatesUser() {
    return firebase.auth().currentUser;
}