import { convertInfixToPrefix, convertPrefixToInfix } from './converters.js';

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.isInfix = true; // Inicialmente estamos en notación infija
    }

    convert() {
        const expression = this.view.getInput();
        this.model.setExpression(expression);
        let result;
        if (this.isInfix) {
            result = convertInfixToPrefix(expression);
        } else {
            result = convertPrefixToInfix(expression);
        }
        this.view.setOutput(result);
        this.view.clearInput();
    }

    toggleNotation() {
        this.isInfix = !this.isInfix;
        const button = document.getElementById('toggleButton');
        button.textContent = this.isInfix ? 'Convertir a Prefija' : 'Convertir a Infija';
    }
}
