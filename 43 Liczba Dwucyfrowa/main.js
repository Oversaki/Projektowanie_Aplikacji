const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let licz = parseInt(liczba.value);
    if(licz>9 && licz<100) {
        if(licz%2===0)
        wynik.innerHTML = 'Liczba jest dwucyfrowa i parzysta.';
        else
            wynik.innerHTML = 'Liczba jest dwucyfrowa, ale nie parzysta.'
    } else {
        wynik.innerHTML = 'Liczba nie jest dwucyfrowa.'
    }

})