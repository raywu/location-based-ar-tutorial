
window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    setModel(models[modelIndex]);
    
    document.querySelector('button[data-action="change"]').addEventListener('click',    function () {
        modelIndex++;
        var newIndex = modelIndex % models.length;
        setModel(models[newIndex]);
    });
};

const models = [
    // {
    //     url: './assets/magnemite/scene.gltf',
    //     scale: '0.5 0.5 0.5',
    //     rotation: '0 270 0',
    //     info: 'Magnemite, Lv. 5, HP 10/10',
    //     lat: 40.028088,
    //     lng: -105.264640,
    //     gif: {
    //         geometry: '',
    //         material: '',
    //         animation: '',
    //     },
    //     // position: '0 -3 5',
    // },
    // {
    //     url: './assets/articuno/scene.gltf',
    //     scale: '0.1 0.1 0.1',
    //     rotation: '0 270 0',
    //     info: 'Articuno, Lv. 80, HP 100/100',
    //     lat: 40.028088,
    //     lng: -105.264640,
    //     gif: {
    //         geometry: '',
    //         material: '',
    //         animation: '',
    //     },
    //     // position: '0 -3 5',
    // },
    // {
    //     url: './assets/dragonite/scene.gltf',
    //     scale: '0.06 0.06 0.06',
    //     rotation: '0 270 0',
    //     info: 'Dragonite, Lv. 99, HP 150/150',
    //     lat: 40.028088,
    //     lng: -105.264640,
    //     gif: {
    //         geometry: '',
    //         material: '',
    //         animation: '',
    //     },
    //     // position: '0 -4 5',
    // },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 270 0',
        info: 'nyancat circle',
        lat: 40.028088,
        lng: -105.264640,
        gif: {
            geometry: 'primitive:circle;segments:5;radius:1.2;',
            material: 'shader:gif;src:#nyancat;opacity:.8',
            animation: '',
        },
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 270 0',
        info: 'pusheen box',
        lat: 40.028088,
        lng: -105.264640,
        gif: {
            geometry: 'primitive:box;width:1.5;height:1.5;depth:1.5;',
            material: 'shader:gif;src:#pusheen;',
            animation: 'property: rotation; dur: 10000;to: 0 360 0; loop: true; easing: linear;',
        },
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 270 0',
        info: 'banana plane',
        lat: 40.028088,
        lng: -105.264640,
        gif: {
            geometry: 'primitive:plane;width:2;height:2;',
            material: 'shader:gif;src:#banana;repeat: 2 2;alphaTest:0.5;',
            animation: '',
        },
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 270 0',
        info: 'vibing cat plane',
        lat: 40.028088,
        lng: -105.264640,
        gif: {
            geometry: 'primitive:plane;height: 2;width: 2;',
            material: 'shader:gif;src:#vibing-cat;',
            animation: '',
        },
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 270 0',
        info: 'spiderman box',
        lat: 40.028088,
        lng: -105.264640,
        gif: {
            geometry: 'primitive:box;width:1.5;height:1.5;depth:1.5;',
            material: 'shader:gif;src:#spiderman;',
            animation: 'property: rotation; dur: 10000;to: 0 360 0; loop: true; easing: linear;',
        },
        // position: '0 -4 5',
    },
];

let modelIndex = 0;
const setModel = function (model) {
    let scene = document.querySelector('a-scene'); 
    let entity = document.querySelector('[gps-entity-place]');
    let subentity = entity && entity.lastElementChild;

    if (entity) {
        entity.remove();
        entity = document.createElement('a-entity');
        entity.classList.add('entity');
    } else {
        entity = document.createElement('a-entity');
        entity.classList.add('entity');
    }

    if (subentity) {
        subentity.remove();
        subentity = document.createElement('a-entity')
    } else {
        subentity = document.createElement('a-entity')
    }

    entity.setAttribute('animation-mixer', '');
    entity.setAttribute('gps-entity-place', `latitude: ${model.lat}; longitude: ${model.lng};`);
    entity.setAttribute('position', model.position);
    entity.setAttribute('gltf-model', model.url);
    entity.setAttribute('rotation', model.rotation);
    entity.setAttribute('scale', model.scale);
    
    if (model.gif.material != '') {
        subentity.setAttribute('geometry', model.gif.geometry);
        subentity.setAttribute('material', model.gif.material);
        subentity.setAttribute('animation', model.gif.animation);
        
        entity.appendChild(subentity);
    }

    scene.appendChild(entity);

    const div = document.querySelector('.instructions');
    div.innerText = model && model.info;
};