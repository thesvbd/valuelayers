// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form behavior

    // Load values from the form and convert them to the correct data types
    const stockPrice = parseFloat(document.getElementById('stock-price').value);
    const annualDividend = parseFloat(document.getElementById('annual-dividend').value);
    const dividendGrowth = parseFloat(document.getElementById('dividend-growth').value) / 100;
    // Remove the line with 'dividend-frequency' as this element doesn't exist
    // const dividendFrequency = parseInt(document.getElementById('dividend-frequency').value);
    const years = parseInt(document.getElementById('years').value);
    const dividendTax = parseFloat(document.getElementById('dividend-tax').value) / 100 || 0;
    const showPaybackPeriod = document.getElementById('show-payback-period').checked;

    // Dividend calculations
    const { results, totalDividends, paybackPeriod } = calculateDividends(stockPrice, annualDividend, dividendGrowth, dividendTax, years);
    const fullPaybackPeriod = calculateFullPaybackPeriod(stockPrice, annualDividend, dividendGrowth, dividendTax);

    // Display results
    displayResults(results);
    toggleAfterTaxColumn();
    displayPaybackPeriod(showPaybackPeriod, fullPaybackPeriod);

    // Log results to console
    console.log("Results:", results);
}

function displayResults(results) {
    const resultsTable = document.getElementById('results-table');

    // Create HTML for results
    resultsTable.querySelector('tbody').innerHTML = results.map(result => `
        <tr>
            <td>${result.year}</td>
            <td>${parseFloat(result.dividendBeforeTax).toFixed(2)}</td>
            <td class="after-tax-cell">${parseFloat(result.dividendAfterTax).toFixed(2)}</td>
            <td>${parseFloat(result.dividendYield).toFixed(2)}</td>
        </tr>
    `).join('');

    resultsTable.classList.remove('hidden'); // Show the table
}

function toggleAfterTaxColumn() {
    const dividendTaxInput = document.getElementById('dividend-tax');
    const isTaxFilled = dividendTaxInput.value !== '';
    const afterTaxHeader = document.getElementById('after-tax-header');
    const afterTaxCells = document.querySelectorAll('.after-tax-cell');

    afterTaxHeader.classList.toggle('hidden', !isTaxFilled);
    afterTaxCells.forEach(cell => cell.classList.toggle('hidden', !isTaxFilled));
}

function calculateDividends(stockPrice, annualDividend, dividendGrowth, dividendTax, years) {
    const results = [];
    let totalDividends = 0;
    let paybackPeriod = null;

    for (let year = 1; year <= years; year++) {
        const dividendBeforeTax = annualDividend * Math.pow(1 + dividendGrowth, year - 1);
        const dividendAfterTax = dividendBeforeTax * (1 - dividendTax);
        const dividendYield = (dividendAfterTax / stockPrice) * 100;

        totalDividends += dividendAfterTax;

        if (paybackPeriod === null && totalDividends >= stockPrice) {
            paybackPeriod = year;
        }

        results.push({
            year,
            dividendBeforeTax,
            dividendAfterTax,
            dividendYield
        });
    }

    return { results, totalDividends, paybackPeriod };
}

function calculateFullPaybackPeriod(stockPrice, annualDividend, dividendGrowth, dividendTax) {
    let totalDividends = 0;
    let year = 0;

    while (totalDividends < stockPrice) {
        year++;
        const dividendBeforeTax = annualDividend * Math.pow(1 + dividendGrowth, year - 1);
        const dividendAfterTax = dividendBeforeTax * (1 - dividendTax);
        totalDividends += dividendAfterTax;
    }

    return year;
}

function displayPaybackPeriod(show, paybackPeriod) {
    const paybackPeriodResult = document.getElementById('payback-period-result');
    const paybackPeriodText = document.getElementById('payback-period-text');

    if (show) {
        paybackPeriodResult.classList.remove('hidden');
        if (paybackPeriod) {
            paybackPeriodText.textContent = `Your initial investment will be paid back in approximately ${paybackPeriod} years.`;
        } else {
            paybackPeriodText.textContent = 'Unable to calculate the investment payback period.';
        }
    } else {
        paybackPeriodResult.classList.add('hidden');
    }
}

// Add event listener for form submission
document.getElementById('calculator-form').addEventListener('submit', handleFormSubmit);

// Set step attributes for input fields
document.getElementById('stock-price').setAttribute('step', '0.01');
document.getElementById('annual-dividend').setAttribute('step', '0.01');
document.getElementById('dividend-growth').setAttribute('step', '0.01');
document.getElementById('dividend-frequency').setAttribute('step', '1');
document.getElementById('years').setAttribute('step', '1');
document.getElementById('dividend-tax').setAttribute('step', '0.01');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    const dividendTaxInput = document.getElementById('dividend-tax');
    const showPaybackPeriodCheckbox = document.getElementById('show-payback-period');

    form.addEventListener('submit', handleFormSubmit);
    dividendTaxInput.addEventListener('input', toggleAfterTaxColumn);
    showPaybackPeriodCheckbox.addEventListener('change', () => {
        const paybackPeriodResult = document.getElementById('payback-period-result');
        paybackPeriodResult.classList.toggle('hidden', !showPaybackPeriodCheckbox.checked);
    });

    // Set step attributes for input fields
    document.getElementById('stock-price').setAttribute('step', '0.01');
    document.getElementById('annual-dividend').setAttribute('step', '0.01');
    document.getElementById('dividend-growth').setAttribute('step', '0.01');
    // Remove the line with 'dividend-frequency'
    // document.getElementById('dividend-frequency').setAttribute('step', '1');
    document.getElementById('years').setAttribute('step', '1');
    document.getElementById('dividend-tax').setAttribute('step', '0.01');
});