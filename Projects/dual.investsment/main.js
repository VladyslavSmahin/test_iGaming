function profitBL(assets, targetPrice, period, percent) {
    let sum = assets / targetPrice;
    let sumPercent = sum * (percent / 100) / 365 * period;
    return `
    assets - ${assets} usdt,
    period - ${period},
    sum- ${sum} btc, 
    sumPercent - ${sumPercent} usdt - ${sumPercent * targetPrice}`;
}

console.log(profitBL(979.92, 64750, 3, 47,18));

function profitSH(assets, targetPrice, period, percent) {
    let sum = assets * targetPrice;
    let sumPercent = sum * (percent / 100) / 365 * period;
    return `
    assets - ${assets} btc,
    period - ${period},
    sum- ${sum}, 
    sumPercent - ${sumPercent}`;
}

console.log(profitSH(0.01, 67500, 3, 138.57));