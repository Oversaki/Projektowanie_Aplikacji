const n = document.querySelector('#n')
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    wynik.innerHTML = ``;
    let N = parseInt(n.value)
    let mini = parseInt(min.value);
    let maks = parseInt(max.value);
    wynik.innerHTML = "Liczby wylosowane to: ";
    for ( let i=0; i<N;i++){
        wynik.innerHTML += Math.floor(Math.random() * (maks - mini + 1) + mini) + " , "
    }
})