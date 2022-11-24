const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let x = parseInt(liczba.value);
    let wynik_tekst = '';

    let odp0 = 0
    let odp1 = x
    let odp2 = x*2
    let odp3 = x*3
    let odp4 = x*4
    let odp5 = x*5
    let odp6 = x*6
    let odp7 = x*7
    let odp8 = x*8
    let odp9 = x*9
    let odp10 = x*10

    wynik_tekst+= `Wartość: ${x} <br> 
${x} x 0 = ${odp0} <br>
${x} x 1 = ${odp1} <br>
${x} x 2 = ${odp2} <br>
${x} x 3 = ${odp3} <br>
${x} x 4 = ${odp4} <br>
${x} x 5 = ${odp5} <br>
${x} x 6 = ${odp6} <br>
${x} x 7 = ${odp7} <br>
${x} x 8 = ${odp8} <br>
${x} x 9 = ${odp9} <br>
${x} x 10 = ${odp10}`;
    wynik.innerHTML = wynik_tekst;
})