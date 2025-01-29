document.getElementById('pescaButton').addEventListener('click', function() {
    var semi = {
        'Cuori': '<span class="seme cuori">♥</span>',
        'Quadri': '<span class="seme quadri">♦</span>',
        'Fiori': '<span class="seme fiori">♣</span>',
        'Picche': '<span class="seme picche">♠</span>'
    };
    var valori = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Fante', 'Regina', 'Re', 'Asso'];
    var mazzo = Object.entries(semi).flatMap(([nome, simbolo]) => valori.map(valore => valore + " di " + simbolo));

    for (var i = 0; i < 4; i++) {
        mazzo.push('Jolly')
    }
    var cartaPescata = mazzo[Math.floor(Math.random() * mazzo.length)];
    document.getElementById('cartaPescata').innerHTML = "Hai pescato il " + cartaPescata;
    document.getElementById('cartaPescata').classList.add('flex');
    document.getElementById('storico').classList.add('flex');

    // Crea un elemento div temporaneo e imposta il suo innerHTML come cartaPescata
    var divTemp = document.createElement('div');
    divTemp.innerHTML = cartaPescata;

    // Ottieni solo il testo contenuto all'interno dell'elemento div (senza gli elementi span)
    var cartaPescataSenzaSpan = divTemp.textContent || divTemp.innerText;        
    
    var cimitero = document.getElementById('cimitero')
    var cartePescate = cimitero.value.split('\n'); // Ottieni tutte le carte pescate come un array
    // Aggiungi la nuova carta all'inizio dell'array
    cartePescate.unshift(cartaPescataSenzaSpan);
    // Se ci sono più di 10 carte, rimuovi la carta più vecchia
    if (cartePescate.length > 10) {
        cartePescate.pop();
    }
    // Aggiorna il cimitero con le ultime 10 carte pescate
    cimitero.value = cartePescate.join('\n');
    function aggiornaAltezza() {        
        cimitero.style.height = 'auto';
        cimitero.style.height = cimitero.scrollHeight + 'px';
    }
    cimitero.addEventListener('input', aggiornaAltezza);
    

    aggiornaAltezza();

    }) 