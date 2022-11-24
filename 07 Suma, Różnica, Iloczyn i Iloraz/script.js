const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let iloraz;
    let suma;
    let iloczyn;
    let roznica;

    let wynik_tekst1;
    let wynik_tekst2;
    let wynik_tekst3;
    let wynik_tekst4;

    suma = (Number(liczba_a.value) + Number(liczba_b.value));
    wynik_tekst1 = `suma = ${suma}<br>`;

    roznica = (Number(liczba_a.value) - Number(liczba_b.value));
    wynik_tekst2 = `różnica = ${roznica} <br> `;

    iloczyn = (Number(liczba_a.value) * Number(liczba_b.value));
    wynik_tekst3 = `iloczyn = ${iloczyn} <br> `;


    if(Number(liczba_b.value)===0){
        wynik_tekst4= "Nie dzielę przez zero";
    }
    else{
        iloraz = (Number(liczba_a.value) / Number(liczba_b.value));
        wynik_tekst4 = `
                iloraz = ${iloraz} <br> `;
    }


    wynik.innerHTML = wynik_tekst4 + wynik_tekst3 + wynik_tekst2 + wynik_tekst1;

});