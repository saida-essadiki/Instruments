var buttons = document.querySelectorAll('button');

function playInstru() {
    var index = this.getAttribute('data-index');
    var piano = new Audio('sounds/sound-' + index + '.wav');
    piano.play();
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('data-index', i); 
    buttons[i].addEventListener('click', playInstru);
}
