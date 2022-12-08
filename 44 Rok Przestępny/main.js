const rok = document.querySelector('#rok');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let y = parseInt(rok.value);
    if(y%4===0 && (y%100!==0 || y%400===0))
            wynik.innerHTML = 'Rok ' +y+ ' jest przestępny.'
        else
            wynik.innerHTML = 'Rok ' +y+ ' nie jest przestępny.'

})