var cellsState = []

function pageLoad() {
    id = 0;
    var divs = document.getElementsByClassName('cell');
    [].slice.call(divs).forEach(function (div) {
        initialiseCell(div);
        cellsState.push(null);
        div.id = id.toString();
        enable(div);
        id++;
    });
    return;
}

function initialiseCell(div) {
    div.innerHTML = '<img class="crossImg" src="images/cross.png" height="100%" width="100%" align="top" />';
}

function disable(div) {
    var index = parseInt(div.id);
    cellsState[index] = -1;
    div.style.backgroundColor = "#ff0000";
}

function enable(div) {
    var index = parseInt(div.id);
    cellsState[index] = 0;
    div.style.backgroundColor = "#00ff00";
}

function enabled(div) {
    var index = parseInt(div.id);
    if (cellsState[index] == -1) {
        return false;
    }
    else 
    {
        return true;
    }
}

function toggleVisibility(div) {
    if (div.style.visibility == "hidden") {
        div.style.visibility = 'visible';
    }
    else {
        div.style.visibility = 'hidden';
    }
    return;
}

function cellClicked(div) {
    if (enabled(div))
    {
        var children = div.childNodes;
        [].slice.call(children).forEach(function (child) {
            if (child.className == "crossImg") {
                toggleVisibility(child)
            }
        });
    }
    return;
}

function disableAll() {
    var divs = document.getElementsByClassName('cell');
    [].slice.call(divs).forEach(function (div) {
        disable(div);
    });
}

function enableAll() {
    var divs = document.getElementsByClassName('cell');
    [].slice.call(divs).forEach(function (div) {
        enable(div);
    });
}

window.onload = pageLoad();