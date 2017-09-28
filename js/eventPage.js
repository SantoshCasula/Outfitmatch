/**
 * Created by akashgupta on 2016-11-01.
 */

chrome.browserAction.onClicked.addListener(function (e) {
    chrome.tabs.executeScript(null, {
        file: "js/showup.js"
    });
});
var contextMenuItem = {
    id: "selectClothing",
    title: "Add this to outfitmatch.",
    contexts: ["image"]
};


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "LOGIN") {
        chrome.tabs.executeScript(null, {
            file: "js/login.js"
        });
    } else if (request.todo == "CLOSET") {
        chrome.tabs.executeScript(null, {
            file: "js/closet.js"
        });
    } else if (request.todo == "NEW_CLOSET") {
        chrome.tabs.executeScript(null, {
            file: "js/new-closet.js"
        });
    } else if (request.todo == "CANVAS") {
        chrome.tabs.executeScript(null, {
            file: "js/canvas.js"
        });
    } else if (request.todo == "REGISTER") {
        chrome.tabs.executeScript(null, {
                file: "js/register.js"
            }
        );
    } else if (request.todo == "ADD_SUB_USER") {
        chrome.tabs.executeScript(null, {
            file: "js/sub-user.js"
        });
    }
});

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.addListener(function (clickData) {
    if (clickData.menuItemId == "selectClothing" && clickData.srcUrl) {
        chrome.runtime.sendMessage({id: "saveImage", newImageAdded: clickData});
    }
});