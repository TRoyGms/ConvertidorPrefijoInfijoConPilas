export class View {
    constructor() {
        this.input = document.getElementById('expressionInput');
        this.output = document.getElementById('result');
    }

    getInput() {
        return this.input.value;
    }

    clearInput() {
        this.input.value = '';
    }

    setOutput(output) {
        this.output.value = output;
    }
}
