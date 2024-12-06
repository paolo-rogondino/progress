
const images = [
    "./img/carosello1.png",
    "./img/carosello2.png",
    "./img/carosello3.png"
];
let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");

function nextImage() {
    // Aggiungi classe per la dissolvenza in uscita
    caroselloImage.classList.add("fade-out");

    // Dopo 1s (il tempo della transizione), cambia immagine e rimuovi la classe
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Cambia l'indice ciclicamente
        caroselloImage.src = images[currentIndex];
        caroselloImage.classList.remove("fade-out");
    }, 1000); // Tempo della transizione
}

// Avvia il carosello automatico
window.onload = function() {
    setInterval(nextImage, 3000); // Cambia immagine ogni 3 secondi
};

// Funzione per aprire/chiudere il menu ad hamburger
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

// Funzione per nascondere/mostrare il contenitore della "tabella"
function toggleTable(idTabella) {
    const table = document.getElementById(idTabella);
    // Se il contenitore è visibile, lo nasconde, altrimenti lo mostra
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
}


function validateForm() {
    const email = document.getElementById('email').value.trim();
    
    // Pattern per controllare la presenza di "@" e di un'estensione valida
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|it|org|net|edu)$/;

    // Validazione dell'email
    if (!emailPattern.test(email)) {
      alert("Inserisci un'email valida (es: esempio@dominio.com). Deve contenere una '@' e un'estensione valida come .it, .com, ecc.");
      return false;
    }

    // Se tutto è corretto
    allert("il tuo messaggio è stato inviato correttamente");
    return true;
    
  }