document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculator1').addEventListener('submit', function(e) {
        e.preventDefault();

        const currentAge = parseFloat(document.getElementById('currentAge1').value);
        const expectedRetirementExpenses = parseFloat(document.getElementById('expectedRetirementExpenses1').value);
        const currentSavings = parseFloat(document.getElementById('currentSavings1').value);
        const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment1').value);
        const annualReturn = parseFloat(document.getElementById('annualReturn1').value) / 100;
        const annualInflation = parseFloat(document.getElementById('annualInflation1').value) / 100;
        const applyInflationToExpenses = document.getElementById('applyInflationToExpenses1').checked;
        const applyInflationToInvestments = document.getElementById('applyInflationToInvestments1').checked;
        const withdrawalRate = 0.04;

        const result = calculateFinancialIndependenceAge(currentAge, expectedRetirementExpenses, currentSavings, monthlyInvestment, annualReturn, annualInflation, withdrawalRate, applyInflationToExpenses, applyInflationToInvestments);

        let tableHTML = '<h3 class="text-lg font-semibold mt-6 mb-2">Savings Progress</h3>';
        tableHTML += '<div class="overflow-x-auto"><table class="w-full mt-2 border-collapse border border-gray-300 text-sm"><thead><tr><th class="border border-gray-300 p-1 bg-gray-100">Year</th><th class="border border-gray-300 p-1 bg-gray-100">Age</th><th class="border border-gray-300 p-1 bg-gray-100">Savings</th><th class="border border-gray-300 p-1 bg-gray-100">Annual Investment</th></tr></thead><tbody>';
        result.yearlyData.forEach((data, index) => {
            tableHTML += `<tr><td class="border border-gray-300 p-1">${index + 1}</td><td class="border border-gray-300 p-1">${data.age}</td><td class="border border-gray-300 p-1">${Math.round(data.savings).toLocaleString('en-US')}</td><td class="border border-gray-300 p-1">${Math.round(data.annualInvestment).toLocaleString('en-US')}</td></tr>`;
        });
        tableHTML += '</tbody></table></div>';

        tableHTML += '<h3 class="text-lg font-semibold mt-6 mb-2">Retirement Simulation</h3>';
        tableHTML += '<div class="overflow-x-auto"><table class="w-full mt-2 border-collapse border border-gray-300 text-sm"><thead><tr><th class="border border-gray-300 p-1 bg-gray-100">Age</th><th class="border border-gray-300 p-1 bg-gray-100">Savings</th><th class="border border-gray-300 p-1 bg-gray-100">Annual Expenses</th></tr></thead><tbody>';
        
        let retirementSavings = result.yearlyData[result.yearlyData.length - 1].savings;
        let retirementExpenses = result.yearlyData[result.yearlyData.length - 1].annualExpenses;
        
        for (let age = result.age; age <= 100; age++) {
            tableHTML += `<tr><td class="border border-gray-300 p-1">${age}</td><td class="border border-gray-300 p-1">${Math.round(retirementSavings).toLocaleString('en-US')}</td><td class="border border-gray-300 p-1">${Math.round(retirementExpenses).toLocaleString('en-US')}</td></tr>`;
            retirementSavings = retirementSavings * (1 + annualReturn) - retirementExpenses;
            if (applyInflationToExpenses) {
                retirementExpenses *= (1 + annualInflation);
            }
        }
        tableHTML += '</tbody></table></div>';

        document.getElementById('result1').innerHTML = `
            <div class="space-y-4 text-sm">
                <p class="font-medium">You will achieve financial independence at age: <span class="font-bold text-indigo-600">${result.age}</span></p>
                <p class="font-medium">Target amount to accumulate: <span class="font-bold text-indigo-600">${Math.round(result.requiredAmount).toLocaleString('en-US')}</span></p>
                <p class="text-xs italic text-gray-600">The calculation is based on the 4% rule, which assumes you can safely withdraw 4% of your portfolio annually without running out of money. This rule is widely used in the FIRE (Financial Independence, Retire Early) community for long-term financial independence planning.</p>
            </div>
            <div class="mt-6">
                ${tableHTML}
            </div>
        `;
        
        document.getElementById('result1').scrollIntoView({ behavior: 'smooth' });
    });
});

function calculateFinancialIndependenceAge(currentAge, expectedRetirementExpenses, currentSavings, monthlyInvestment, annualReturn, annualInflation, withdrawalRate, applyInflationToExpenses, applyInflationToInvestments) {
    let age = currentAge;
    const monthlyReturn = Math.pow(1 + annualReturn, 1/12) - 1;
    const monthlyInflation = Math.pow(1 + annualInflation, 1/12) - 1;
    let yearlyData = [];

    while (true) {
        const months = (age - currentAge) * 12;
        const inflationAdjustedExpenses = applyInflationToExpenses ? expectedRetirementExpenses * Math.pow(1 + monthlyInflation, months) : expectedRetirementExpenses;
        const requiredAmount = (inflationAdjustedExpenses * 12) / withdrawalRate;

        let futureValue = currentSavings * Math.pow(1 + monthlyReturn, months);
        let adjustedMonthlyInvestment = applyInflationToInvestments ? monthlyInvestment * Math.pow(1 + monthlyInflation, months) : monthlyInvestment;
        futureValue += adjustedMonthlyInvestment * (Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn;

        yearlyData.push({
            age: age,
            savings: futureValue,
            annualExpenses: inflationAdjustedExpenses * 12,
            annualInvestment: adjustedMonthlyInvestment * 12
        });

        if (futureValue >= requiredAmount) {
            return { age, requiredAmount, yearlyData };
        }
        age++;
    }
}
