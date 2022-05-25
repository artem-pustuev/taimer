//=======================ТАЙМЕР===============================================================

let input = document.querySelector('.input');
let out = document.querySelector('.out');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let interval;

out.innerHTML = 0;
input.value = 0

start.addEventListener('click', () => {
    if (input.value < 0) {
        input.value = 0;
        out.innerHTML = 0;
    }


    out.innerHTML = input.value;
    clearInterval(interval);
    interval = setInterval(taimer, 1000)

})


stop.addEventListener('click', () => {
    clearInterval(interval)
    input.value = out.innerHTML
})

reset.addEventListener('click', () => {
    input.value = 0;
    out.innerHTML = 0;
})


function taimer() {
    if (out.innerHTML > 0) {
        out.innerHTML--
    }
}
//===================================================================================================

