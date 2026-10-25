# Дивљи час — Енциклопедија · La hora salvaje — Enciclopedia

Sitio estilo Wikipedia sobre la saga **Дикий час / Дивљи час / La hora salvaje** de Robert Fader.
Solo dos idiomas: **español** y **serbio (cirílico)**; el botón ES/СР de la cabecera cambia todo el sitio.

Es un sitio estático (no necesita compilación): basta con publicar la rama en GitHub Pages
(Settings → Pages → rama `main`, carpeta raíz).

## Estructura

```
index.html                      la wiki (portada, artículos, categorías, búsqueda)
assets/app.js                   motor: rutas #/a/<id>, #/c/<categoría>, #/villano, #/buscar/<texto>
assets/style.css                estilo
data/articulos-*.js             artículos por categoría (personajes, lugares, enemigos,
                                conceptos, escenas, analogias, libros)
data/villano.js                 «Villano potencial de la semana» (actual + archivo)
img/                            ilustraciones tomadas de litmir
```

## Añadir o editar un artículo

Cada artículo es un objeto en `data/articulos-<categoría>.js`:

```js
{
  id: 'natasa', cat: 'personajes',
  img: 'img/personajes/natasa.jpg', cap: { es: 'Pie', sr: 'Потпис' },
  t: { es: 'Título', sr: 'Наслов' },
  sum: { es: 'Resumen corto', sr: 'Кратак опис' },
  info: { es: [['Campo', 'Valor']], sr: [['Поље', 'Вредност']] },   // ficha lateral
  es: `<p>Texto…</p><h2>Sección</h2>…`,
  sr: `<p>Текст…</p><h2>Одељак</h2>…`,
  see: ['luis', 'zmaj']                                             // «Véase también»
}
```

Enlaces internos: `[[id]]` o `[[id|texto]]`. Con 3 o más `<h2>` se genera el índice automáticamente.
`featured: true` hace que el artículo pueda salir como «Artículo destacado» en la portada (rota cada semana).

## Villano potencial de la semana

La página existe pero todavía no tiene ninguna persona publicada (`actual: null` en `data/villano.js`).
La plantilla del objeto está documentada en ese mismo archivo. Al cambiar de semana, el villano
anterior se mueve a `archivo`.
