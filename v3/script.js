
window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';
    const instructions = document.querySelector('.instructions');
    instructions.innerText = 'All';

    for (let i = 0; i < models.length; i++) {
        setModel(models[i]);
    };
    
    document.querySelector('button[data-action="change"]').addEventListener('click',    function () {
        modelIndex++;
        var newIndex = modelIndex % models.length;

        viewModel(models[newIndex]);
    });
};

const models = [
    {
        url: '',
        scale: '7 7 7',
        rotation: '0 315 0',
        info: 'fortnite dance',
        lat: 40.02828,
        lng: -105.26473,
        gif: {
            geometry: 'primitive:plane;width:1.5;height:1.5;',
            material: 'shader:gif;src:#fortnite-dance;',
            animation: '',
        },
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '7 7 7',
        rotation: '0 315 0',
        info: 'fortnite dance 2',
        lat: 40.028259999999996,
        lng: -105.26457,
        gif: {
            geometry: 'primitive:plane;width:1.5;height:1.5;',
            material: 'shader:gif;src:#fortnite-l;',
            animation: '',
        },
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '7 7 7',
        rotation: '0 315 0',
        info: 'john wick',
        lat: 40.02824999999999,
        lng: -105.26424,
        gif: {
            geometry: 'primitive:plane; width:1.5;height:1.5;',
            material: 'shader:gif;src:#john-wick;',
            animation: 'easing:linear;',
        },
        // position: '0 -4 5',
    },
];

let modelIndex = 0;

const generateIdString = function (string) {
    return string.replace(/[^a-zA-Z ]/g, '').split(' ').join('-');
}

const setModel = function (model) {
    let scene = document.querySelector('a-scene'); 
    let entity = document.createElement('a-entity');
    let entityTitle = document.createElement('a-entity');

    entity.setAttribute('id', generateIdString(model.info));
    // entity.setAttribute('animation-mixer', '');
    entity.setAttribute('gps-entity-place', `latitude: ${model.lat}; longitude: ${model.lng};`);
    // entity.setAttribute('position', model.position);
    // entity.setAttribute('gltf-model', model.url);
    entity.setAttribute('rotation', model.rotation);
    entity.setAttribute('scale', model.scale);
    entity.setAttribute('geometry', model.gif.geometry);
    entity.setAttribute('material', model.gif.material);
    entity.setAttribute('animation', model.gif.animation);
    entityTitle.setAttribute('text', `value: ${model.info};baseline: bottom;align: center;`);
    entityTitle.setAttribute('geometry', 'primitive: plane; width: auto; height: auto');
    entityTitle.setAttribute('material', 'color: purple; opacity: 0.4');
    entityTitle.setAttribute('position', '0 1.5 0');
    entityTitle.setAttribute('scale', '3 3 3');

    entity.appendChild(entityTitle);
    scene.appendChild(entity);
};

const viewModel = function (model) {
    const div = document.querySelector('.instructions');
    div.innerText = model && model.info;

    let entities = document.querySelectorAll('a-entity[id]');
    let entity = document.querySelector(`a-entity#${generateIdString(model.info)}`);

    for (let i = 0; i < entities.length; i++) {
        entities[i].setAttribute('visible', 'false');
    }

    entity.setAttribute('visible', 'true');
};