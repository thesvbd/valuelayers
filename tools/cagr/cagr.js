function calculateCAGR() {
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const finalValue = parseFloat(document.getElementById('finalValue').value);
    const years = parseFloat(document.getElementById('years').value);

    if (initialValue <= 0 || finalValue <= 0 || years <= 0) {
        showResult('Please enter valid positive numbers for all fields.');
        return;
    }

    const cagr = (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
    
    showResult(`The Compound Annual Growth Rate (CAGR) is ${cagr.toFixed(2)}%`);
}

function showResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p class="text-center text-gray-800 dark:text-neutral-200">${message}</p>`;
    resultDiv.classList.remove('hidden');
}

