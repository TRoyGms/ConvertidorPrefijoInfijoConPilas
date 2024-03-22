import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

document.getElementById('convertButton').addEventListener('click', () => {
    controller.convert();
});

document.getElementById('toggleButton').addEventListener('click', () => {
    controller.toggleNotation();
});
