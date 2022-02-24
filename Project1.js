let view = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');
let close = document.getElementById('close-button')

let open = function() {
    moreInfo.style.display = 'block';
    close.style.display = 'block';
}

let hide = function() {
    moreInfo.style.display = 'none'
    close.style.display = 'none';
}

view.addEventListener('click', open);
close.addEventListener('click', hide);