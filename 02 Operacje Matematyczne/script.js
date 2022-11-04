let liczba_1 = parseInt(prompt("Podaj dowolną pierwszą liczbę","1"));
let liczba_2 = parseInt(prompt("Podaj dowolną drugą liczbę","1"));

let wynik_1 = liczba_1 + liczba_2
document.write(liczba_1 + "+" + liczba_2 + "=" + wynik_1 + "</br>");
let wynik_2 = liczba_1 - liczba_2
document.write(liczba_1 + "-" + liczba_2 + "=" + wynik_2 + "</br>");

let wynik_3 = liczba_1 * liczba_2
document.write(liczba_1 + "*" + liczba_2 + "=" + wynik_3 + "</br>");

if(liczba_2===0)
{
    let wynik_4 = "Nie dzielimy przez zero!"
    document.write(wynik_4 +"</br>");
}
else
{
    let wynik_4 = liczba_1 / liczba_2
    document.write(liczba_1 + "/" + liczba_2 + "=" + wynik_4 + "</br>");
}

