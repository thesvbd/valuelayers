function calculateRatio() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const profitPrice = parseFloat(document.getElementById('profitPrice').value);
    const lossPrice = parseFloat(document.getElementById('lossPrice').value);

    if (isNaN(purchasePrice) || isNaN(profitPrice) || isNaN(lossPrice)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    const potentialProfit = profitPrice - purchasePrice;
    const potentialLoss = purchasePrice - lossPrice;
    const riskRewardRatio = potentialProfit / potentialLoss;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p class="font-bold text-lg mb-2">Result:</p>
        <p>Risk-Reward Ratio: 1 : ${riskRewardRatio.toFixed(2)}</p>
        <p>Potential Profit: $${potentialProfit.toFixed(2)}</p>
        <p>Potential Loss: $${potentialLoss.toFixed(2)}</p>
        <p class="mt-4"><strong>Warning:</strong> Always conduct your own analysis and do not use this metric and tool as the sole source for investment decisions.</p>
    `;
    resultElement.classList.remove('hidden');
}
