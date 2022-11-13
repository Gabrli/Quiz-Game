function liczenie() {
    var dzisiaj = new Date();

    var godz = dzisiaj.getHours();
    var min = dzisiaj.getMinutes();
    var sek = dzisiaj.getSeconds();

    document.getElementById("zegar").innerHTML = godz +':'+ min +':'+ sek;
    setTimeout(liczenie, 1000);
};