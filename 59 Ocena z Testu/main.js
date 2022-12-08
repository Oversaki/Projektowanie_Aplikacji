const numer = document.querySelector('#numer');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let p = parseInt(numer.value);
    switch (true) {
        case (p < 50):
            wynik.innerHTML = 'Twoja ocena to 2.'
            break;
        case (p >= 50 && p <= 59):
            wynik.innerHTML = 'Twoja ocena to 3.'
            break;
        case (p >= 60 && p <= 69) :
            wynik.innerHTML = 'Twoja ocena to 3,5.'
            break;
        case (p >= 70 && p <= 79) :
            wynik.innerHTML = 'Twoja ocena to 4.'
            break;
        case (p >= 80 && p <= 89) :
            wynik.innerHTML = 'Twoja ocena to 4,5.'
            break;
        case (p >= 90 && p <= 100) :
            wynik.innerHTML = 'Twoja ocena to 5.'
            break;
        case (p > 100 || p < 0) :
            wynik.innerHTML = 'Podaj prawidłową ocenę.'
            break;
    }
})