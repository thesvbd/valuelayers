export function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form behavior

    // Load values from the form and convert them to the correct data types
    const stockPrice = parseFloat(document.getElementById('stock-price').value);
    const annualDividend = parseFloat(document.getElementById('annual-dividend').value);
    const dividendGrowth = parseFloat(document.getElementById('dividend-growth').value) / 100;
    const dividendFrequency = parseInt(document.getElementById('dividend-frequency').value);
    const years = parseInt(document.getElementById('years').value);
    const dividendTax = parseFloat(document.getElementById('dividend-tax').value) / 100 || 0;

    // Dividend calculations
    const { results, totalDividends } = calculateDividends(stockPrice, annualDividend, dividendGrowth, dividendTax, years);

    // Display results
    displayResults(results);

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
            <td>${parseFloat(result.dividendAfterTax).toFixed(2)}</td>
            <td>${parseFloat(result.dividendYield).toFixed(2)}</td>
        </tr>
    `).join('');

    resultsTable.classList.remove('hidden'); // Show the table
}

export function calculateDividends(stockPrice, annualDividend, dividendGrowth, dividendTax, years) {
    // Dividend calculations
    const results = [];
    let totalDividends = 0;

    for (let year = 1; year <= years; year++) {
        const dividendBeforeTax = annualDividend * Math.pow(1 + dividendGrowth, year - 1);
        const dividendAfterTax = dividendBeforeTax * (1 - dividendTax);
        const dividendYield = (dividendAfterTax / stockPrice) * 100;

        results.push({
            year,
            dividendBeforeTax,
            dividendAfterTax,
            dividendYield
        });

        totalDividends += dividendAfterTax;
    }

    return { results, totalDividends };
}
