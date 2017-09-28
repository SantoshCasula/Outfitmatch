/**
 * Created by akashgupta on 2016-11-03.
 */
$(function () {
    //if navigation is not set to closet
    if (navigation != navLedgers.closet) {
        return;
    }

    function registerCloset() {
        $('#pageName').text("Closets");
        $('#outfitmatch_closet_closets').empty();

        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/subUsers').on('child_added', function (subUserKey) {
            //div for a single closet.
            var div = document.createElement('div');
            div.setAttribute('id', subUserKey.val());
            div.setAttribute('class', "subUser");

            //name div for user  or sub user.
            var namediv = document.createElement("div");
            namediv.setAttribute('class', 'nameDiv');

            //add closet button for each user or sub user
            var addClosetButton = document.createElement('button');
            addClosetButton.setAttribute('class', 'addButton');

            //meta div for a user or sub user.
            var metaDiv = document.createElement('div');

            addClosetButton.addEventListener('click', function (data) {
                chrome.storage.sync.set({'uid': subUserKey.val()}, function () {
                });
                navigation = navLedgers.newCloset;
                chrome.runtime.sendMessage({"todo": navigation});
            });
            firebase.database().ref('/users/' + subUserKey.val() + '/firstName').once('value', function (data) {
                namediv.innerText = data.val() + "'s closet";
            });
            metaDiv.appendChild(namediv);
            metaDiv.appendChild(addClosetButton);
            div.appendChild(metaDiv);
            firebase.database().ref('/users/' + subUserKey.val() + '/closets').on('child_added', function (closetKey) {
                firebase.database().ref('/closets/' + closetKey.val()).once('value', function (closet) {
                    var closetDiv = document.createElement('div');
                    var closetImg = document.createElement('img');
                    closetImg.setAttribute('class', 'closetImg');
                    closetImg.setAttribute('src', closet.val().photoUrl);
                    closetDiv.appendChild(closetImg);
                    div.appendChild(closetDiv);
                });
            });
            $('#outfitmatch_closet_closets').append(div);
        });

        $("#outfitmatch_add_sub_user").click(function (data) {
            navigation = navLedgers.addSubUser;
            chrome.runtime.sendMessage({todo: navigation});
        });
    }

    $.get(chrome.extension.getURL('../html/closet.html'), function (data) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                $("#outfitmatch_wrapper").empty();
                $(data).prependTo('#outfitmatch_wrapper');
                registerCloset();
            }
        });

    });
});