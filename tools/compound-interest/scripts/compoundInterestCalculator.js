document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('compoundInterestCalculator');
    const resultDiv = document.getElementById('result');
    const explanationDiv = document.getElementById('explanation');
    let chart = null;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
        const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
        const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100;
        const years = parseInt(document.getElementById('years').value);
        const adjustForInflation = document.getElementById('adjustForInflation').checked;
        const inflationRate = parseFloat(document.getElementById('inflationRate').value) / 100;

        const result = calculateCompoundInterest(initialInvestment, monthlyContribution, annualReturn, years, adjustForInflation, inflationRate);

        resultDiv.innerHTML = `
            <p class="mb-1">Final investment value: <strong>${Math.round(result.finalValue).toLocaleString('en-US')}</strong></p>
            <p class="mb-1">Invested amount: <strong>${Math.round(result.totalContributions).toLocaleString('en-US')}</strong></p>
            <p class="mb-1">Total earnings: <strong>${Math.round(result.totalEarnings).toLocaleString('en-US')}</strong></p>
            <p>Inflation-adjusted investment value: <strong>${Math.round(result.inflationAdjustedValue).toLocaleString('en-US')}</strong></p>
        `;

        explanationDiv.innerHTML = `
            <p class="mt-2">
                <strong>Explanation:</strong> The inflation-adjusted investment value represents the real purchasing power of your investment in the future. 
                While the nominal investment value shows how much money you will have, this adjusted value tells you what you will be able to buy with that money 
                compared to today. It helps you better understand the real growth of your investment considering the expected price increases over time.
            </p>
        `;

        updateChart(result.yearlyData);
    });

    function calculateCompoundInterest(initialInvestment, monthlyContribution, annualReturn, years, adjustForInflation, inflationRate) {
        let balance = initialInvestment;
        let inflationAdjustedBalance = initialInvestment;
        const monthlyRate = annualReturn / 12;
        const yearlyData = [];
        let totalContributions = initialInvestment;
        let currentMonthlyContribution = monthlyContribution;

        for (let year = 1; year <= years; year++) {
            if (adjustForInflation && year > 1) {
                currentMonthlyContribution *= (1 + inflationRate);
            }

            for (let month = 1; month <= 12; month++) {
                balance += currentMonthlyContribution;
                totalContributions += currentMonthlyContribution;
                balance *= (1 + monthlyRate);
            }
            
            inflationAdjustedBalance = balance / Math.pow(1 + inflationRate, year);
            yearlyData.push({
                year, 
                balance, 
                inflationAdjustedBalance, 
                totalContributions, 
                monthlyContribution: currentMonthlyContribution
            });
        }

        const finalValue = balance;
        const inflationAdjustedValue = inflationAdjustedBalance;
        const totalEarnings = finalValue - totalContributions;

        return {finalValue, inflationAdjustedValue, totalContributions, totalEarnings, yearlyData};
    }

    function updateChart(yearlyData) {
        const ctx = document.getElementById('investmentChart').getContext('2d');
        
        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: yearlyData.map(data => data.year),
                datasets: [
                    {
                        label: 'Investment Value',
                        data: yearlyData.map(data => data.balance),
                        borderColor: 'rgb(79, 70, 229)',
                        backgroundColor: 'rgba(79, 70, 229, 0.1)',
                        fill: true,
                        tension: 0.1
                    },
                    {
                        label: 'Inflation-Adjusted Investment Value',
                        data: yearlyData.map(data => data.inflationAdjustedBalance),
                        borderColor: 'rgb(220, 38, 38)',
                        backgroundColor: 'rgba(220, 38, 38, 0.1)',
                        fill: true,
                        tension: 0.1
                    },
                    {
                        label: 'Invested Amount',
                        data: yearlyData.map(data => data.totalContributions),
                        borderColor: 'rgb(16, 185, 129)',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return Math.round(value).toLocaleString('en-US');
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(context.parsed.y));
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }
});
