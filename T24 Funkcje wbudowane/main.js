let today = new Date();  // tworzy nowy obiekt daty z aktualną datą i godziną

let year = today.getFullYear();  // zwraca rok (np. 2021)
let month = today.getMonth();  // zwraca miesiąc (od 0 do 11)
let day = today.getDate();  // zwraca dzień miesiąca (od 1 do 31)
let hours = today.getHours();  // zwraca godzinę (od 0 do 23)
let minutes = today.getMinutes();  // zwraca minuty (od 0 do 59)
let seconds = today.getSeconds();  // zwraca sekundy (od 0 do 59)

document.write(`Dzisiaj jest ${day}/${month+1}/${year} ${hours}:${minutes}:${seconds}`);
// wypisuje coś w stylu "Dzisiaj jest 3/1/2023 15:30:45")


let birthday = new Date("August 9, 2006 23:15:30");

// obliczenie ile lat ma osoba urodzona 19 sierpnia 1975 roku
let age = today.getFullYear() - birthday.getFullYear();
if (today.getMonth() < birthday.getMonth() || (today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate())) {
    age--;
}

document.write( `<br> Osoba urodzona 9 sierpnia 2006 roku ma ${age} lat.`);