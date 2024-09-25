document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dripCalculator');
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    let chart = null;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
        const annualContribution = parseFloat(document.getElementById('annualContribution').value);
        const yearsToGrow = parseInt(document.getElementById('yearsToGrow').value);
        const dividendYield = parseFloat(document.getElementById('dividendYield').value) / 100;
        const dividendGrowthRate = parseFloat(document.getElementById('dividendGrowthRate').value) / 100;
        const stockPriceAppreciation = parseFloat(document.getElementById('stockPriceAppreciation').value) / 100;

        const result = calculateDRIP(initialInvestment, annualContribution, yearsToGrow, dividendYield, dividendGrowthRate, stockPriceAppreciation);

        displayResults(result);
        createChart(result.yearlyData);
    });

    function calculateDRIP(initialInvestment, annualContribution, yearsToGrow, dividendYield, dividendGrowthRate, stockPriceAppreciation) {
        let currentValue = initialInvestment;
        let totalDividends = 0;
        let totalContributions = initialInvestment;
        let yearlyData = [];

        for (let year = 1; year <= yearsToGrow; year++) {
            let yearStartValue = currentValue;
            let dividends = currentValue * dividendYield;
            totalDividends += dividends;
            currentValue += dividends + annualContribution;
            totalContributions += annualContribution;

            // Apply stock price appreciation
            currentValue *= (1 + stockPriceAppreciation);

            // Increase dividend yield for the next year
            dividendYield *= (1 + dividendGrowthRate);

            yearlyData.push({
                year,
                startValue: yearStartValue,
                endValue: currentValue,
                dividends,
                totalContributions,
                totalDividends
            });
        }

        return {
            finalValue: currentValue,
            totalDividends,
            totalContributions,
            yearlyData
        };
    }

    function displayResults(result) {
        resultContent.innerHTML = `
            <p class="mb-2">Final Investment Value: <strong>${Math.round(result.finalValue).toLocaleString()}</strong></p>
            <p class="mb-2">Total Contributions: <strong>${Math.round(result.totalContributions).toLocaleString()}</strong></p>
            <p class="mb-2">Total Dividends Reinvested: <strong>${Math.round(result.totalDividends).toLocaleString()}</strong></p>
            <p>Total Gain: <strong>${Math.round(result.finalValue - result.totalContributions).toLocaleString()}</strong></p>
        `;
        resultDiv.classList.remove('hidden');
    }

    function createChart(yearlyData) {
        const ctx = document.getElementById('dripChart').getContext('2d');

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: yearlyData.map(data => `Year ${data.year}`),
                datasets: [
                    {
                        label: 'Investment Value',
                        data: yearlyData.map(data => data.endValue),
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    },
                    {
                        label: 'Total Contributions',
                        data: yearlyData.map(data => data.totalContributions),
                        borderColor: 'rgb(255, 99, 132)',
                        tension: 0.1
                    },
                    {
                        label: 'Total Dividends',
                        data: yearlyData.map(data => data.totalDividends),
                        borderColor: 'rgb(54, 162, 235)',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value, index, values) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
});
