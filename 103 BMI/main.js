const waga = document.querySelector("#waga");
const wzrost = document.querySelector("#wzrost");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

function bmi(w, h) {
    let v = h / 100
    let wynik = w / Math.pow(v, 2)
    if (wynik < 16)
        return 'Wygłodzenie'
    else if (16 < wynik && wynik < 17)
        return 'Wyychudzenie'
    else if (17 <= wynik && wynik < 18.5)
        return 'Niedowaga'
    else if (18.5 <= wynik && wynik < 25)
        return 'Optimum'
    else if (25 <= wynik && wynik < 30)
        return 'Nadwaga'
    else if (30 <= wynik && wynik < 35)
        return 'Otyłość I stopnia'
    else if (35 <= wynik && wynik < 40)
        return 'Otyłość II stopnia'
    else
        return 'Otyłość III stopnia'
}


btn.addEventListener('click', function () {
    w = parseInt(waga.value);
    h = parseInt(wzrost.value);
    wynik.innerHTML = "Twoje wynik BMI: " + bmi(w, h)
})