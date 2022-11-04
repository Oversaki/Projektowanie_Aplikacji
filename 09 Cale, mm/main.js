const cale = document.querySelector('#cale');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let cal = parseInt(cale.value);
    let wynik_tekst = '';
    let mm = Math.floor(cal*25,3995);
    wynik_tekst+=`${cal} cali to ${mm} mm`;
    wynik.innerHTML = wynik_tekst;
})