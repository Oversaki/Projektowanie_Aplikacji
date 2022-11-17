const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value);
    if(a<0) {
        let bez = a*(-1);
        wynik.innerHTML = 'Wartość bezwzględna '+a+'  wynosi '+bez+' ';
    } else {
        wynik.innerHTML = 'Wartość bezwzględna '+a+' wynosi '+a+' ';
    }
})