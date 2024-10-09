function calculateForwardPE() {
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);
    const expectedEPS = parseFloat(document.getElementById('expectedEPS').value);

    if (isNaN(currentPrice) || isNaN(expectedEPS) || expectedEPS <= 0) {
        document.getElementById('result').innerHTML = '<p class="text-red-500">Please enter valid numbers. Expected EPS must be greater than zero.</p>';
        document.getElementById('result').classList.remove('hidden');
        return;
    }

    const forwardPE = currentPrice / expectedEPS;

    let interpretation = '';
    if (forwardPE < 15) {
        interpretation = 'This might indicate that the stock is undervalued or that the market expects earnings to decline.';
    } else if (forwardPE >= 15 && forwardPE <= 25) {
        interpretation = 'This is generally considered a moderate valuation, typical for stable companies with steady growth.';
    } else {
        interpretation = 'This might indicate that the stock is overvalued or that the market expects high future growth.';
    }

    document.getElementById('result').innerHTML = `
        <h3 class="text-lg font-semibold mb-2">Results:</h3>
        <p class="mb-2">Forward P/E Ratio: ${forwardPE.toFixed(2)}</p>
        <p class="text-sm text-gray-600 dark:text-neutral-400 mb-2">${interpretation}</p>
        <h4 class="text-md font-semibold mb-1">General Interpretation Guidelines:</h4>
        <ul class="list-disc list-inside text-sm text-gray-600 dark:text-neutral-400">
            <li>Forward P/E < 15: Often considered undervalued or indicating low growth expectations</li>
            <li>Forward P/E 15-25: Generally seen as fairly valued for average growth companies</li>
            <li>Forward P/E > 25: May indicate overvaluation or high growth expectations</li>
        </ul>
        <p class="text-sm text-gray-600 dark:text-neutral-400 mt-2">Note: These are general guidelines. Industry norms and company-specific factors should also be considered.</p>
    `;
    document.getElementById('result').classList.remove('hidden');
}
