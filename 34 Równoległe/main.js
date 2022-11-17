const row_a1 = document.querySelector('#row_a1');
const row_a2 = document.querySelector('#row_a2');
const row_b1 = document.querySelector('#row_b1');
const row_b2 = document.querySelector('#row_b2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a1 = parseInt(row_a1.value);
    let a2 = parseInt(row_a2.value);
    let b1=parseInt(row_b1.value);
    let b2=parseInt(row_b2.value);
    if(a1===a2){
    wynik.innerHTML = 'Dla równań y='+a1+ 'x+' +b1+ ' oraz y=' +a2+ 'x+' +b2+' proste są równoległe'
    } else {
        wynik.innerHTML = 'Dla równań y='+a1+ 'x+' +b1+ ' oraz y=' +a2+ 'x+' +b2+' proste nie są równoległe'
    }
})