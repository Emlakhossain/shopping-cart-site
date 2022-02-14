
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productsNumber = productInput.value;
    if (isIncreasing) {
        productsNumber = parseInt(productsNumber) + 1;
    }
    else if (productsNumber > 0) {
        productsNumber = parseInt(productsNumber) - 1;
    }
    productInput.value = productsNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productsNumber * price;

    calculateTotal();

}

function getInputValue(product) {

    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    // console.log(phoneNumber)
    return phoneNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = totalAmount;

}
// phone incresie and dicrease add event listener
document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    // const inputNumber = document.getElementById('case-number');
    // const caseNumber = inputNumber.value;

    updateProductNumber('phone', 1219, false)
});


// caseing add event listener 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
});

document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false)
    // 

})