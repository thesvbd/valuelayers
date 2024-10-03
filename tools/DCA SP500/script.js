let sp500Chart;
let investmentChart;
let sp500Data = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('simulation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        runSimulation();
    });

    // Display disclaimer immediately after page load
    document.getElementById('disclaimer-modal').classList.remove('hidden');

    document.getElementById('close-disclaimer').addEventListener('click', function() {
        document.getElementById('disclaimer-modal').classList.add('hidden');
    });

    loadSP500Data();
});

function loadSP500Data() {
    fetch('sp500data.json')
        .then(response => response.json())
        .then(data => {
            sp500Data = data.sort((a, b) => new Date(a.date) - new Date(b.date));
            initializeCharts();
            runSimulation();
        })
        .catch(error => console.error('Error loading S&P 500 data:', error));
}

function initializeCharts() {
    const sp500Ctx = document.getElementById('sp500-chart').getContext('2d');
    const investmentCtx = document.getElementById('investment-chart').getContext('2d');

    sp500Chart = new Chart(sp500Ctx, createChartConfig('S&P 500', 'rgb(75, 192, 192)'));
    investmentChart = new Chart(investmentCtx, createChartConfig('Investment Value', 'rgb(255, 99, 132)'));
}

function createChartConfig(label, color) {
    return {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: label,
                data: [],
                borderColor: color,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month'
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    };
}

function runSimulation() {
    const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const period = document.querySelector('input[name="sp500-period"]:checked').value;
    const monthsToShow = parseInt(period) * 12;
    
    let filteredData = sp500Data.slice(-monthsToShow);
    
    const prices = filteredData.map(item => item.close);
    const dates = filteredData.map(item => new Date(item.date));
    
    const investmentValues = calculateInvestmentValues(prices, initialInvestment, monthlyInvestment);
    
    updateCharts(prices, investmentValues, dates);
    updateResultsTable(prices, initialInvestment, monthlyInvestment, investmentValues[investmentValues.length - 1]);
}

function calculateInvestmentValues(prices, initialInvestment, monthlyInvestment) {
    let shares = initialInvestment / prices[0];
    let investmentValues = [initialInvestment];

    for (let i = 1; i < prices.length; i++) {
        shares += monthlyInvestment / prices[i];
        investmentValues.push(shares * prices[i]);
    }

    return investmentValues;
}

function updateCharts(prices, investmentValues, dates) {
    updateChart(sp500Chart, prices, dates);
    updateChart(investmentChart, investmentValues, dates);
}

function updateChart(chart, data, dates) {
    chart.data.labels = dates;
    chart.data.datasets[0].data = data;
    chart.update();
}

function updateResultsTable(prices, initialInvestment, monthlyInvestment, finalInvestmentValue) {
    const totalInvested = initialInvestment + (monthlyInvestment * (prices.length - 1));
    const profit = finalInvestmentValue - totalInvested;
    const roi = (profit / totalInvested) * 100;

    const html = `
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Metric</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Value</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Initial Investment</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">$${initialInvestment.toFixed(2)}</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Total Invested</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">$${totalInvested.toFixed(2)}</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Final Value</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">$${finalInvestmentValue.toFixed(2)}</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Profit/Loss</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">$${profit.toFixed(2)}</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ROI</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">${roi.toFixed(2)}%</td>
                </tr>
            </tbody>
        </table>
    `;

    document.getElementById('results-table').innerHTML = html;
}