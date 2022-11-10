// console.log('liczby pseudolosowe')
//let min = 2;
//let max = 6;
//let w1 = Math.floor(Math.random()*(max-min+1))+min;
//let w2 = Math.floor(Math.random()*(max-min+1))+min;
//let w3 = Math.floor(Math.random()*(max-min+1))+min;
//let w4 = Math.floor(Math.random()*(max-min+1))+min;
//let w5 = Math.floor(Math.random()*(max-min+1))+min;
//console.log('w1 = ' +w1)
//console.log('w2 = ' +w2)
//console.log('w3 = ' +w3)
//console.log('w4 = ' +w4)
//console.log('w5 = ' +w5)

const minimalna = document.querySelector('#minimalna');
const maksymalna = document.querySelector('#maksymalna');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let min = parseInt(minimalna.value);
    let max = parseInt(maksymalna.value);
    let wynik_tekst = '';
    let odp1 = Math.floor(Math.random()*(max-min+1))+min;
    let odp2 = Math.floor(Math.random()*(max-min+1))+min;
    let odp3= Math.floor(Math.random()*(max-min+1))+min;
    let odp4= Math.floor(Math.random()*(max-min+1))+min;
    let odp5= Math.floor(Math.random()*(max-min+1))+min;
    let suma = odp1+odp2+odp3+odp4+odp5;
    let iloczyn = odp1*odp2*odp3*odp4*odp5;
    let srednia = (odp1+odp2+odp3+odp4+odp5)/5;
    wynik_tekst+= `Liczba 1 : ${odp1}
 <br> Liczba 2 : ${odp2}
  <br> Liczba 3 : ${odp3}
   <br> Liczba 4 :  ${odp4} 
   <br>  Liczba 5 :${odp5}
    <br> Suma : ${suma}
      <br> Iloczyn ${iloczyn}
      <br>  Srednia ${srednia}` ;
    wynik.innerHTML = wynik_tekst;
})