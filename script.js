const display = document.getElementById("display");

function appendToDisplay(input) {
    const operators = ['+', '-', '*', '/'];
    const currentValue = display.value;
    const lastChar = currentValue[currentValue.length - 1];

    if (operators.includes(lastChar) && operators.includes(input)) {
        display.value = currentValue.slice(0, -1) + input;
    } else {
        display.value += input;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error!"
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteVal() {
    display.value = display.value.toString().slice(0, -1);
}
