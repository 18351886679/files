var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var input = document.querySelector("#email-input");
input.focus();

var ul = document.querySelector("#email-sug-wrapper");

input.addEventListener("input", inputChange);
input.addEventListener("keydown", keyOperation);

ul.addEventListener("mousemove", mouseMove);
var lastHighLightItem;

ul.addEventListener("mousedown", mouseDown);
var lastKeySelectedItem;

function keyOperation(e) {
    if (e.keyCode == 38) {
        // up
        keyUp();
    } else if (e.keyCode == 40) {
        // down
        keyDown();
    } else if (e.keyCode == 13) {
        // enter
        chooseItem(lastKeySelectedItem);
    } else if (e.keyCode == 27) {
        input.select();
    }
}

function keyUp() {
    var liItems = document.querySelectorAll("#email-sug-wrapper li");
    for (var i = 0; i < liItems.length; i++) {
        if (liItems[i] === lastKeySelectedItem) {
            if (i == 0) {
                keyChoose(liItems[liItems.length - 1]);
            } else {
                keyChoose(liItems[i - 1]);
            }
            break;
        }
    }
}

function keyDown() {
    var liItems = document.querySelectorAll("#email-sug-wrapper li");
    for (var i = 0; i < liItems.length; i++) {
        if (liItems[i] === lastKeySelectedItem) {
            if (i == liItems.length - 1) {
                keyChoose(liItems[0]);
            } else {
                keyChoose(liItems[i + 1]);
            }
            break;
        }
    }
}

function initKeySelection() {
    var liItems = document.querySelectorAll("#email-sug-wrapper li");
    if (liItems.length > 0) {
        keyChoose(liItems[0]);
        lastKeySelectedItem = liItems[0];
    }
}

function keyChoose(item) {
    if (lastKeySelectedItem) {
        if (lastKeySelectedItem !== lastHighLightItem) {
            lastKeySelectedItem.style.backgroundColor = "#ffffff";
        } else {
            lastKeySelectedItem.style.backgroundColor = "#f2dbd6";
        }
    }
    lastKeySelectedItem = item;
    lastKeySelectedItem.style.backgroundColor = "#d9edf9";
}

function mouseMove(e) {
    if (lastHighLightItem && lastKeySelectedItem !== lastHighLightItem) {
        lastHighLightItem.style.backgroundColor = "#ffffff";
    }
    lastHighLightItem = e.target;
    if (lastHighLightItem !== lastKeySelectedItem) {
        lastHighLightItem.style.backgroundColor = "#f2dbd6";
    }
}

function mouseDown(e) {
    chooseItem(e.target);
    setTimeout(setInputFocus, 0);
}

function setInputFocus() {
    input.focus();
}

function chooseItem(item) {
    input.value = item.innerHTML;
    hideItemList();
}

function inputChange() {
    var value = input.value.trim();
    if (value === "") {
        hideItemList();
        return;
    }

    var index = value.indexOf("@");
    var matchingSuffix;
    var prefix;
    if (index != -1) {
        // 包含@
        matchingSuffix = filterSuffix(value.substring(index + 1));
        prefix = value.substring(0, index);
    } else {
        // 不包含
        matchingSuffix = postfixList;
        prefix = value;
    }
    var listItemValues = generateItemValues(prefix, matchingSuffix);
    setListItemValues(listItemValues);
    initKeySelection();
}

function filterSuffix(str) {
    var result = [];
    for (var postfix of postfixList) {
        if (postfix.startsWith(str)) {
            result.push(postfix);
        }
    }
    return result;
}

function generateItemValues(prefix, suffixes) {
    var result = [];
    for (var suffix of suffixes) {
        result.push(prefix + "@" + suffix);
    }
    return result;
}

function setListItemValues(listItemValues) {
    clearList();
    for (var itemValue of listItemValues) {
        addLiItem(itemValue);
    }
    showItemList();
}

function addLiItem(itemValue) {
    var li = document.createElement("li");
    li.innerHTML = itemValue;
    ul.appendChild(li);
}

function showItemList() {
    ul.style.display = "block";
}

function hideItemList() {
    ul.style.display = "none";
}

function clearList() {
    var liItems = document.querySelectorAll("#email-sug-wrapper li");
    for (var item of liItems) {
        ul.removeChild(item);
    }
}