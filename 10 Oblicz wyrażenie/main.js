const x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let liczba = parseInt(x.value);
    let wynik_tekst = '';
    let odp = Math.pow(liczba,2)/(1+Math.abs(liczba))**2;
    wynik_tekst+= `wynik dla ${liczba} to ${odp}<br>`;
    wynik.innerHTML = wynik_tekst;
})