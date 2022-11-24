const imie = document.querySelector('#imie');
const wiek = document.querySelector('#wiek');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
     //let wynik_tekst = "<h1>Witaj na mojej stronie</h1><br> Masz na imię:" + imie.value + "<br>Masz:" + wiek.value + "lat.";
    wynik.innerHTML = `<h1>Cześć ${imie.value} </h1> Miło cię widzieć na mojej stronie. Szczególnie, że masz ${wiek.value} lat.`;
      console.log(`Cześć ${imie.value} tak naprawdę wcale się nie cieszę.`);

});

