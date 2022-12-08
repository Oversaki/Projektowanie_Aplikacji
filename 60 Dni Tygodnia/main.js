const numer = document.querySelector('#numer');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let d = parseInt(numer.value);
    switch(d){
        case 1 :
            wynik.innerHTML = 'Poniedziałek'
            break;
        case 2 :
            wynik.innerHTML = 'Wtorek'
            break;
        case 3 :
            wynik.innerHTML = 'Środa'
            break;
        case 4 :
            wynik.innerHTML = 'Czwartek'
            break;
        case 5 :
            wynik.innerHTML = 'Piątek'
            break;
        case 6 :
            wynik.innerHTML = 'Sobota'
            break;
        case 7 :
            wynik.innerHTML = 'Niedziela'
            break;
        default:
            wynik.innerHTML = 'Błąd, liczba spoza zakresu.'
            break;
    }
})