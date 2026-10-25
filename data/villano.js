/* Villano potencial de la semana / Потенцијални зликовац недеље

   Todavía no hay ningún villano publicado. Para publicar uno, rellenar `actual`
   con un objeto como este (y, al cambiar de semana, mover el anterior a `archivo`):

   {
     semana: '2026-44',                       // año-número de semana
     fecha: '2026-10-26',
     persona: 'Nombre real',
     img: 'img/villanos/archivo.jpg',         // opcional
     cap: { es: '…', sr: '…' },               // pie de la imagen
     alias: { es: 'Alias de villano', sr: 'Зликовачко име' },
     cargo: { es: 'Cargo', sr: 'Функција' },
     elemento: { es: 'Elemento', sr: 'Елемент' },
     amenaza: 7,                              // 1–10
     resumen: { es: 'Una frase.', sr: 'Једна реченица.' },
     hechos: { es: ['Hecho con fuente…'], sr: ['Чињеница са извором…'] },
     porque: { es: '<p>…</p>', sr: '<p>…</p>' },
     poderes: { es: [['Poder', 'Descripción']], sr: [['Моћ', 'Опис']] },
     derrota: { es: '<p>…</p>', sr: '<p>…</p>' },
     fuentes: [{ titulo: '…', medio: '…', fecha: '2026-10-20', url: 'https://…' }]
   }

   Los textos admiten enlaces internos [[id]] o [[id|texto]]. */
window.VILLANO = {
  actual: null,
  archivo: [],
  aviso: {
    es: 'Esta sección es un ejercicio de ficción y sátira: imagina a figuras públicas reales como antagonistas del universo de La hora salvaje a partir de hechos publicados en las noticias. No afirma que hayan cometido delitos ni sustituye a la información periodística; consulta las fuentes enlazadas.',
    sr: 'Овај одељак је вежба фикције и сатире: замишља стварне јавне личности као антагонисте универзума Дивљег часа на основу чињеница објављених у вестима. Не тврди да су починиле кривична дела нити замењује новинарско извештавање; погледајте наведене изворе.'
  }
};
