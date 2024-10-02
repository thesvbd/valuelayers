const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [50],
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    },
    format: {
        to: function (value) {
            return Math.round(value);
        },
        from: function (value) {
            return Number(value);
        }
    }
});

slider.noUiSlider.on('update', function (values, handle) {
    debtPercentage = parseInt(values[handle]);
    equityPercentage = 100 - debtPercentage;
    
    document.getElementById('debtLabel').textContent = `Debt: ${debtPercentage}%`;
    document.getElementById('equityLabel').textContent = `Equity: ${equityPercentage}%`;
});

document.getElementById('waccForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const wd = debtPercentage / 100;
    const we = equityPercentage / 100;
    const rd = parseFloat(document.getElementById('rd').value) / 100;
    const re = parseFloat(document.getElementById('re').value) / 100;
    const t = parseFloat(document.getElementById('t').value) / 100;
    
    const wacc = (wd * rd * (1 - t)) + (we * re);
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p class="text-xl font-bold mb-2 text-gray-800 dark:text-neutral-200">WACC: ${(wacc * 100).toFixed(2)}%</p>
        <p class="text-sm text-gray-600 dark:text-neutral-400 mb-2">
            The Weighted Average Cost of Capital (WACC) of ${(wacc * 100).toFixed(2)}% represents the minimum required return for the company's investment projects.
        </p>
        <p class="text-sm text-gray-600 dark:text-neutral-400 mb-2">
            Projects with a return lower than ${(wacc * 100).toFixed(2)}% should not be implemented as they would destroy company value. For example, a project with a return of ${(wacc * 100 - 1.9).toFixed(2)}% would mean a loss of 1.9% on each dollar invested.
        </p>
        <p class="text-sm text-gray-600 dark:text-neutral-400">
            Conversely, projects with a return higher than ${(wacc * 100).toFixed(2)}% create value for the company. For example, a project with a return of ${(wacc * 100 + 10).toFixed(2)}% would generate a profit of 10 cents for every dollar invested.
        </p>
    `;
    resultElement.classList.remove('hidden');
});
