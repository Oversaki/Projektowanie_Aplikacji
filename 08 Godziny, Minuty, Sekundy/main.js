const sekunda = document.querySelector('#sekunda');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let s = parseInt(sekunda.value);
    let wynik_tekst = '';
    let godziny = Math.floor(s/3600);
    wynik_tekst+=`${godziny} g `;
    let sekundy_cale = s%3600;
    let minuty = Math.floor(sekundy_cale/60);
    wynik_tekst+=`${minuty} m `;
    let sekundy = sekundy_cale%60;
    wynik_tekst+=`${sekundy} s `;
    wynik.innerHTML = wynik_tekst;
})