const moodSelect = document.getElementById("moodSelect");
const companySelect = document.getElementById("companySelect");
const momentButtons = document.querySelectorAll(".toggle-btn");
const form = document.getElementById("vibeForm");
const surpriseBtn = document.getElementById("surpriseBtn");
const regenBtn = document.getElementById("regenBtn");
const backBtn = document.getElementById("backBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const resultCard = document.getElementById("resultCard");
const beerLevel = document.querySelector(".beer-level");

const titleEl = document.getElementById("vibeTitle");
const dishEl = document.getElementById("dish");
const dishReasonEl = document.getElementById("dishReason");
const playlistNameEl = document.getElementById("playlistName");
const tracksEl = document.getElementById("tracks");
const finalLineEl = document.getElementById("finalLine");
const easterEggEl = document.getElementById("easterEgg");

const moods = ["Relajado", "Festivo", "Curioso", "Intenso", "Romántico", "Caótico-bueno"];
const moments = ["Tarde", "Noche"];
const companies = ["Solo", "Pareja", "Amigos", "Gente nueva"];

const dishes = [
  { name: "Sepia a la plancha con romesco cítrico", reason: "Salinidad suave y brasas para un ritmo tranquilo.", moods: ["Relajado", "Curioso"], moments, companies },
  { name: "Arroz meloso de setas y romero", reason: "Bosque mediterráneo en cucharadas, ideal para charlar sin prisa.", moods: ["Relajado", "Romántico"], moments: ["Tarde", "Noche"], companies: ["Pareja", "Amigos", "Solo"] },
  { name: "Bao crujiente de sepia con kimchi suave", reason: "Chispa picante para encender la curiosidad.", moods: ["Curioso", "Festivo", "Caótico-bueno"], moments: ["Noche"], companies: ["Amigos", "Gente nueva", "Pareja"] },
  { name: "Cocas de pisto con anchoa y albahaca", reason: "Huerta y mar bailando en cada bocado.", moods: ["Festivo", "Relajado"], moments, companies },
  { name: "Patatas bravas con mojo de almendra tostada", reason: "Crujido y humo ligero para un brindis animado.", moods: ["Festivo", "Caótico-bueno"], moments, companies },
  { name: "Bocadillo de figatell con mostaza de miel", reason: "Intenso, jugoso y perfecto para largas tertulias.", moods: ["Intenso", "Festivo"], moments: ["Noche"], companies: ["Amigos", "Gente nueva", "Solo"] },
  { name: "Tabla de quesos de cabra, romero y miel de azahar", reason: "Dulzor sutil y aroma floral para miradas largas.", moods: ["Romántico", "Relajado"], moments, companies },
  { name: "Clóchinas al vapor con hierbabuena", reason: "Refrescante y breve, como un secreto de barra.", moods: ["Curioso", "Relajado"], moments: ["Tarde"], companies },
  { name: "Pulpo a la brasa con pimentón ahumado", reason: "Golpe ahumado que pide un brindis valiente.", moods: ["Intenso", "Caótico-bueno"], moments: ["Noche"], companies },
  { name: "Brioche de pastrami con pepino encurtido", reason: "Contrastes dulces y ácidos que invitan a seguir la noche.", moods: ["Caótico-bueno", "Festivo"], moments, companies },
  { name: "Tosta de burrata con tomate confitado y aceite de albahaca", reason: "Cremoso, fresco y listo para relajarse.", moods: ["Relajado", "Romántico"], moments, companies },
  { name: "Pastisset tibio de boniato y canela", reason: "Final dulce y amable que abraza el atardecer.", moods: ["Romántico", "Relajado"], moments: ["Tarde"], companies },
];

const playlistStyles = [
  {
    name: "Bruma Ámbar",
    moods: ["Relajado", "Romántico"],
    moments,
    vibe: "indie mediterráneo",
    tracks: [
      "Remei Peralta – Salitre lento",
      "Puerto Norte – Luz de barra",
      "Litoral Club – Arena fina",
      "Metrópolis Sur – Cables de cobre",
      "Isla Delta – Reflejos en la acequia",
      "Barra 37 – Copas de ámbar",
      "Calma Roja – Ventanas abiertas",
      "Orilla Suave – Silencio eléctrico",
      "Marina Baja – Postales del puerto",
      "Plaza Daurada – Bancos de piedra",
    ],
  },
  {
    name: "Latido Turia",
    moods: ["Festivo", "Caótico-bueno"],
    moments: ["Noche"],
    vibe: "techno light con alma",
    tracks: [
      "Neón Largo – Rieles",
      "Sombra Clara – Flashback nocturno",
      "Ritmo 21 – Pista de fuego",
      "Túnel Ámbar – Llamarada",
      "Valvulina – Bitácora 3AM",
      "Cobalto – Borde del río",
      "Club Barraca – Lluvia de luces",
      "Trébol – Acelerador suave",
      "Línea 5 – Pasos de acero",
      "Solsticio – Eco de almacén",
    ],
  },
  {
    name: "Marea Curiosa",
    moods: ["Curioso"],
    moments,
    vibe: "electrónica suave + rarezas",
    tracks: [
      "Cinta Seda – Cassette en espiral",
      "Vector Azul – Pasaje secreto",
      "Jardín Beta – Semillas sintéticas",
      "Órbita Menor – Faros de niebla",
      "Cuarzo – Ruta interior",
      "Brillo Lento – Fósforo",
      "Nube Aérea – Crujido dulce",
      "Pingüino 808 – Equilibrio",
      "Ciudad Hex – Lámpara de mercurio",
      "Campo Magnético – Puerta dos",
    ],
  },
  {
    name: "Jazz de Azotea",
    moods: ["Relajado", "Romántico", "Curioso"],
    moments: ["Noche"],
    vibe: "jazz downtempo",
    tracks: [
      "Trío Farola – Niebla en Ruzafa",
      "Silbido Lunar – Terraza 12",
      "Blue Raval – Copa inclinada",
      "La Azotea – Cuarto intento",
      "Clara & Combo – Saxo en la escalera",
      "Viento Norte – Techo mojado",
      "Río Final – Puente lento",
      "Dúo Mármol – Sombras largas",
      "Hotel Verde – Timbre cálido",
      "Café Turia – Lluvia breve",
    ],
  },
  {
    name: "Rumba Óxido",
    moods: ["Festivo", "Caótico-bueno", "Intenso"],
    moments,
    vibe: "rumba eléctrica",
    tracks: [
      "La Bulla – Palmas de hierro",
      "Bronce y Sal – Callejón",
      "Rita Chispa – Tacón torcido",
      "Caloret – Tarde de fallas",
      "Los Piques – Chispa en la mesa",
      "Gresca Fina – Kiosko 24h",
      "Barandilla – Brindis al bordillo",
      "Gato de Azotea – Lluvia naranja",
      "Cuerda Floja – Faro del mercado",
      "Banda del Río – Puente colgante",
    ],
  },
  {
    name: "Lo-fi al cauce",
    moods: ["Relajado", "Curioso"],
    moments: ["Tarde"],
    vibe: "lo-fi para pasear",
    tracks: [
      "Bici Blanca – Pedaleo lento",
      "Zoco 2000 – Mercadillo sonoro",
      "Piedra Lisa – Cauce vacío",
      "Luz de Asfalto – Brillo naranja",
      "Lado A – Cinta gastada",
      "Herbari – Plantas en loop",
      "Pared Sur – Azul grafiti",
      "Puente Seco – Sombras largas",
      "Giro 33 – Carril suave",
      "Río Interior – Mapa en mano",
    ],
  },
];

const finalLines = {
  Relajado: [
    "El Turia corre lento y tu noche también.",
    "Respira hondo: el cauce es una hamaca de piedra.",
  ],
  Festivo: [
    "La ciudad vibra y tu copa marca el ritmo.",
    "Luces ámbar y risas que no miran el reloj.",
  ],
  Curioso: [
    "Cada esquina es un guiño, cada sorbo una pista.",
    "Explorar también es brindar por lo que no esperas.",
  ],
  Intenso: [
    "Baja el telón, sube el volumen: el plan ya arde.",
    "Esta noche no hay medias tintas, solo historias fuertes.",
  ],
  "Romántico": [
    "El aire huele a azahar y promesas pequeñas.",
    "Noche de luces bajas y palabras que brillan poco a poco.",
  ],
  "Caótico-bueno": [
    "Improvisa, que la ciudad premia los desvíos.",
    "Un brindis al caos amable que acaba en anécdota.",
  ],
};

let currentParams = { mood: "Relajado", moment: "Tarde", company: "Solo" };
let currentSeed = Date.now();
let lastSignature = "";

const randomSeed = () => Math.floor(Math.random() * 2147483646) + 1;

const lcg = (seed) => {
  let m = 2147483647;
  let a = 48271;
  let state = seed % m;
  return () => {
    state = (a * state) % m;
    return state / m;
  };
};

const pick = (arr, rand) => arr[Math.floor(rand() * arr.length)];

const sample = (arr, count, rand) => {
  const copy = [...arr];
  const out = [];
  while (out.length < count && copy.length) {
    const idx = Math.floor(rand() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
};

const pickDish = (params, rand) => {
  const pool = dishes.filter(
    (d) =>
      d.moods.includes(params.mood) &&
      d.moments.includes(params.moment) &&
      d.companies.includes(params.company)
  );
  const fallback = dishes.filter((d) => d.moods.includes(params.mood));
  const base = pool.length ? pool : fallback.length ? fallback : dishes;
  return pick(base, rand);
};

const pickPlaylist = (params, rand) => {
  const pool = playlistStyles.filter(
    (p) =>
      p.moods.includes(params.mood) &&
      p.moments.includes(params.moment)
  );
  const fallback = playlistStyles.filter((p) => p.moods.includes(params.mood));
  const base = pool.length ? pool : fallback.length ? fallback : playlistStyles;
  const choice = pick(base, rand);
  const tracks = sample(choice.tracks, 8, rand);
  return { name: `${choice.name} · ${choice.vibe}`, tracks };
};

const pickLine = (mood, rand) => {
  const options = finalLines[mood] || Object.values(finalLines).flat();
  return pick(options, rand);
};

const animateBeer = () => {
  beerLevel.classList.remove("filling");
  void beerLevel.offsetWidth; // restart animation
  beerLevel.classList.add("filling");
};

const renderResult = (result) => {
  titleEl.textContent = `${result.mood} · ${result.moment} · ${result.company}`;
  dishEl.textContent = result.dish.name;
  dishReasonEl.textContent = result.dish.reason;
  playlistNameEl.textContent = result.playlist.name;
  tracksEl.innerHTML = "";
  result.playlist.tracks.forEach((track) => {
    const li = document.createElement("li");
    li.textContent = track;
    tracksEl.appendChild(li);
  });
  finalLineEl.textContent = result.finalLine;
  const showEaster = result.mood === "Curioso" && result.company === "Gente nueva";
  easterEggEl.hidden = !showEaster;
  resultCard.hidden = false;
  animateBeer();
};

const buildResultText = (result) => {
  const tracksList = result.playlist.tracks.map((t, i) => `${i + 1}. ${t}`).join("\n");
  return (
    `Vibe Turia — ${result.mood} · ${result.moment} · ${result.company}\n` +
    `Maridaje: ${result.dish.name} (${result.dish.reason})\n` +
    `Playlist: ${result.playlist.name}\n${tracksList}\n` +
    `Texto: ${result.finalLine}`
  );
};

const generateResult = (params, seed) => {
  const rand = lcg(seed);
  const dish = pickDish(params, rand);
  const playlist = pickPlaylist(params, rand);
  const finalLine = pickLine(params.mood, rand);
  return { ...params, dish, playlist, finalLine, seed };
};

const ensureDifferent = (params) => {
  let seed = randomSeed();
  let attempt = generateResult(params, seed);
  let signature = JSON.stringify([attempt.dish.name, attempt.playlist.name, attempt.finalLine]);
  if (signature === lastSignature) {
    seed = randomSeed();
    attempt = generateResult(params, seed);
    signature = JSON.stringify([attempt.dish.name, attempt.playlist.name, attempt.finalLine]);
  }
  lastSignature = signature;
  currentSeed = seed;
  return attempt;
};

const requireFields = () => {
  if (!moodSelect.value || !companySelect.value) {
    alert("Elige estado de ánimo y compañía para seguir.");
    return false;
  }
  return true;
};

const currentMoment = () => {
  const active = [...momentButtons].find((b) => b.classList.contains("active"));
  return active?.dataset.moment || "Tarde";
};

const setMoment = (moment) => {
  momentButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.moment === moment);
  });
};

const handleGenerate = (params) => {
  currentParams = params;
  const result = ensureDifferent(params);
  const text = buildResultText(result);
  renderResult(result);
  resultCard.dataset.clipboard = text;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!requireFields()) return;
  const params = {
    mood: moodSelect.value,
    moment: currentMoment(),
    company: companySelect.value,
  };
  handleGenerate(params);
});

momentButtons.forEach((btn) => {
  btn.addEventListener("click", () => setMoment(btn.dataset.moment));
});

surpriseBtn.addEventListener("click", () => {
  const rand = lcg(randomSeed());
  const mood = pick(moods, rand);
  const moment = pick(moments, rand);
  const company = pick(companies, rand);
  moodSelect.value = mood;
  companySelect.value = company;
  setMoment(moment);
  handleGenerate({ mood, moment, company });
});

regenBtn.addEventListener("click", () => {
  handleGenerate({ ...currentParams });
});

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
  } else {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
};

copyBtn.addEventListener("click", async () => {
  const text = resultCard.dataset.clipboard || "";
  if (!text) return;
  try {
    await copyText(text);
    copyBtn.textContent = "Copiado";
    setTimeout(() => (copyBtn.textContent = "Copiar resultado"), 1200);
  } catch (e) {
    copyBtn.textContent = "No pudimos copiar";
  }
});

shareBtn.addEventListener("click", async () => {
  const text = resultCard.dataset.clipboard || "";
  if (!text) return;
  if (navigator.share) {
    try {
      await navigator.share({ title: "Vibe Turia", text });
    } catch (err) {
      // usuario canceló, no hacemos nada
    }
  } else {
    await copyText(text);
    shareBtn.textContent = "Copiado para compartir";
    setTimeout(() => (shareBtn.textContent = "Compartir"), 1200);
  }
});

// Estado inicial
setMoment("Tarde");
resultCard.hidden = true;
