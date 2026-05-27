(() => {
  if (!document.getElementById('map')) return;

  const bridgesData = [
    {
        "id": 1,
        "name": "Банковский мост",
        "lat": 59.93215854817062,
        "lng": 30.324926233481932,
        "years": "1825–1826",
        "status": "сохранился",
        "locationText": "канал Грибоедова, у бывшего Ассигнационного банка",
        "shortDescription": "Сохранившийся пешеходный цепной мост с крылатыми грифонами у бывшего Ассигнационного банка.",
        "description": "Один из трёх сохранившихся пешеходных цепных мостов Петербурга. Его образ строится вокруг четырёх крылатых грифонов, внутри которых скрыты элементы опорной системы.",
        "facts": [
            "Открыт 24 июля 1826 года.",
            "Проект В. фон Треттера, скульптуры П. П. Соколова.",
            "Опорные элементы скрыты внутри полых фигур грифонов.",
            "Сохранился как один из трёх пешеходных цепных мостов Петербурга."
        ],
        "image": "assets/images/card-illustrations/bankovsky-main.webp",
        "url": "bridge/bankovsky.html"
    },
    {
        "id": 2,
        "name": "Львиный мост",
        "lat": 59.92688764844149,
        "lng": 30.301388999937323,
        "years": "1825–1826",
        "status": "сохранился",
        "locationText": "канал Грибоедова, Львиный переулок",
        "shortDescription": "Камерный мост через канал Грибоедова с белыми чугунными львами и ажурной решёткой.",
        "description": "Пешеходный цепной мост через канал Грибоедова, открытый 1 июля 1826 года. Его главный образ — белые чугунные львы, фонари и ажурная решётка.",
        "facts": [
            "Открыт 1 июля 1826 года.",
            "Находится в створе Львиного переулка и Малой Подьяческой улицы.",
            "Проект инженеров В. фон Треттера и В. А. Христиановича.",
            "Скульптуры львов выполнены по моделям П. П. Соколова.",
            "Реставрировался несколько раз, но без радикальной перестройки образа."
        ],
        "image": "assets/images/lviny-02-image6.webp",
        "url": "bridge/lviny.html"
    },
    {
        "id": 3,
        "name": "Почтамтский мост",
        "lat": 59.93049233065805,
        "lng": 30.300776957702226,
        "years": "1823–1824",
        "status": "сохранился / реконструирован",
        "locationText": "река Мойка, Почтамтский переулок",
        "shortDescription": "Первый в России пешеходный висячий мост у Главного почтамта на Мойке.",
        "description": "Первый в России пешеходный висячий мост. Он появился как практическое решение неудобной связи между берегами Мойки у Главного почтамта.",
        "facts": [
            "Построен в 1823–1824 годах.",
            "Считается первым в России пешеходным висячим мостом.",
            "Проект В. фон Треттера и В. А. Христиановича.",
            "Расположен у Главного почтамта на Мойке."
        ],
        "image": "assets/images/card-illustrations/pochtamtsky-historical.webp",
        "url": "bridge/pochtamtsky.html"
    },
    {
        "id": 4,
        "name": "Египетский мост",
        "lat": 59.916861,
        "lng": 30.297165,
        "years": "1825–1826",
        "status": "цепная конструкция утрачена",
        "locationText": "река Фонтанка, Лермонтовский проспект",
        "shortDescription": "Мост через Фонтанку с египетскими мотивами, сфинксами и драматичной историей обрушения.",
        "description": "Исторический цепной мост через Фонтанку с египетскими порталами и сфинксами. Первоначальная конструкция рухнула в 1905 году; современный мост открыт в 1955 году.",
        "facts": [
            "Построен в 1825–1826 годах.",
            "Проект В. фон Треттера и В. Христиановича.",
            "Скульптурный образ связан с четырьмя сфинксами П. П. Соколова.",
            "Историческая цепная конструкция обрушилась в 1905 году."
        ],
        "image": "assets/images/card-illustrations/egipetsky-main.webp",
        "url": "bridge/egipetsky.html"
    },
    {
        "id": 5,
        "name": "Пантелеймоновский мост",
        "lat": 59.942075,
        "lng": 30.338281,
        "years": "1823–1824",
        "status": "историческая цепная конструкция утрачена",
        "locationText": "река Фонтанка, улица Пестеля",
        "shortDescription": "Переход от экспериментального цепного моста к монументальной арочной переправе начала XX века.",
        "description": "Место, где ранний цепной мост 1820-х годов был заменён арочной переправой начала XX века. Важен как память об инженерном эксперименте и как часть петербургского литературного пространства.",
        "facts": [
            "Цепной мост открыт в 1824 году.",
            "В разные годы назывался Цепным, мостом Пестеля и Гангутским.",
            "Связан с пушкинским адресом «у Цепного моста, против Пантелеимона».",
            "Современный арочный мост построен в 1907–1914 годах."
        ],
        "image": "assets/images/card-illustrations/panteleymonovsky-main.webp",
        "url": "bridge/panteleymonovsky.html"
    },
    {
        "id": 6,
        "name": "Цепной мост в Екатерингофском парке",
        "lat": 59.904686,
        "lng": 30.25715,
        "years": "1823",
        "status": "утрачен",
        "locationText": "Екатерингофский парк, Петровский канал",
        "shortDescription": "Утраченный парковый цепной мост 1823 года — ранний опыт постоянной висячей переправы.",
        "description": "Первый в России и один из первых в континентальной Европе цепной мост постоянного типа. Построен в 1823 году; не сохранился и известен по литографиям, чертежам и описаниям.",
        "facts": [
            "Построен в 1823 году.",
            "Пролёт — около 15,2–15,5 м, общая длина более 23 м.",
            "Четыре ряда цепей, девять подвесок в каждом ряду.",
            "Перестроен в 1869 году и разобран к 1900–1904 годам."
        ],
        "image": "assets/images/card-illustrations/ekateringof-main.webp",
        "url": "bridge/ekateringof.html"
    }
];

  let map;
  const placemarks = new Map();

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[char]));
  }

  function init() {
    map = new ymaps.Map('map', {
      center: [59.9261, 30.3065],
      zoom: 12,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    });

    renderBridgeCards(bridgesData);
    addBridgeMarkers(bridgesData);

    const bounds = map.geoObjects.getBounds();
    if (bounds) map.setBounds(bounds, { checkZoomRange: true, zoomMargin: 48 });
  }

  function addBridgeMarkers(bridges) {
    bridges.forEach((bridge) => {
      const placemark = new ymaps.Placemark(
        [bridge.lat, bridge.lng],
        {
          hintContent: bridge.name,
          balloonContent: `<strong>${escapeHtml(bridge.name)}</strong><br>${escapeHtml(bridge.shortDescription || bridge.description)}<br><br><a href="${bridge.url}">Открыть страницу моста</a>`
        },
        {
          preset: 'islands#darkBlueStretchyIcon'
        }
      );

      placemark.events.add('click', () => selectBridge(bridge.id));
      placemarks.set(bridge.id, placemark);
      map.geoObjects.add(placemark);
    });
  }

  function renderBridgeCards(bridges) {
    const container = document.getElementById('bridges-list');
    if (!container) return;

    container.innerHTML = bridges.map((bridge) => `
      <article class="route-card map-route-card" id="card-${bridge.id}">
        <img src="${bridge.image}" alt="${escapeHtml(bridge.name)}" loading="lazy">
        <div>
          <h3>${escapeHtml(bridge.name)}</h3>
          <p>${escapeHtml(bridge.locationText)}</p>
          <span class="meta">${escapeHtml(bridge.status)} · ${escapeHtml(bridge.years)}</span>
          <button class="card-button" type="button" data-bridge-id="${bridge.id}">Показать на карте</button>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('[data-bridge-id]').forEach((button) => {
      button.addEventListener('click', () => {
        selectBridge(Number(button.dataset.bridgeId));
        document.getElementById('map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  function selectBridge(bridgeId, skipZoom = false) {
    const bridge = bridgesData.find((item) => item.id === bridgeId);
    if (!bridge || !map) return;

    showBridgeInfo(bridge);
    highlightActiveCard(bridgeId);

    if (!skipZoom) {
      map.setCenter([bridge.lat, bridge.lng], 14, { duration: 300 });
    }

    const placemark = placemarks.get(bridgeId);
    if (placemark) placemark.balloon.open();
  }

  function showBridgeInfo(bridge) {
    const name = document.getElementById('bridge-name');
    const meta = document.getElementById('bridge-meta');
    const description = document.getElementById('bridge-description');
    const imageContainer = document.getElementById('bridge-image');
    const factsList = document.getElementById('bridge-facts');
    const link = document.getElementById('bridge-link');

    if (name) name.textContent = bridge.name;
    if (meta) meta.textContent = `${bridge.years} · ${bridge.status} · ${bridge.locationText}`;
    if (description) description.textContent = bridge.description;
    if (imageContainer) imageContainer.innerHTML = `<img class="bridge-photo" src="${bridge.image}" alt="${escapeHtml(bridge.name)}">`;
    if (factsList) factsList.innerHTML = bridge.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join('');
    if (link) link.href = bridge.url;
  }

  function highlightActiveCard(bridgeId) {
    document.querySelectorAll('.map-route-card').forEach((card) => card.classList.remove('active'));
    document.getElementById(`card-${bridgeId}`)?.classList.add('active');
  }

  if (window.ymaps) {
    ymaps.ready(init);
  } else {
    const name = document.getElementById('bridge-name');
    const description = document.getElementById('bridge-description');
    if (name) name.textContent = 'Карта не загрузилась';
    if (description) description.textContent = 'Проверьте подключение к интернету и доступность Yandex Maps API.';
  }
})();
