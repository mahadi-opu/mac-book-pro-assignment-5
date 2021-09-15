// Main function 
function memoryOption(product, isIncreasing) {
    const extraOption = document.getElementById(product + '-option');
    let extraMemoryPrice = parseInt(extraOption.innerText);
    if (isIncreasing == 'memory-16gb') {
        extraOption.innerText = 180;
    } else if (isIncreasing == 'memory-8gb') {
        extraOption.innerText = 0;
    }
    if (isIncreasing == 'free-delivery') {
        extraOption.innerText = 0;
    }
    else if (isIncreasing == 'argent-delivery') {
        extraOption.innerText = 20;
    }
    if (isIncreasing == 'ssd-256gb') {
        extraOption.innerText = 0;
    }
    else if (isIncreasing == 'ssd-512gb') {
        extraOption.innerText = 100;
    } else if (isIncreasing == 'ssd-1tb') {
        extraOption.innerText = 180;
    }
    extraMemoryPrice = parseInt(extraOption.innerText);
    calcTotal();
    document.getElementById('apply-btn').removeAttribute("disabled", true);
    document.getElementById('promo-text').innerText = 'Add Promo code';
    document.getElementById('promo-text').style.color = '#333';
};
document.getElementById('memory-16gb').addEventListener('click', function () {
    memoryOption('memory', 'memory-16gb');
});
document.getElementById('memory-8gb').addEventListener('click', function () {
    memoryOption('memory', 'memory-8gb');

});
document.getElementById('free-delivery').addEventListener('click', function () {
    memoryOption('delivery', 'free-delivery');
})
document.getElementById('argent-delivery').addEventListener('click', function () {
    memoryOption('delivery', 'argent-delivery');
})

document.getElementById('ssd-256gb').addEventListener('click', function () {
    memoryOption('storage', 'ssd-256gb');
});
document.getElementById('ssd-512gb').addEventListener('click', function () {
    memoryOption('storage', 'ssd-512gb');
});
document.getElementById('ssd-1tb').addEventListener('click', function () {
    memoryOption('storage', 'ssd-1tb');

});

// Get Price & calculate Total 
function getPrices(product) {
    const priceText = document.getElementById(product + '-option').innerText;
    const price = parseInt(priceText);
    return price;
}
function calcTotal() {
    const extraMemoryPrice = getPrices('memory');
    const extrStoragePrice = getPrices('storage');
    const deliveryCharges = getPrices('delivery');
    const total = 1299 + extraMemoryPrice + extrStoragePrice + deliveryCharges;

    document.getElementById('total-price').innerText = total;
    document.getElementById('promo-price').innerText = total;

}

// Promo code 
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    const promoPriceText = document.getElementById('promo-price').innerText;
    const promoPrice = parseFloat(promoPriceText);
    if (promoInput == 'stevekaku') {
        document.getElementById('promo-price').innerText = promoPrice * .8;
        document.getElementById('promo-input').value = '';
        document.getElementById('apply-btn').setAttribute("disabled", true);
        document.getElementById('promo-text').innerText = 'Promo Code Added';
        document.getElementById('promo-text').style.color = '#198754';
    } else {
        document.getElementById('promo-price').innerText = promoPrice;
        document.getElementById('promo-text').innerText = 'Insert a valid Promo!';
        document.getElementById('promo-text').style.color = '#dc3545';
    }
})