
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
        scale: '5 5 5',
        rotation: '0 315 0',
        info: 'No U!',
        lat: 40.02828,
        lng: -105.26473,
        gif: {
            geometry: 'primitive:plane;width:1.5;height:1.5;',
            material: 'shader:gif;src:#spiderman;',
            animation: '',
        },
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 315 0',
        info: 'No, No U!',
        lat: 40.028259999999996,
        lng: -105.26457,
        gif: {
            geometry: 'primitive:plane;width:1.5;height:1.5;',
            material: 'shader:gif;src:#spiderman;',
            animation: '',
        },
        // position: '0 -4 5',
    },
    {
        url: '',
        scale: '5 5 5',
        rotation: '0 315 0',
        info: 'No, No, No U!',
        lat: 40.02824999999999,
        lng: -105.26424,
        gif: {
            geometry: 'primitive:plane;width:1.5;height:1.5;',
            material: 'shader:gif;src:#spiderman;',
            animation: '',
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
    let subentity = document.createElement('a-entity');
    let subentityTitle = document.createElement('a-entity');

    entity.setAttribute('id', generateIdString(model.info));
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
        subentityTitle.setAttribute('text', `value: ${model.info};baseline: bottom;align: center;`);
        subentityTitle.setAttribute('geometry', 'primitive: plane; width: auto; height: auto');
        subentityTitle.setAttribute('material', 'color: purple; opacity: 0.4');
        subentityTitle.setAttribute('position', '0 1.5 0');
        subentityTitle.setAttribute('scale', '5 5 5');
        
        entity.appendChild(subentity);
        entity.appendChild(subentityTitle);
    }

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