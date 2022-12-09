const a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)
    wynik.innerHTML = ``
    let tab = []
    for (let p=0; p<0; p++)
        tab[p]=[];

    for (let i=0; i<a; i++){
        for (let j=0; j<a; j++){
            if (i===j)
                wynik.innerHTML += tab[i,j] = "1"
            else
                wynik.innerHTML += "0"
        }
        wynik.innerHTML += `<br>`
    }
})