const CARS = [
  'vuoto',
  'FIAT UNO STRADALE 4 PORTE',
  'FIAT UNO CARABINIERI 4 PORTE',
  'FIAT UNO POLIZIA 4 PORTE',
  'FIAT TIPO POLIZIA MUNICIPALE TORINO E FIAT TIPO POLIZIA MUNICIPALE COMO',
  null,
  null, // 6 - vuoto
  null, // 7 - vuoto
  'FIAT TIPO POLIZIA',
  'FIAT UNO VIGILI DEL FUOCO',
  'FIAT TIPO ACI',
  null,
  'FIAT TIPO GUARDIA DI FINANZA',
  'FIAT PUNTO STRADALE',
  'FIAT PUNTO VIGILI DEL FUOCO',
  'FIAT PUNTO POLIZIA',
  'FIAT PUNTO CARABINIERI SENZA SIRENA',
  'FIAT PUNTO CARABINIERI',
  'FIAT PUNTO POLIZIA MUNICIPALE',
  'FIAT PUNTO 2 SERIE POLIZIA',
  'FIAT PUNTO 2 SERIE CARABINIERI',
  'FIAT SCUDO STRADALE',
  'FIAT SCUDO CARABINIERI',
  'FIAT SCUDO POLIZIA',
  'FIAT MULTIPLA TAXI',
  'FIAT MULTIPLA CARABINIERI',
  'FIAT BRAVA POLIZIA + 2 OMINI',
  'FIAT BRAVA CARABINIERI + 2 OMINI',
  'CELLULARE BLINDATO CARABINIERI',
  'CELLULARE BLINDATO POLIZIA',
  'BMW POLIZIA',
  'MITSUBISHI PICK UP POLIZIA',
  'FIAT MAREA BERLINA POLIZIA',
  'FIAT MAREA BERLINA POLIZIA LAMPEGGIANTE LUNGO',
  'FIAT MAREA STATION WAGON POLIZIA',
  'FIAT MAREA BERLINA CARABINIERI',
  'FIAT MAREA CROCE ROSSA ITALIANA',
  'FIAT MAREA STATION WAGON TAXI',
  'FIAT BRAVA TAXI',
  'ALFA ROMEO GTV CUP LIMITED EDITION',
  'ALFA ROMEO 156 STRADALE METALLO',
  'ALFA ROMEO 156 CARABINIERI',
  'ALFA ROMEO GTV SPIDER',
  'ALFA ROMEO GTV COUPE STRADALE',
  'ALFA ROMEO 166 COMANDO CORPO CARABINIERI',
  'ALFA ROMEO 156 GTA SPORT WAGON',
  'ALFA ROMEO 156 SPORT WAGON',
  'LAND ROVER DEFENDER CARABINIERI',
  'LAND ROVER DEFENDER ESERCITO ITALIANO',
  'LAND ROVER DEFENDER VIGILI DEL FUOCO',
  'LAND ROVER DEFENDER STRADALE',
  'LAND ROVER DEFENDER CROCE ROSSA ITALIANA',
  'LAND ROVER DEFENDER GUARDIA DI FINANZA',
  'PAPAMOBILE CON PAPA E AUTISTA',
  'FIAT BARCHETTA STRADALE',
  'ZIS ARMORED "STALIN"',
  'LANCIA Y',
  'FIAT PANDA STRADALE / FIAT PANDA VANETTE TELECOM',
  'FIAT PANDA VANETTE STRADALE',
  'FIAT PANDA CITY VAN',
  'FIAT PANDA CARABINIERI',
  'FIAT PANDA POLIZIA',
  'DUCATO FINESTRATO PASSO LUNGO POLIZIA + 2 OMINI',
  'DUCATO AMBULANZA POLIZIA',
  'DUCATO POLIZIA',
  'DUCATO FINESTRATO PASSO CORTO POLIZIA',
  'DUCATO AMBULANZA CARABINIERI',
  'DUCATO AMBULANZA ESERCITO ITALIANO',
  'DUCATO CARABINIERI SOMMOZZATORI + GOMMONE',
  'DUCATO CARABINIERI',
  'DUCATO FINESTRATO PASSO CORTO CARABINIERI',
  'DUCATO FINESTRATO PASSO LUNGO CARABINIERI + 2 OMINI',
  'DUCATO CARABINIERI STAZIONE MOBILE',
  'DUCATO VIGILI DEL FUOCO SOMMOZZATORI + GOMMONE',
  'DUCATO CROCE ROSSA ITALIANA',
  'DUCATO AMBULANZA',
  'DUCATO MAXI "HIRAMATSU"',
  'DUCATO STRADALE',
  'DUCATO FINESTRATO PASSO LUNGO STRADALE',
  'DUCATO FINESTRATO PASSO CORTO STRADALE',
  'FIAT 127 2 SERIE 5 PORTE TAXI',
  'FIAT 127 2 SERIE 5 PORTE CARABINIERI',
  'FIAT 127 2 SERIE 5 PORTE ESERCITO ITALIANO',
  'FIAT 127 2 SERIE 3 PORTE STRADALE',
  'FIAT 127 2 SERIE 5 PORTE STRADALE',
  'FIAT 127 2 SERIE 3 PORTE STRADALE',
  'FIAT FIORINO CARABINIERI',
  'FIAT FIORINO POLIZIA',
  'FIAT FIORINO STRADALE',
  'FIAT FIORINO PICK UP FERRARI',
  'FIAT FIORINO PICK UP CARABINIERI',
  'FIAT FIORINO PICK UP POLIZIA',
  'FIAT COUPE STRADALE',
  'FIAT COUPE CAMPIONATO TURISMO BUTTIERO N.3',
  'FIAT COUPE VERSIONE POLIZIA RALLY',
  'FIAT COUPE VERSIONE POLIZIA DI MONTECARLO',
  'FERRARI F40 SARTORI 1/43',
  'FERRARI F40 COLOMBO 1/43',
  'FERRARI F40 COLOMBO 1/18',
  'FERRARI F40 SARTORI 1/18',
  'PORSCHE 356 COUPE EVITA PERON 1/18',
  'PORSCHE 356 COUPE CARRERA 1/18',
  'FERRARI P3 SPA 1966 RESINA',
  'DUCATO FERRARI + CARRELLO + AUTO LIMITED EDITION',
  'Altri ancora, contatta info@giocher.it',
];

// Indici da skippare
const SKIP_INDEXES = new Set([0, 6, 7]);

/**
 * Crea il DOM di un singolo prodotto con lazy loading
 */
function createProductCard(index, title) {
  const wrapper = document.createElement('div');
  wrapper.className = 'container-product';

  // Skeleton placeholder visibile prima del caricamento
  const skeleton = document.createElement('div');
  skeleton.className = 'product-skeleton';

  const img = document.createElement('img');
  img.className = 'product';
  img.alt = title;
  img.dataset.src = `./product/${index}.png`; // lazy: src reale in data-src

  // Gestione errore immagine
  img.addEventListener('error', () => {
    img.style.opacity = '0';
    skeleton.remove();
  });

  img.addEventListener('load', () => {
    skeleton.remove();
    img.style.opacity = '1';
  });

  const label = document.createElement('a');
  label.className = 'title-product';
  label.textContent = title;

  wrapper.appendChild(skeleton);
  wrapper.appendChild(img);
  wrapper.appendChild(label);

  return wrapper;
}

/**
 * Avvia l'IntersectionObserver per il lazy loading
 */
function initLazyLoader() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          delete img.dataset.src;
        }
        obs.unobserve(img);
      });
    },
    {
      rootMargin: '200px 0px', // Precarica 200px prima che entri in viewport
      threshold: 0.01,
    }
  );

  return observer;
}

/**
 * Renderizza tutti i prodotti nel container
 */
function renderCatalog(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`[Catalog] Container #${containerId} non trovato`);
    return;
  }

  const observer = initLazyLoader();
  const fragment = document.createDocumentFragment(); // Unico reflow finale

  for (let i = 1; i < CARS.length; i++) {
    if (SKIP_INDEXES.has(i) || CARS[i] === null) continue;

    const card = createProductCard(i, CARS[i]);
    const img = card.querySelector('img');

    observer.observe(img); // Registra l'immagine al lazy loader
    fragment.appendChild(card);
  }

  container.appendChild(fragment); // Un solo append → un solo reflow
  console.log(`[Catalog] ${fragment.childNodes.length} prodotti renderizzati ✓`);
}

// — BOOT —
renderCatalog('innerqui');