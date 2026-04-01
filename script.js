ymaps.ready(init);

let map;
let bridgesData = [];
const placemarks = new Map();

async function init() {
    try {
        map = new ymaps.Map('map', {
            center: [59.9343, 30.3351],
            zoom: 12,
            controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
        });

        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Не удалось загрузить data.json');
        }

        bridgesData = await response.json();

        renderBridgeCards(bridgesData);
        addBridgeMarkers(bridgesData);

        if (bridgesData.length > 0) {
            selectBridge(bridgesData[0].id, true);
        }
    } catch (error) {
        console.error(error);
        document.getElementById('bridge-name').textContent = 'Ошибка загрузки';
        document.getElementById('bridge-description').textContent = 'Проверьте, что файл data.json лежит рядом с index.html и сайт открыт через сервер.';
    }
}

function addBridgeMarkers(bridges) {
    bridges.forEach((bridge) => {
        const placemark = new ymaps.Placemark(
            [bridge.lat, bridge.lng],
            {
                hintContent: bridge.name,
                balloonContent: `<strong>${bridge.name}</strong><br>${bridge.shortDescription || bridge.description}`
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

    container.innerHTML = bridges.map((bridge) => `
        <article class="bridge-card" id="card-${bridge.id}">
            ${bridge.image ? `<img class="card-photo" src="${bridge.image}" alt="${bridge.name}">` : `<div class="image-placeholder">фото моста</div>`}
            <span class="card-tag">${bridge.status}</span>
            <h3>${bridge.name}</h3>
            <p class="card-meta">${bridge.years} · ${bridge.locationText}</p>
            <p class="card-text">${bridge.shortDescription || ''}</p>
            <button class="card-button" type="button" data-bridge-id="${bridge.id}">Открыть карточку</button>
        </article>
    `).join('');

    container.querySelectorAll('[data-bridge-id]').forEach((button) => {
        button.addEventListener('click', () => {
            selectBridge(Number(button.dataset.bridgeId));
            document.getElementById('map-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function selectBridge(bridgeId, skipZoom = false) {
    const bridge = bridgesData.find((item) => item.id === bridgeId);
    if (!bridge) return;

    showBridgeInfo(bridge);
    highlightActiveCard(bridgeId);

    if (!skipZoom) {
        map.setCenter([bridge.lat, bridge.lng], 14, {
            duration: 300
        });
    }

    const placemark = placemarks.get(bridgeId);
    if (placemark) {
        placemark.balloon.open();
    }
}

function showBridgeInfo(bridge) {
    document.getElementById('bridge-name').textContent = bridge.name;
    document.getElementById('bridge-meta').textContent = `${bridge.years} · ${bridge.status} · ${bridge.locationText}`;
    document.getElementById('bridge-description').textContent = bridge.description;

    const imageContainer = document.getElementById('bridge-image');
    imageContainer.innerHTML = bridge.image
        ? `<img class="bridge-photo" src="${bridge.image}" alt="${bridge.name}">`
        : `<div class="image-placeholder">Фото моста</div>`;

    const factsList = document.getElementById('bridge-facts');
    factsList.innerHTML = (bridge.facts || []).map((fact) => `<li>${fact}</li>`).join('');
}

function highlightActiveCard(bridgeId) {
    document.querySelectorAll('.bridge-card').forEach((card) => {
        card.classList.remove('active');
    });

    const activeCard = document.getElementById(`card-${bridgeId}`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
}