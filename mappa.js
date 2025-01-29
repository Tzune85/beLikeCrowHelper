// Inizializza la mappa
var mappa = L.map('mappa', {
    minZoom: -1,
    maxZoom: 1,
    center: [0, 0],
    zoom: -1,
    crs: L.CRS.Simple,
    doubleClickZoom: false
});

// Crea un'icona personalizzata
var iconaPersonalizzata = L.icon({
    iconUrl: '/img/corvo_steam2.jpeg', // Sostituisci con l'URL della tua immagine
    iconSize: [50, 50], // Sostituisci con le dimensioni della tua immagine
});

var tesoro = L.icon({
    iconUrl: '/img/tesoro.jpeg',
    iconSize: [30, 30]
})

// Calcola le dimensioni della tua immagine
var w = 1241; // larghezza dell'immagine
var h = 1749;  // altezza dell'immagine

// Imposta i limiti della mappa in base alle dimensioni dell'immagine
mappa.setMaxBounds(new L.LatLngBounds([
    [-h, -w],
    [h, w]
]));

// Aggiungi la tua immagine come layer della mappa
L.imageOverlay('/img/mappa.jpg', [[-h, -w], [h, w]]).addTo(mappa);

// Aggiungi un marker che utilizza l'icona personalizzata
var marker = L.marker([0, 0], {
    icon: iconaPersonalizzata,
    draggable: true
}).addTo(mappa);


// Definisci cambiaModalita come una funzione globale
window.cambiaModalita = function() {
    cancellazione = !cancellazione;
    // Aggiorna il testo del pulsante
    document.getElementById('pulsante').innerText = cancellazione ? 'Modalità: Cancellazione' : 'Modalità: Aggiunta';
}

// Aggiungi un gestore di eventi per i clic sulla mappa
mappa.on('click', function(e) {
    // Crea un nuovo marker al punto cliccato
    var marker = L.marker(e.latlng, {
        icon: tesoro,
        draggable: true
    }).addTo(mappa);

    // Aggiungi un gestore di eventi per i clic del mouse sul marker
    marker.on('mousedown', function(e) {
        if (e.originalEvent.altKey) {
            // Se il tasto Alt è premuto, rimuovi il marker dalla mappa
            mappa.removeLayer(this);
        }
    });
});



