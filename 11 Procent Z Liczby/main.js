const liczba = document.querySelector('#liczba');
const procent = document.querySelector('#procent');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let wartosc = parseInt(liczba.value);
    let procenty = parseInt(procent.value);
    let wynik_tekst = '';
    let odp = procenty/100 * wartosc;
    wynik_tekst+= `${procenty}% z ${wartosc} to ${odp}<br>`;
    wynik.innerHTML = wynik_tekst;
})