window.onload = function() {
    var bannerButtons = document.querySelectorAll("#banner ul li a");
    for (i = 0; i < bannerButtons.length; i++) {
        var bannerButton = bannerButtons[i];
        setHandler(bannerButton, bannerButtons);
    }

    var contentTabs = document.querySelectorAll("#content ul li a");
    for (i = 0; i < contentTabs.length; i++) {
        var contentTab = contentTabs[i];
        setTabHandler(contentTab, contentTabs);
    }
}

function setHandler(bannerButton, bannerButtons) {
    bannerButton.onclick = function() {
        for (i = 0; i < bannerButtons.length; i++) {
            if (bannerButtons[i].getAttribute('class')) {
                bannerButtons[i].removeAttribute('class');
            }
        }

        bannerButton.setAttribute('class', 'active');
    }
}

function setTabHandler(contentTab, contentTabs) {
    contentTab.onclick = function() {
        for (i = 0; i < contentTabs.length; i++) {
            if (contentTabs[i].getAttribute('class')) {
                contentTabs[i].removeAttribute('class');
            }
        }

        contentTab.setAttribute('class', 'active');
    }
}