document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ddm-form');
    if (!form) {
        console.error('Form not found');
        return;
    }
    const resultDiv = document.getElementById('result');
    if (!resultDiv) {
        console.error('Element with ID "result" not found');
        return;
    }
    const advancedModeCheckbox = document.getElementById('advanced-mode');
    const marketPriceContainer = document.getElementById('market-price-container');

    // Adding default values
    document.getElementById('growth').value = '3.0';
    document.getElementById('return').value = '8.0';

    advancedModeCheckbox.addEventListener('change', () => {
        marketPriceContainer.classList.toggle('hidden', !advancedModeCheckbox.checked);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        const dividend = parseFloat(document.getElementById('dividend').value);
        const growth = parseFloat(document.getElementById('growth').value) / 100;
        const returnRate = parseFloat(document.getElementById('return').value) / 100;
        const years = parseFloat(document.getElementById('years').value) || Infinity;
        const marketPrice = parseFloat(document.getElementById('market-price').value);

        if (validateInputs(dividend, growth, returnRate, years)) {
            console.log('Validation successful');
            if (Math.abs(returnRate - growth) < 0.0001) {
                showError('growth', 'Growth rate is too close to the required rate of return.');
                showError('return', 'Required rate of return is too close to the growth rate.');
                return;
            }
            try {
                const stockValue = calculateDDM(dividend, growth, returnRate, years);
                const modelType = years === Infinity ? 'infinite growth' : 'finite growth';
                
                let resultHTML = `
                    <p>Stock value: $${formatNumber(stockValue)}</p>
                    <p class="text-sm mt-2">Model used: DDM with ${modelType}</p>
                    <p class="text-sm">Reason: ${years === Infinity ? 'No specific number of years of growth was provided.' : `A specific number of years of growth was provided: ${years}.`}</p>
                `;

                if (!isNaN(marketPrice)) {
                    let evaluation;
                    let percentageDifference;
                    
                    if (stockValue > marketPrice) {
                        evaluation = 'undervalued';
                        percentageDifference = ((stockValue - marketPrice) / stockValue) * 100;
                    } else {
                        evaluation = 'overvalued';
                        percentageDifference = ((marketPrice - stockValue) / stockValue) * 100;
                    }
                    
                    resultHTML += `
                        <p class="mt-4">Current market price: $${formatNumber(marketPrice)}</p>
                        <p>The stock is ${evaluation} by ${formatNumber(percentageDifference)}%</p>
                    `;
                }

                const dividendYield = (dividend / stockValue * 100).toFixed(2);
                resultHTML += `<p>Dividend yield: ${dividendYield}%</p>`;

                resultHTML += `
                    <p class="text-sm mt-4"><strong>Disclaimer:</strong> This evaluation is based on the input data provided and the assumptions of the DDM model. Always conduct your own analysis and do not use this as the sole source for investment decisions.</p>
                `;

                // Adding dividend projection table
                resultHTML += generateDividendTable(dividend, growth, years);

                resultDiv.style.opacity = '0';
                resultDiv.classList.remove('hidden');
                setTimeout(() => {
                    resultDiv.style.transition = 'opacity 0.5s ease-in-out';
                    resultDiv.style.opacity = '1';
                }, 10);

                resultDiv.innerHTML = resultHTML;
                resultDiv.classList.remove('hidden');
            } catch (error) {
                console.error('Error during calculation or HTML generation:', error);
            }
        } else {
            console.log('Validation failed');
        }
    });

    function calculateDDM(dividend, growth, returnRate, years) {
        if (years === Infinity) {
            return dividend * (1 + growth) / (returnRate - growth);
        } else {
            let value = 0;
            for (let i = 1; i <= years; i++) {
                value += dividend * Math.pow(1 + growth, i) / Math.pow(1 + returnRate, i);
            }
            return value;
        }
    }

    function validateInputs(dividend, growth, returnRate, years) {
        let isValid = true;

        if (isNaN(dividend) || dividend < 0) {
            showError('dividend', 'Please enter a valid positive dividend value.');
            isValid = false;
        }

        if (isNaN(growth) || growth < 0 || growth > 1) {
            showError('growth', 'Please enter a valid growth rate between 0 and 100%.');
            isValid = false;
        }

        if (isNaN(returnRate) || returnRate <= 0 || returnRate > 1) {
            showError('return', 'Please enter a valid required rate of return between 0 and 100%.');
            isValid = false;
        }

        if (years !== Infinity && (isNaN(years) || years < 1)) {
            showError('years', 'Please enter a valid number of years (whole number greater than 0).');
            isValid = false;
        }

        if (growth >= returnRate) {
            showError('growth', 'Growth rate must be less than the required rate of return.');
            showError('return', 'Required rate of return must be greater than the growth rate.');
            isValid = false;
        }

        return isValid;
    }

    function showError(fieldId, message) {
        const errorElement = document.getElementById(`${fieldId}-error`);
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        document.getElementById(fieldId).classList.add('border-red-500');
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('[id$="-error"]');
        errorElements.forEach(element => {
            element.textContent = '';
            element.classList.add('hidden');
        });
        const inputElements = form.querySelectorAll('input');
        inputElements.forEach(element => {
            element.classList.remove('border-red-500');
        });
    }

    function generateDividendTable(dividend, growth, years) {
        const tableYears = Math.min(years, 10);
        let tableHTML = `
            <table class="w-full mt-2 border-collapse border border-gray-300 text-xs">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-2 py-1">Year</th>
                        <th class="border border-gray-300 px-2 py-1">Expected Dividend</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let i = 0; i <= tableYears; i++) {
            const expectedDividend = dividend * Math.pow(1 + growth, i);
            tableHTML += `
                <tr>
                    <td class="border border-gray-300 px-2 py-1">${i}</td>
                    <td class="border border-gray-300 px-2 py-1">$${formatNumber(expectedDividend)}</td>
                </tr>
            `;
        }

        tableHTML += `
                </tbody>
            </table>
        `;

        return tableHTML;
    }

    function formatNumber(number) {
        return new Intl.NumberFormat('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        }).format(number);
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const debouncedSubmit = debounce(() => form.dispatchEvent(new Event('submit')), 300);

    ['dividend', 'growth', 'return', 'years', 'market-price'].forEach(id => {
        document.getElementById(id).addEventListener('input', debouncedSubmit);
    });
});
