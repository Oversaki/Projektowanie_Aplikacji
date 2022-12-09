const a = document.querySelector('#liczba_a');
const b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    wynik.innerHTML = `A - ilość znaków w wierszu: ` +liczba_a+
        `B - ilość wierszy: ` +liczba_b+ `<br>`
    for(let i = 0; i < b.value; i++) {
        for(let j = 0; j < a.value; j++) {
            wynik.innerHTML += `X`
        }
        wynik.innerHTML += `<br>`
    }
})