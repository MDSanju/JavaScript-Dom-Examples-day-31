// click handler, works after clicking, night mode
function nightMode() {
    document.body.style.backgroundColor = '#121212';
}




// handle blue mode
const blueBtn = document.getElementById('make-blue');
// just set the name of the function
blueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'steelblue';
}




// event handler with anonymous function which is function without name
const purpleButton = document.getElementById('purple-handler');
purpleButton.onclick = function() {
    document.body.style.backgroundColor = 'blueviolet';
}





// handle by using addeventlistener
const goldenRod = document.getElementById('golden-button');
goldenRod.addEventListener('click', rod);

function rod() {
    document.body.style.backgroundColor = 'goldenrod';
}




// anonymous function addEventListener handler
const pikoPink = document.getElementById('pico-pink');
pikoPink.addEventListener('click', function() {
    document.body.style.backgroundColor = '#fd79a8';
});





// shortcut anonymous function addEventListener handler
document.getElementById('sky-blue').addEventListener('click', function() {
    document.body.style.backgroundColor = 'skyblue';
});