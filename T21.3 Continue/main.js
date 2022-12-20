const liczba = document.querySelector('#liczba')
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let i = 1
    let l = parseInt(liczba.value)
    wynik.innerHTML = ``;
    for (i; i<16; i++) {
        if ((i === l)) {
            wynik.innerHTML += "{-} "
            continue;
        }
        wynik.innerHTML += (i + " ");
    }




    })