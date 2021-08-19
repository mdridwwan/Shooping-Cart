function updateVNumber(product, isIncaresing, price) {
    const Number = document.getElementById(product + '-number');
    let inputNumber = Number.value;
    if (isIncaresing == true) {
        Number.value = parseInt(inputNumber) + 1;
    } else if (inputNumber > 0) {
        Number.value = parseInt(inputNumber) - 1;
    }

    // Update total
    inputNumber = Number.value;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = inputNumber * price;

    // calculate total update
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value)
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //    update all on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//phone increae decrease events
document.getElementById('phone-plus').addEventListener('click', function() {
    updateVNumber('phone', true, 1219);
});

document.getElementById('phone-minus').addEventListener('click', function() {
    updateVNumber('phone', false, 1219);
});


//handle case increae decrease events
document.getElementById('case-plus').addEventListener('click', function() {
    updateVNumber('case', true, 59);
});
document.getElementById('case-minus').addEventListener('click', function() {
    updateVNumber('case', false, 59);
});