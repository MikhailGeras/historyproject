(() => {
  if (!document.getElementById('map')) return;

  const bridgesData = [
    {
      id: 1,
      name: 'Банковский мост',
      lat: 59.93215854817062,
      lng: 30.324926233481932,
      years: '1825–1826',
      status: 'сохранился',
      locationText: 'канал Грибоедова, у бывшего Ассигнационного банка',
      shortDescription: 'Один из самых узнаваемых пешеходных цепных мостов Петербурга — с крылатыми грифонами у входов.',
      description: 'Банковский мост соединяет берега канала Грибоедова и запоминается скульптурами грифонов. Это редкий случай, когда инженерная конструкция, декоративная программа и городской миф работают как единое целое.',
      facts: ['цепная пешеходная конструкция', 'скульптуры грифонов стали символом места', 'удобная точка прогулки от Невского проспекта'],
      image: 'assets/images/bankovsky-03-17.webp',
      url: 'bridge/bankovsky.html'
    },
    {
      id: 2,
      name: 'Львиный мост',
      lat: 59.92688764844149,
      lng: 30.301388999937323,
      years: '1825–1826',
      status: 'сохранился',
      locationText: 'канал Грибоедова, Львиный переулок',
      shortDescription: 'Камерный пешеходный мост с белыми львами, которые скрывают опоры и удерживают цепи.',
      description: 'Львиный мост показывает, как конструкция может стать художественным образом. Скульптуры львов не просто украшают переправу: они превращают инженерный узел в городскую сцену.',
      facts: ['один из сохранившихся цепных мостов', 'популярная фототочка у канала', 'в материалах проекта связан с поэтическими текстами о Петербурге'],
      image: 'assets/images/lviny-02-image6.webp',
      url: 'bridge/lviny.html'
    },
    {
      id: 3,
      name: 'Почтамтский мост',
      lat: 59.93049233065805,
      lng: 30.300776957702226,
      years: '1823–1824',
      status: 'сохранился / реконструирован',
      locationText: 'река Мойка, Почтамтский переулок',
      shortDescription: 'Исторический цепной мост через Мойку с лаконичным силуэтом и заметными подвесными элементами.',
      description: 'Почтамтский мост важен как ранний опыт цепной переправы в городской среде. Его лучше смотреть с набережной: так видны пропорции, подвески и связь с линией Мойки.',
      facts: ['один из старейших объектов маршрута', 'расположен рядом с историческим почтовым кварталом', 'хорошо подходит для короткой пешей остановки'],
      image: 'assets/images/pochtamtsky-02-image2.webp',
      url: 'bridge/pochtamtsky.html'
    },
    {
      id: 4,
      name: 'Египетский мост',
      lat: 59.916861,
      lng: 30.297165,
      years: '1825–1826',
      status: 'цепная конструкция утрачена',
      locationText: 'через Фонтанку, район Лермонтовского проспекта',
      shortDescription: 'Мост с египетскими мотивами и драматичной историей обрушения старой цепной конструкции.',
      description: 'Египетский мост на современной карте — это место памяти о знаменитой цепной переправе. Для туриста здесь важны не только сфинксы и обелиски, но и история инженерной катастрофы.',
      facts: ['историческая цепная конструкция не сохранилась', 'с мостом связана история обрушения', 'декор использует египетские мотивы'],
      image: 'assets/images/egipetsky-02-cepnoy-egipetskiy-most-vneshniy-vid.webp',
      url: 'bridge/egipetsky.html'
    },
    {
      id: 5,
      name: 'Пантелеймоновский мост',
      lat: 59.942075,
      lng: 30.338281,
      years: '1823–1824',
      status: 'историческая цепная конструкция утрачена',
      locationText: 'Фонтанка, район улицы Пестеля и Летнего сада',
      shortDescription: 'Современный мост в месте, где сохраняется память о ранней цепной переправе Петербурга.',
      description: 'Пантелеймоновский мост важен для маршрута как точка исторической преемственности. Современный облик отличается от ранней цепной конструкции, но место остаётся частью истории подвесных мостов города.',
      facts: ['находится у насыщенного туристического маршрута', 'связан с историей ранних цепных мостов', 'рядом Летний сад и Фонтанка'],
      image: 'assets/images/panteleymonovsky-02-bez-nazvaniya.webp',
      url: 'bridge/panteleymonovsky.html'
    },
    {
      id: 6,
      name: 'Цепной мост в Екатерингофском парке',
      lat: 59.904686,
      lng: 30.25715,
      years: '1823',
      status: 'утрачен',
      locationText: 'Екатерингофский парк, Петровский канал',
      shortDescription: 'Утраченный мост, с которого удобно начинать разговор о ранних цепных конструкциях Петербурга.',
      description: 'Екатерингофский цепной мост сохранился в материалах проекта через литографии, чертежи и исторические изображения. На карте отмечено место, связанное с этим утраченным объектом.',
      facts: ['объект не сохранился в первоначальном виде', 'важен по историческим изображениям и чертежам', 'расширяет маршрут за пределы центральных каналов'],
      image: 'assets/images/ekateringof-05-fotografiya-mosta-chto-stoit-na-meste-cepnogo-2.webp',
      url: 'bridge/ekateringof.html'
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

    //if (bridgesData.length) {
      //selectBridge(bridgesData[0].id, true);
      //const bounds = map.geoObjects.getBounds();
      //if (bounds) map.setBounds(bounds, { checkZoomRange: true, zoomMargin: 48 });
    //}
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
