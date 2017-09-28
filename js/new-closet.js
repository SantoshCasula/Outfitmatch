/**
 * Created by akashgupta on 2016-11-03.
 */
$(function () {
    var url = null;
    //if navigation is not set to new closet
    if (navigation != navLedgers.newCloset) {
        return;
    }

    function handleFileSelect(evt) {
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var mountainsRef = storageRef.child('mountains.jpg');
        evt.stopPropagation();
        evt.preventDefault();
        var file = evt.target.files[0];
        var user = firebase.auth().currentUser;
        var metadata = {
            'contentType': file.type
        };
        // Push to child path.
        storageRef.child('images/users/' + user.uid + '/closets/' + file.name).put(file, metadata).then(function (snapshot) {
            url = snapshot.metadata.downloadURLs[0];

            $('#new_closet_img').attr('src', url);
            $('#new_closet_img').show();
        }).catch(function (error) {

        });
    }

    function createNewCloset() {
        var closetName = $('#outfitmatch_new_closet_upload_name').val();
        if (closetName && url) {
            var database = firebase.database();
            var ref = database.ref();
            var user = firebase.auth().currentUser;
            var closetKey = firebase.database().ref('/closets').push({
                closet: closetName,
                photoUrl: url
            }).key;

            chrome.storage.sync.get("uid", function (data) {
                firebase.database().ref('/users/' + data.uid + '/closets').push(closetKey);
                chrome.storage.sync.remove("uid", function () {
                    console.log("removed")
                });
            });

            navigation = navLedgers.closet;
            chrome.runtime.sendMessage({"todo": navigation});
        }
    }

    function registerNewCloset() {
        $('#pageName').text("AddNewCloset");

        $('#outfitmatch_new_closet_upload_image').on('change', handleFileSelect);
        $('#new_closet_img').hide();
        $('#outfitmatch_new_closet_submit').on('click', createNewCloset);
    }


    $.get(chrome.extension.getURL('../html/new-closet.html'), function (data) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                $("#outfitmatch_wrapper").empty();
                $(data).prependTo('#outfitmatch_wrapper');
                registerNewCloset();
            }
        });
    });

});