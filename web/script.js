function pageLoad() {
    var divs = document.getElementsByClassName('cell');
    [].slice.call(divs).forEach(function (div) {
        div.innerHTML = '<img class="crossImg" src="images/cross.png" height="100%" width="100%" align="top" />';
    });
}

function cellClicked(div) {
    var children = div.childNodes;
    [].slice.call(children).forEach(function (child) {
        if (child.className == "crossImg")
        {
            if (child.style.visibility == "hidden") {
                child.style.visibility = 'visible';
            }
            else {
                child.style.visibility = 'hidden';
            }
        }
    });
}

window.onload = pageLoad();