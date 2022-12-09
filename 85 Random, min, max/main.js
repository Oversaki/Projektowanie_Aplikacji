const n = document.querySelector('#liczba_n')
const min = document.querySelector('#liczba_min');
const max = document.querySelector('#liczba_max');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let i = 0
    let n = parseInt(liczba_n.value)
    let min = parseInt(liczba_min.value);
    let max = parseInt(liczba_max.value);
    wynik.innerHTML = ``;
    while (i<n){
        wynik.innerHTML += Math.floor(Math.random()*(max-min+1))+min;
    }


})