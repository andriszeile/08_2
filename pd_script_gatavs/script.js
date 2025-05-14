// Maina apraksta elementa fonu uz gaiši zilu
function mainitFonuu() {
    document.getElementById("info").style.backgroundColor = "#cceeff";
}

// Parāda lietotāja ievadīto tekstu zem pogas
function paraditTekstu() {
    let ievade = document.getElementById("ievadesLauks").value;
    document.getElementById("rezultats").textContent = ievade;
}

// Palielina apraksta teksta izmēru
function palielinatTekstu() {
    document.getElementById("skolasApraksts").style.fontSize = "24px"; // vai cita vērtība pēc izvēles
}
