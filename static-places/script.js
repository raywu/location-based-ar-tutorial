
window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                // decomment the following and add coordinates:
                lat: 40.028088,
                lng: -105.264640,
            },
        },
    ];
}

var models = [
    {
        url: './assets/magnemite/scene.gltf',
        // url: '',
        scale: '0.5 0.5 0.5',
        info: 'Magnemite, Lv. 5, HP 10/10',
        rotation: '0 270 0',
        // position: '0 -3 5',
    },
    {
        url: './assets/articuno/scene.gltf',
        // url: '',
        scale: '0.1 0.1 0.1',
        rotation: '0 270 0',
        info: 'Articuno, Lv. 80, HP 100/100',
        // position: '0 -3 5',
    },
    {
        url: './assets/dragonite/scene.gltf',
        // url: '',
        scale: '0.06 0.06 0.06',
        rotation: '0 270 0',
        info: 'Dragonite, Lv. 99, HP 150/150',
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 270 0',
        info: 'nyancat green box',
        geometry: 'primitive:box',
        material: 'shader:gif;src:#nyancat;color:green;opacity:.8',
        animation: '',
        type: 'gif',
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 270 0',
        info: 'pusheen rotates',
        geometry: 'primitive:box;width:1.5;height:1.5;depth:1.5;',
        material: 'shader:gif;src:#pusheen;',
        animation: 'property: rotation; dur: 10000;to: 0 360 0; loop: true; easing: linear;',
        type: 'gif',
        // position: '0 -4 5',
    },
];

// TODO rewrite setModel so it resets the entity

var modelIndex = 0;
var setModel = function (model, entity) {
    // if (model && model.info == 'nyancat green box') {
    //     debugger;
    // }
    let child = entity.lastElementChild;

    if (model && model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model && model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model && model.position) {
        entity.setAttribute('position', model.position);
    }

    if (model && model.url) {
        entity.setAttribute('gltf-model', model.url);
    }
    
    if (model && model.type == 'gif') {
        child.setAttribute('geometry', model.geometry);
        child.setAttribute('material', model.material);
        child.setAttribute('animation', model.animation);
    }

    const div = document.querySelector('.instructions');
    div.innerText = model && model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        let gif = document.createElement('a-entity');

        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        gif.setAttribute('geometry', '');
        gif.setAttribute('material', '');

        setModel(models[modelIndex], model, gif);

        model.setAttribute('animation-mixer', '');
        model.appendChild(gif);

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}
