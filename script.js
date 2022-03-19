var slider = document.querySelectorAll('.slider');
var value = document.getElementById('value');
// console.log(slider);

for(var i = 0; i <slider.length; i++) {
    slider[i].oninput = function() {
        value.innerHTML = this.value
    }
}