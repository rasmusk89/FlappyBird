/*
console.log('Hello from TS!');

interface IState {
    num1: number;
    num2: number;
    result: number;
    [propName: string]: number;
}

let initialState: IState = {
    num1: 0,
    num2: 0,
    result: 0,
}

let proxyState = new Proxy(initialState, {
    set(target: IState, propertyName: string, value: string) {
        target[propertyName] = Number.parseInt(value);
        target.result = target.num1 * target.num2;
        updateUi();
        return true;
    }
})

const updateUi = () => {
    document.querySelectorAll('[data-binding]').forEach(bindedElement => {
        let binding = (bindedElement as HTMLElement).dataset.binding;
        if (binding == 'result') {
            (bindedElement as HTMLSpanElement).innerText = proxyState[binding].toString();
        } else {
            (bindedElement as HTMLInputElement).value = proxyState[binding!].toString();
        }
    });
}

document.querySelectorAll('[data-binding]').forEach(inputElem => {
    inputElem.addEventListener('input', function (this: HTMLInputElement) {
        let binding = this.dataset.binding;
        proxyState[binding!] = Number.parseInt(this.value);
    })
});

proxyState.num1 = 23;

*/
/*
let num1Input = document.body.querySelector('#number1') as HTMLInputElement;
let num2Input = document.body.querySelector('#number2') as HTMLInputElement;
let resultDisplay = document.body.querySelector('#result') as HTMLSpanElement;
let resetButton = document.body.querySelector('#btn-reset') as HTMLButtonElement;

resetButton.addEventListener('click', () => {
    num1 = 1;
    num2 = 1;
    updateUi();
})

function calculate(a: number, b: number) {
    return a * b;
}

function updateUi() {
    num1Input.value = num1.toString();
    num2Input.value = num2.toString();
    resultDisplay.innerText = calculate(num1, num2).toString();
}
let num1 = 5;
let num2 = 2;

let res = calculate(num1, num2);

updateUi();

num1Input.addEventListener('input', function (this: HTMLInputElement) {
    num1 = Number.parseFloat(this.value);
    updateUi();
})
num2Input.addEventListener('input', function (this: HTMLInputElement) {
    num2 = Number.parseFloat(this.value);
    updateUi();
})
*/