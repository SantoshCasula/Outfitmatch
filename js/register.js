/**
 * Created by akashgupta on 2016-11-10.
 */
/**
 * Created by akashgupta on 2016-11-03.
 */
$(function login() {
    if (navigation != navLedgers.register) {
        return;
    }

    function register() {
        $('#pageName').text("Register");


        //onclick function when register button is clicked.
        $('#register_submit').click(function (data) {

            //User info stored to the variables.
            var newuser = {
                email: $("#register_email").val(),
                password: $("#register_password").val(),
                uName: $("#register_Uname").val(),
                fName: $("#register_fname").val(),
                lName: $("#register_lname").val(),
            };
            if (newuser.uName && newuser.fName && newuser.lName && newuser.email && newuser.password)
            //creating user if all the fields are not null
                firebase.auth().createUserWithEmailAndPassword(newuser.email, newuser.password).then(function (user) {
                    if (user) {
                        //if user is created save first and last name.
                        var ref = firebase.database().ref("/users/" + user.uid);
                        ref.set({
                            firstName: newuser.fName,
                            lastName: newuser.lName
                        });
                        ref.child('/subUsers').push(user.uid);
                    }
                    //update firebase profile with username.
                    user.updateProfile({
                        displayName: newuser.uName,
                    }).then(function (user) {
                        //if user profile is updated navigate to closet page.
                        navigation = navLedgers.closet;
                        chrome.runtime.sendMessage({todo: navigation});
                    }).catch();
                }).catch(function (error) {
                    // Handle create user Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    } else if (errorCode == 'auth/email-already-in-use') {
                        alert('The email is already in use.');
                    } else if (errorCode == 'auth/invalid-email') {
                        alert('The email is not valid');
                    } else if (errorCode == 'auth/operation-not-allowed') {
                        alert('This email is restricted.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        });

    }

    //adding regis wrapper to outfitmatch_wrappers
    $.get(chrome.extension.getURL('../html/register.html'), function (data) {
        //to empty the main container.
        $('#outfitmatch_wrapper').empty();
        //adds register wrapper to the main wrapper
        $(data).prependTo('#outfitmatch_wrapper');
        //
        register();
    });
})
;
