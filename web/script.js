function pageLoad() {
    var divs = document.getElementsByClassName('cell');
    [].slice.call(divs).forEach(function (div) {
        div.innerHTML = '<img src="images/cross.png" height="100%" width="100%" align="top" />';
    });
}

window.onload = pageLoad();