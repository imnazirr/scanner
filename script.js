var groceriers = ['milk','eggs','cheese'];

for (var i = 0; i < groceriers.length; i++) {
    console.log(groceriers[i]);
}

function listGroceries() {
    for (var i = 0; i < groceriers.length; i++) {
        console.log(groceriers[i]);
    }
}

listGroceries();

document.getElementById('box').addEventListener('click', function() {
    alert('You clicked me!');
});