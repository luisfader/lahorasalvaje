/* Дивљи час — Енциклопедија / La hora salvaje — Enciclopedia
   Motor de la wiki: enrutado por hash, idioma ES/SR, búsqueda e índice. */
(function () {
  'use strict';

  var W = window.WIKI;
  var V = window.VILLANO;

  var UI = {
    es: {
      siteName: 'La hora salvaje',
      siteTag: 'La enciclopedia libre del universo Дикий час',
      searchPh: 'Buscar en la enciclopedia…',
      home: 'Portada', random: 'Artículo aleatorio', villain: 'Villano potencial',
      categories: 'Categorías', navigation: 'Navegación', languages: 'Idiomas',
      article: 'Artículo', talk: 'Discusión', read: 'Leer',
      contents: 'Contenido', seeAlso: 'Véase también', category: 'Categoría',
      from: 'De La hora salvaje, la enciclopedia libre del universo de Robert Fader',
      notFound: 'Este artículo todavía no existe.',
      welcome: 'Bienvenidos a La hora salvaje',
      welcomeSub: 'la enciclopedia del universo Дикий час · Дивљи час, que cualquiera puede leer.',
      articlesCount: 'artículos',
      news: 'Novedades', newsSub: 'Actualización del 30 de octubre de 2026: Venecia en ruso, el tango de Buenos Aires y la reina de la Vendimia.',
      featured: 'Artículo destacado', didYouKnow: '¿Sabías que…?', villainWeek: 'Villano potencial de la semana',
      books: 'Las novelas', browse: 'Explorar por categoría', readMore: 'Seguir leyendo →',
      results: 'Resultados de búsqueda para', noResults: 'No hay resultados.',
      footer: 'Enciclopedia de aficionados basada en las novelas de Robert Fader (Дикий час / Дивљи час). Ilustraciones: litmir. Contenido disponible en español y serbio.',
      updated: 'Actualizado', week: 'Semana', threat: 'Nivel de amenaza', archive: 'Villanos de semanas anteriores',
      why: 'Por qué sería un villano potente', powers: 'Poderes en el universo de La hora salvaje',
      nemesis: 'Cómo lo vencerían Luis y Natasha', facts: 'Lo que dicen las noticias', sources: 'Fuentes',
      realName: 'Persona real', role: 'Cargo / ocupación', alias: 'Alias de villano', element: 'Elemento',
      noVillain: 'Próximamente. Cada semana esta página presentará a una persona real de la actualidad y explicará, a partir de las noticias, por qué sería un villano temible en el universo de La hora salvaje: su alias, sus poderes, su nivel de amenaza y cómo lo vencerían Luis y Natasha.',
      cats: {
        personajes: 'Personajes', lugares: 'Lugares', enemigos: 'Enemigos', conceptos: 'Conceptos',
        escenas: 'Escenas fuertes', analogias: 'Analogías', libros: 'Novelas'
      },
      catDesc: {
        personajes: 'Héroes, aliados y testigos de la saga.',
        lugares: 'Ciudades, fortalezas, montañas y calles donde estalla la hora salvaje.',
        enemigos: 'Demonios, conspiradores, algoritmos y dioses que quisieron romper el mundo.',
        conceptos: 'Magia, objetos, fenómenos y organizaciones del universo.',
        escenas: 'Los momentos más intensos de las novelas.',
        analogias: 'Qué parte del mundo real se esconde detrás de cada monstruo.',
        libros: 'Todas las novelas de la saga.'
      }
    },
    sr: {
      siteName: 'Дивљи час',
      siteTag: 'Слободна енциклопедија универзума Дивљи час',
      searchPh: 'Претражи енциклопедију…',
      home: 'Почетна', random: 'Насумичан чланак', villain: 'Потенцијални зликовац',
      categories: 'Категорије', navigation: 'Навигација', languages: 'Језици',
      article: 'Чланак', talk: 'Разговор', read: 'Читај',
      contents: 'Садржај', seeAlso: 'Види још', category: 'Категорија',
      from: 'Из Дивљег часа, слободне енциклопедије универзума Роберта Фадера',
      notFound: 'Овај чланак још не постоји.',
      welcome: 'Добро дошли у Дивљи час',
      welcomeSub: 'енциклопедију универзума Дикий час · Дивљи час коју свако може да чита.',
      articlesCount: 'чланака',
      news: 'Новости', newsSub: 'Ажурирање од 30. октобра 2026: Венеција на руском, танго из Буенос Ајреса и краљица Вендимије.',
      featured: 'Изабрани чланак', didYouKnow: 'Да ли сте знали…?', villainWeek: 'Потенцијални зликовац недеље',
      books: 'Романи', browse: 'Прегледај по категоријама', readMore: 'Читај даље →',
      results: 'Резултати претраге за', noResults: 'Нема резултата.',
      footer: 'Навијачка енциклопедија заснована на романима Роберта Фадера (Дикий час / Дивљи час). Илустрације: litmir. Садржај је доступан на српском и шпанском.',
      updated: 'Ажурирано', week: 'Недеља', threat: 'Ниво претње', archive: 'Зликовци претходних недеља',
      why: 'Зашто би био моћан зликовац', powers: 'Моћи у универзуму Дивљег часа',
      nemesis: 'Како би га победили Луис и Наташа', facts: 'Шта кажу вести', sources: 'Извори',
      realName: 'Стварна особа', role: 'Функција / занимање', alias: 'Зликовачко име', element: 'Елемент',
      noVillain: 'Ускоро. Сваке недеље ова страница ће представити једну стварну особу из актуелности и објаснити, на основу вести, зашто би била страшан зликовац у универзуму Дивљег часа: њено зликовачко име, моћи, ниво претње и како би је победили Луис и Наташа.',
      cats: {
        personajes: 'Ликови', lugares: 'Места', enemigos: 'Непријатељи', conceptos: 'Појмови',
        escenas: 'Снажне сцене', analogias: 'Аналогије', libros: 'Романи'
      },
      catDesc: {
        personajes: 'Јунаци, савезници и сведоци саге.',
        lugares: 'Градови, тврђаве, планине и улице у којима избија дивљи час.',
        enemigos: 'Демони, завереници, алгоритми и богови који су хтели да сломе свет.',
        conceptos: 'Магија, предмети, појаве и организације универзума.',
        escenas: 'Најснажнији тренуци романа.',
        analogias: 'Који део стварног света се крије иза сваког чудовишта.',
        libros: 'Сви романи саге.'
      }
    }
  };

  var CATS = ['personajes', 'enemigos', 'lugares', 'conceptos', 'escenas', 'analogias', 'libros'];
  var CAT_ROUTE = { personajes: 'personajes', enemigos: 'enemigos', lugares: 'lugares', conceptos: 'conceptos', escenas: 'escenas', analogias: 'analogias', libros: 'libros' };

  var lang = 'es';
  try { lang = localStorage.getItem('hs-lang') || 'es'; } catch (e) {}
  var m = location.search.match(/[?&]lang=(es|sr)/);
  if (m) lang = m[1];
  if (lang !== 'es' && lang !== 'sr') lang = 'es';

  var byId = {};
  W.articles.forEach(function (a) { byId[a.id] = a; });

  function t(k) { return UI[lang][k]; }
  function L(o) { return o == null ? '' : (typeof o === 'string' ? o : (o[lang] != null ? o[lang] : o.es)); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(s, r) { return (r || document).querySelector(s); }

  // [[id]] o [[id|texto]] → enlace interno
  function links(html) {
    return String(html).replace(/\[\[([a-z0-9\-]+)(?:\|([^\]]+))?\]\]/g, function (_, id, label) {
      var a = byId[id];
      if (!a) return '<a class="redlink" title="' + esc(id) + '">' + (label || id) + '</a>';
      return '<a href="#/a/' + id + '">' + (label || L(a.t)) + '</a>';
    });
  }
  function plain(html) { return String(html).replace(/<[^>]+>/g, ' ').replace(/\[\[([a-z0-9\-]+)(?:\|([^\]]+))?\]\]/g, function (_, id, l) { return l || (byId[id] ? L(byId[id].t) : id); }); }
  function norm(s) {
    s = String(s).toLowerCase();
    // transliteración cirílico → latín para buscar en ambos alfabetos
    var map = { 'а':'a','б':'b','в':'v','г':'g','д':'d','ђ':'dj','е':'e','ж':'z','з':'z','и':'i','ј':'j','к':'k','л':'l','љ':'lj','м':'m','н':'n','њ':'nj','о':'o','п':'p','р':'r','с':'s','т':'t','ћ':'c','у':'u','ф':'f','х':'h','ц':'c','ч':'c','џ':'dz','ш':'s','й':'j','ы':'i','э':'e','ю':'ju','я':'ja','ё':'e','ь':'','ъ':'','щ':'s',
      'č':'c','ć':'c','š':'s','ž':'z','đ':'dj','á':'a','é':'e','í':'i','ó':'o','ú':'u','ñ':'n','ü':'u' };
    return s.replace(/[\s\S]/g, function (c) { return map[c] != null ? map[c] : c; });
  }
  function img(a) { return a.img || ''; }

  function applyChrome() {
    document.documentElement.lang = lang === 'sr' ? 'sr-Cyrl' : 'es';
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.getAttribute('data-t')); });
    document.querySelectorAll('[data-tp]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-tp')); });
    document.querySelectorAll('#langs button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-lang') === lang); });
    var s = '<h3>' + t('navigation') + '</h3><ul>' +
      '<li><a href="#/">' + t('home') + '</a></li>' +
      '<li><a href="#/villano">' + t('villain') + '</a></li>' +
      '<li><a href="#/aleatorio">' + t('random') + '</a></li></ul>' +
      '<h3>' + t('categories') + '</h3><ul>';
    CATS.forEach(function (c) { s += '<li><a href="#/c/' + CAT_ROUTE[c] + '" data-cat="' + c + '">' + t('cats')[c] + '</a></li>'; });
    s += '</ul><h3>' + t('languages') + '</h3><ul><li><a href="#" data-setlang="es">Español</a></li><li><a href="#" data-setlang="sr">Српски</a></li></ul>';
    $('#side').innerHTML = s;
    $('#foot').innerHTML = esc(t('footer')) + ' · ' + W.articles.length + ' ' + t('articlesCount');
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('hs-lang', l); } catch (e) {}
    applyChrome();
    route();
  }

  /* ---------- Vistas ---------- */

  function tabs() {
    return '<div class="tabs"><span class="on">' + t('article') + '</span><span>' + t('talk') + '</span></div>';
  }

  function infobox(a) {
    var h = '<div class="infobox cat-' + a.cat + '"><div class="ib-title">' + esc(L(a.t)) + '</div>';
    if (a.img) h += '<figure><img src="' + a.img + '" alt="' + esc(L(a.t)) + '" data-cap="' + esc(L(a.cap)) + '"><figcaption>' + links(L(a.cap)) + '</figcaption></figure>';
    var rows = a.info ? (a.info[lang] || a.info.es) : null;
    if (rows && rows.length) {
      h += '<table>';
      rows.forEach(function (r) { h += '<tr><th>' + r[0] + '</th><td>' + links(r[1]) + '</td></tr>'; });
      h += '</table>';
    }
    return h + '</div>';
  }

  function withToc(html) {
    var n = 0, items = [];
    html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, function (_, x) { n++; items.push(x); return '<h2 id="s' + n + '">' + x + '</h2>'; });
    if (items.length < 3) return html;
    var toc = '<div class="toc"><b>' + t('contents') + '</b><ol>' + items.map(function (x, i) { return '<li><a href="#" data-sec="s' + (i + 1) + '">' + plain(x) + '</a></li>'; }).join('') + '</ol></div>';
    var i = html.indexOf('<h2');
    return i < 0 ? html : html.slice(0, i) + toc + html.slice(i);
  }

  function viewArticle(id) {
    var a = byId[id];
    if (!a) return '<h1 class="title">' + esc(id) + '</h1><p>' + t('notFound') + '</p>';
    document.title = L(a.t) + ' — ' + t('siteName');
    var body = links(a[lang] || a.es);
    var h = tabs() + '<h1 class="title">' + esc(L(a.t)) + '</h1><div class="from">' + t('from') + '</div>';
    h += infobox(a) + withToc(body);
    if (a.see && a.see.length) {
      h += '<h2 class="seealso">' + t('seeAlso') + '</h2><ul>' + a.see.map(function (s) { return '<li>' + links('[[' + s + ']]') + '</li>'; }).join('') + '</ul>';
    }
    h += '<div class="catlinks">' + t('category') + ': <a href="#/c/' + a.cat + '">' + t('cats')[a.cat] + '</a></div>';
    return h;
  }

  function card(a) {
    var ph = a.img ? '<div class="ph" style="background-image:url(\'' + a.img + '\')"></div>' : '<div class="ph noimg">' + esc(L(a.t)).charAt(0) + '</div>';
    return '<a class="card" href="#/a/' + a.id + '">' + ph + '<b>' + esc(L(a.t)) + '</b><span>' + esc(plain(L(a.sum))) + '</span></a>';
  }

  function viewCategory(c) {
    var list = W.articles.filter(function (a) { return a.cat === c; });
    list.sort(function (x, y) { return (x.order || 50) - (y.order || 50) || L(x.t).localeCompare(L(y.t)); });
    document.title = t('cats')[c] + ' — ' + t('siteName');
    return tabs() + '<h1 class="title">' + t('category') + ': ' + t('cats')[c] + '</h1><div class="from">' + t('catDesc')[c] + '</div>' +
      '<div class="grid">' + list.map(card).join('') + '</div>';
  }

  function weekKey() { var d = new Date(); var onejan = new Date(d.getFullYear(), 0, 1); return Math.floor((d - onejan) / 6048e5); }

  function viewHome() {
    document.title = t('siteName') + ' — ' + t('siteTag');
    var feats = W.articles.filter(function (a) { return a.featured; });
    var f = feats[weekKey() % feats.length] || W.articles[0];
    var h = '<div class="home-head"><h1>' + t('welcome') + '</h1><p>' + t('welcomeSub') + ' · <b>' + W.articles.length + '</b> ' + t('articlesCount') + '</p></div>';
    h += '<div class="home-cols"><div>';
    h += '<div class="box feat"><h2>' + t('featured') + '</h2><div class="in">' + (f.img ? '<img class="left" src="' + f.img + '" alt="">' : '') +
      '<p><b>' + links('[[' + f.id + ']]') + '</b> — ' + links(L(f.sum)) + '</p><p>' + links(firstPara(f)) + '</p><p><a href="#/a/' + f.id + '">' + t('readMore') + '</a></p></div></div>';
    var fresh = W.articles.filter(function (a) { return a.nuevo; });
    if (fresh.length) {
      h += '<div class="box news"><h2>' + t('news') + '</h2><div class="in"><p><small>' + t('newsSub') + '</small></p><ul class="newslist">' +
        fresh.map(function (a) { return '<li>' + links('[[' + a.id + ']]') + ' <small>· ' + t('cats')[a.cat] + '</small></li>'; }).join('') + '</ul></div></div>';
    }
    h += '<div class="box know"><h2>' + t('didYouKnow') + '</h2><div class="in"><ul>' + pick(W.facts[lang] || W.facts.es, 7).map(function (x) { return '<li>' + links(x) + '</li>'; }).join('') + '</ul></div></div>';
    h += '</div><div>';
    var cur = V && V.actual;
    h += '<div class="box villain"><h2>' + t('villainWeek') + '</h2><div class="in">';
    if (cur) {
      h += (cur.img ? '<img class="left" src="' + cur.img + '" alt="">' : '') + '<p><b><a href="#/villano">' + esc(L(cur.alias)) + '</a></b><br><small>' + esc(cur.persona) + ' · ' + t('week') + ' ' + esc(cur.semana) + '</small></p><p>' + esc(L(cur.resumen)) + '</p>';
    } else h += '<p>' + t('noVillain') + '</p>';
    h += '</div></div>';
    h += '<div class="box cats"><h2>' + t('browse') + '</h2><div class="in"><div class="catgrid">';
    CATS.forEach(function (c) {
      var n = W.articles.filter(function (a) { return a.cat === c; }).length;
      h += '<a href="#/c/' + c + '">' + t('cats')[c] + '<small>' + n + ' ' + t('articlesCount') + '</small></a>';
    });
    h += '</div></div></div></div></div>';
    var books = W.articles.filter(function (a) { return a.cat === 'libros'; }).sort(function (x, y) { return (x.order || 50) - (y.order || 50); });
    h += '<div class="box books"><h2>' + t('books') + '</h2><div class="in"><div class="covers">' +
      books.map(function (b) { return '<a href="#/a/' + b.id + '"><img src="' + b.img + '" alt="">' + esc(L(b.t)) + '</a>'; }).join('') + '</div></div></div>';
    return h;
  }

  function pick(arr, n) {
    var k = weekKey() % arr.length, out = [];
    for (var i = 0; i < Math.min(n, arr.length); i++) out.push(arr[(k + i) % arr.length]);
    return out;
  }

  function firstPara(a) {
    var m = String(a[lang] || a.es).match(/<p>([\s\S]*?)<\/p>/);
    var s = m ? m[1] : '';
    var p = plain(s);
    return p.length > 380 ? s.replace(/<[^>]+>/g, '').slice(0, 370).replace(/\s\S*$/, '') + '…' : s;
  }

  function threat(n) {
    var s = '<span class="threat">';
    for (var i = 1; i <= 10; i++) s += '<i class="' + (i <= n ? 'on' : '') + '"></i>';
    return s + ' <b>' + n + '/10</b></span>';
  }

  function viewVillain(which) {
    var v = which != null ? (V.archivo || [])[which] : V.actual;
    document.title = t('villain') + ' — ' + t('siteName');
    if (!v) return tabs() + '<div class="villain-hero"><h1 class="title">' + t('villainWeek') + '</h1><div class="from">' + t('from') + '</div></div><p>' + t('noVillain') + '</p><div class="disclaimer">' + L(V.aviso) + '</div>';
    var h = tabs() + '<div class="villain-hero"><h1 class="title">' + esc(L(v.alias)) + '</h1><div class="from">' + t('villainWeek') + ' · ' + t('week') + ' ' + esc(v.semana) + ' · ' + t('updated') + ' ' + esc(v.fecha) + '</div>' +
      '<span class="tag">' + esc(v.persona) + '</span><span class="tag">' + esc(L(v.elemento)) + '</span></div>';
    h += '<div class="infobox cat-enemigos"><div class="ib-title">' + esc(L(v.alias)) + '</div>' +
      (v.img ? '<figure><img src="' + v.img + '" alt="" data-cap="' + esc(L(v.cap)) + '"><figcaption>' + esc(L(v.cap)) + '</figcaption></figure>' : '') +
      '<table><tr><th>' + t('realName') + '</th><td>' + esc(v.persona) + '</td></tr>' +
      '<tr><th>' + t('role') + '</th><td>' + esc(L(v.cargo)) + '</td></tr>' +
      '<tr><th>' + t('element') + '</th><td>' + esc(L(v.elemento)) + '</td></tr>' +
      '<tr><th>' + t('threat') + '</th><td>' + threat(v.amenaza) + '</td></tr></table></div>';
    h += '<p><b>' + esc(L(v.resumen)) + '</b></p>';
    h += '<h2>' + t('facts') + '</h2><ul>' + L(v.hechos).map(function (x) { return '<li>' + links(x) + '</li>'; }).join('') + '</ul>';
    h += '<h2>' + t('why') + '</h2>' + links(L(v.porque));
    h += '<h2>' + t('powers') + '</h2><div class="powers">' + L(v.poderes).map(function (p) { return '<div><b>' + esc(p[0]) + '</b>' + links(p[1]) + '</div>'; }).join('') + '</div>';
    h += '<h2>' + t('nemesis') + '</h2>' + links(L(v.derrota));
    h += '<div class="disclaimer">' + links(L(v.aviso || V.aviso)) + '</div>';
    h += '<h2>' + t('sources') + '</h2><ol class="sources">' + v.fuentes.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.titulo) + '</a> — ' + esc(s.medio) + ', ' + esc(s.fecha) + '</li>'; }).join('') + '</ol>';
    if (V.archivo && V.archivo.length) {
      h += '<h2>' + t('archive') + '</h2><ul class="archive">';
      if (which != null) h += '<li><a href="#/villano">' + esc(L(V.actual.alias)) + '</a> — ' + esc(V.actual.persona) + ' (' + t('week') + ' ' + esc(V.actual.semana) + ')</li>';
      V.archivo.forEach(function (o, i) { if (i !== which) h += '<li><a href="#/villano/' + i + '">' + esc(L(o.alias)) + '</a> — ' + esc(o.persona) + ' (' + t('week') + ' ' + esc(o.semana) + ')</li>'; });
      h += '</ul>';
    }
    return h;
  }

  function search(q) {
    var n = norm(q.trim());
    if (!n) return [];
    var res = [];
    W.articles.forEach(function (a) {
      var ti = norm(a.t.es) + ' | ' + norm(a.t.sr) + ' | ' + norm((a.alt || []).join(' '));
      var score = 0;
      if (ti.indexOf(n) === 0) score = 100; else if (ti.indexOf(n) >= 0) score = 60;
      else {
        var body = norm(plain(a.es) + ' ' + plain(a.sr));
        var k = body.split(n).length - 1;
        if (k) score = Math.min(40, 5 + k * 3);
      }
      if (score) res.push([score, a]);
    });
    res.sort(function (x, y) { return y[0] - x[0]; });
    return res.map(function (r) { return r[1]; });
  }

  function viewSearch(q) {
    var r = search(q);
    document.title = t('results') + ' «' + q + '»';
    return tabs() + '<h1 class="title">' + t('results') + ' «' + esc(q) + '»</h1>' +
      (r.length ? '<div class="grid">' + r.map(card).join('') + '</div>' : '<p>' + t('noResults') + '</p>');
  }

  /* ---------- Enrutado ---------- */

  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var parts = h.split('/');
    var out;
    if (!h) out = viewHome();
    else if (parts[0] === 'a') out = viewArticle(parts[1]);
    else if (parts[0] === 'c' && UI.es.cats[parts[1]]) out = viewCategory(parts[1]);
    else if (parts[0] === 'villano') out = viewVillain(parts[1] != null && parts[1] !== '' ? +parts[1] : null);
    else if (parts[0] === 'buscar') out = viewSearch(parts.slice(1).join('/'));
    else if (parts[0] === 'aleatorio') { var a = W.articles[Math.floor(Math.random() * W.articles.length)]; location.replace('#/a/' + a.id); return; }
    else if (byId[parts[0]]) out = viewArticle(parts[0]);
    else out = viewHome();
    $('#page').innerHTML = out;
    document.querySelectorAll('#side a').forEach(function (x) { x.classList.toggle('cur', x.getAttribute('href') === '#/' + h); });
    $('#side').classList.remove('open');
    window.scrollTo(0, 0);
  }

  /* ---------- Eventos ---------- */

  document.addEventListener('click', function (e) {
    var el = e.target;
    var sl = el.closest && el.closest('[data-setlang], #langs button');
    if (sl) { e.preventDefault(); setLang(sl.getAttribute('data-setlang') || sl.getAttribute('data-lang')); return; }
    var sec = el.closest && el.closest('[data-sec]');
    if (sec) { e.preventDefault(); var tgt = document.getElementById(sec.getAttribute('data-sec')); if (tgt) tgt.scrollIntoView({ behavior: 'smooth' }); return; }
    if (el.tagName === 'IMG' && el.closest('.infobox, figure.thumb')) {
      var lb = document.createElement('div'); lb.id = 'lb';
      lb.innerHTML = '<div><img src="' + el.getAttribute('src') + '" alt=""><p>' + (el.getAttribute('data-cap') || (el.closest('figure') && el.closest('figure').textContent) || '') + '</p></div>';
      lb.onclick = function () { lb.remove(); };
      document.body.appendChild(lb); return;
    }
    if (el.id === 'menu-btn') { $('#side').classList.toggle('open'); }
  });

  var q = $('#q'), sug = $('#suggest'), sel = -1;
  function renderSug() {
    var r = search(q.value).slice(0, 8);
    sel = -1;
    if (!q.value.trim() || !r.length) { sug.hidden = true; return; }
    sug.innerHTML = r.map(function (a) {
      return '<a href="#/a/' + a.id + '">' + (a.img ? '<img src="' + a.img + '" alt="">' : '') + '<span>' + esc(L(a.t)) + '<small>' + t('cats')[a.cat] + '</small></span></a>';
    }).join('');
    sug.hidden = false;
  }
  q.addEventListener('input', renderSug);
  q.addEventListener('keydown', function (e) {
    var items = sug.querySelectorAll('a');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      sel = Math.max(-1, Math.min(items.length - 1, sel + (e.key === 'ArrowDown' ? 1 : -1)));
      items.forEach(function (x, i) { x.classList.toggle('on', i === sel); });
    } else if (e.key === 'Escape') sug.hidden = true;
  });
  $('#search').addEventListener('submit', function (e) {
    e.preventDefault();
    var items = sug.querySelectorAll('a');
    if (sel >= 0 && items[sel]) location.hash = items[sel].getAttribute('href');
    else if (q.value.trim()) location.hash = '#/buscar/' + encodeURIComponent(q.value.trim());
    sug.hidden = true; q.blur();
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('#search')) sug.hidden = true; else if (e.target.closest('#suggest a')) { sug.hidden = true; q.value = ''; } });

  window.addEventListener('hashchange', route);
  applyChrome();
  route();
})();
