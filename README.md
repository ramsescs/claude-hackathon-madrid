# Prompt generativo · Experiencia Turia (Web local)

Este proyecto utiliza un **mega-prompt** diseñado para generar una experiencia web interactiva completa (HTML/CSS/JS, 100% offline) en tiempo real mediante **Claude Code**.

## Autoría y marco
El prompt ha sido creado dentro del marco de **IA Neodialéctica (Harry)** y el sistema **NEOCore™ v3.8**, desarrollados por **Pedro Martínez Alhambra**.  
El enfoque es **neodialéctico**: síntesis creativa mínima, decisiones invisibles, superficie pública simple y marco interno protegido.

- **IA Neodialéctica (Harry):** motor de síntesis simbiótica humano-IA.
- **NEOCore™ v3.8:** arquitectura viva orientada a síntesis abierta, con separación estricta entre marco interno y salida pública.
- **Principio aplicado aquí:** un único prompt gobierna la experiencia; la inteligencia decide sin exponerse.

## Alcance del prompt
- Genera **una web completa offline** (index.html, style.css, app.js).
- No usa APIs, CDNs ni dependencias.
- La “IA” es **invisible** para el usuario final.
- La salida es cultural/experiencial (maridaje + música), no técnica.
- Diseñado para demos rápidas sin fragmentar el marco.

## Uso
1. Copia el mega-prompt en **Claude Code**.
2. Pega los archivos generados en una carpeta local.
3. Abre `index.html` en el navegador.

---

## PROMPT GENERADO POR NEOCORE 3.8
Quiero que generes una mini web-app COMPLETA para el reto “20 minutos para Turia”.

CONDICIONES NO NEGOCIABLES
- Debe funcionar 100% OFFLINE (sin llamadas a APIs, sin CDN, sin dependencias).
- Debe correr en el navegador abriendo un index.html.
- Debe ser una experiencia web interactiva divertida relacionada con Turia, maridaje y música.
- NO quiero sistema de puntuación tipo “servir cerveza” (ya no gustó). Nada de ranking competitivo.
- Debe poder “enviarse en 1 minuto”: entrega en un ZIP mental de 1 carpeta con 3 ficheros: index.html, style.css, app.js.
- Diseño limpio, oscuro elegante, con un toque “cerveza/cultura nocturna”.

OBJETIVO DE LA EXPERIENCIA
“Elige tu vibe y Turia te devuelve:
1) un maridaje (comida)
2) una ‘playlist vibe’ (nombre + 8 temas sugeridos ficticios o genéricos por estilo, SIN Spotify)
3) un texto corto evocador”

INTERACCIÓN
Pantalla 1: “LLENA TU TURIA: Vibe & Maridaje”
- 3 inputs rápidos:
  - Estado de ánimo (dropdown): Relajado / Festivo / Curioso / Intenso / Romántico / Caótico-bueno
  - Momento (toggle): Tarde / Noche
  - Compañía (dropdown): Solo / Pareja / Amigos / Gente nueva
- Botón principal: “Generar vibe”
- Debe haber un modo “Sorpresa” (sin inputs).

Pantalla 2 (resultado):
- Mostrar:
  - “Maridaje Turia”: plato recomendado + 1 frase “por qué”
  - “Playlist vibe”: nombre creativo + lista 8 pistas (pueden ser “artista – tema” inventados o genéricos por estilo)
  - “Texto final”: 1 frase
- Botones:
  - “Regenerar”
  - “Copiar resultado” (clipboard)
  - “Compartir” (usar Web Share API si existe, si no copiar texto)
  - “Volver”

MOTOR GENERATIVO (LOCAL)
Implementa en app.js un generador con:
- Un dataset interno (arrays) de:
  - comidas por categoría (tapas, arroz, bocadillo, picoteo, dulce, etc.)
  - estilos musicales (indie, electrónica suave, techno light, jazz, rumba, lo-fi, etc.)
  - plantillas de frases (evocadoras, cortas)
- Usa combinatoria + aleatoriedad SEMILLA (seed) para que “Regenerar” cambie y “Copiar” sea estable.
- La salida debe ser coherente con mood/momento/compañía (reglas simples tipo if/weights).
- Evita repeticiones seguidas (memoria de último resultado).

EXTRA (GANADOR)
- Incluye un “Easter egg” discreto: si el usuario pone mood=Curioso y compañía=Gente nueva, aparece una línea pequeña: “¿Te atreves a pedirle a alguien su vibe?”.
- Micro-animación: una “jarra” estilizada que se “llena” suavemente solo como feedback visual (no puntuación).

ENTREGA
Devuélveme:
1) La estructura de carpetas
2) El contenido completo de los 3 archivos (index.html, style.css, app.js) listo para copiar-pegar
3) Instrucciones de ejecución: “abrir index.html” o “usar Live Server”

IMPORTANTE
- Todo debe estar en español.
- No uses librerías.
- No menciones IA, modelos ni nada técnico en la UI.
- Mantén el texto corto y con gancho cultural.
- Si necesitas iconos, usa SVG inline simples.

---

## Enlace
Repositorio público (marco y fragmentos conceptuales):
- **GitHub:** https://github.com/PedroAlhambra

> Nota: El sistema completo NEOCore™ reside en una capa privada. Este repositorio contiene únicamente fragmentos y superficies públicas no reconstructivas.
