const row_a1 = document.querySelector('#row_a1');
const row_a2 = document.querySelector('#row_a2');
const row_b1 = document.querySelector('#row_b1');
const row_b2 = document.querySelector('#row_b2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a1 = parseFloat(row_a1.value);
    let a2 = parseFloat(row_a2.value);
    let b1=parseFloat(row_b1.value);
    let b2=parseFloat(row_b2.value);
    if(a1*a2===-1){
        wynik.innerHTML = 'Dla równań y='+a1+ 'x+' +b1+ ' oraz y=' +a2+ 'x+' +b2+' proste są prostopadłe'
    } else {
        wynik.innerHTML = 'Dla równań y='+a1+ 'x+' +b1+ ' oraz y=' +a2+ 'x+' +b2+' proste nie są prostopadłe'
    }
})