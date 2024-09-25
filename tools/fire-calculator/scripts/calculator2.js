document.getElementById('calculator2').addEventListener('submit', function(e) {
    e.preventDefault();

    const currentAge = parseFloat(document.getElementById('currentAge2').value);
    const targetAge = parseFloat(document.getElementById('targetAge2').value);
    const futureMonthlyExpenses = parseFloat(document.getElementById('futureMonthlyExpenses2').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings2').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn2').value) / 100;
    const annualInflation = parseFloat(document.getElementById('annualInflation2').value) / 100;
    const withdrawalRate = 0.04; // Fixed 4% rule

    const applyInflationToExpenses = document.getElementById('applyInflationToExpenses2').checked;
    const applyInflationToInvestments = document.getElementById('applyInflationToInvestments2').checked;

    const result = calculateRequiredMonthlyInvestment(currentAge, targetAge, futureMonthlyExpenses, currentSavings, annualReturn, annualInflation, withdrawalRate, applyInflationToExpenses, applyInflationToInvestments);

    let tableHTML = '<h3 class="text-lg font-semibold mt-6 mb-2">Savings Progress</h3>';
    tableHTML += '<div class="overflow-x-auto"><table class="w-full mt-2 border-collapse border border-gray-300 text-sm"><thead><tr><th class="border border-gray-300 p-1 bg-gray-100">Year</th><th class="border border-gray-300 p-1 bg-gray-100">Age</th><th class="border border-gray-300 p-1 bg-gray-100">Savings</th><th class="border border-gray-300 p-1 bg-gray-100">Annual Investment</th></tr></thead><tbody>';
    result.yearlyData.forEach((data, index) => {
        tableHTML += `<tr><td class="border border-gray-300 p-1">${index + 1}</td><td class="border border-gray-300 p-1">${data.age}</td><td class="border border-gray-300 p-1">$${Math.round(data.savings).toLocaleString('en-US')}</td><td class="border border-gray-300 p-1">$${Math.round(data.annualInvestment).toLocaleString('en-US')}</td></tr>`;
    });
    tableHTML += '</tbody></table></div>';

    tableHTML += '<h3 class="text-lg font-semibold mt-6 mb-2">Retirement Simulation</h3>';
    tableHTML += '<div class="overflow-x-auto"><table class="w-full mt-2 border-collapse border border-gray-300 text-sm"><thead><tr><th class="border border-gray-300 p-1 bg-gray-100">Age</th><th class="border border-gray-300 p-1 bg-gray-100">Savings</th><th class="border border-gray-300 p-1 bg-gray-100">Annual Expenses</th></tr></thead><tbody>';
    
    let retirementSavings = result.yearlyData[result.yearlyData.length - 1].savings;
    let retirementExpenses = result.yearlyData[result.yearlyData.length - 1].annualExpenses;
    
    for (let age = targetAge; age <= 100; age++) {
        tableHTML += `<tr><td class="border border-gray-300 p-1">${age}</td><td class="border border-gray-300 p-1">$${Math.round(retirementSavings).toLocaleString('en-US')}</td><td class="border border-gray-300 p-1">$${Math.round(retirementExpenses).toLocaleString('en-US')}</td></tr>`;
        retirementSavings = retirementSavings * (1 + annualReturn) - retirementExpenses;
        if (applyInflationToExpenses) {
            retirementExpenses *= (1 + annualInflation);
        }
    }
    tableHTML += '</tbody></table></div>';

    let investmentText = applyInflationToInvestments
        ? `you need to start investing with a monthly amount of <span class="font-bold text-indigo-600">$${Math.ceil(result.monthlyInvestment).toLocaleString('en-US')}</span>, which will increase annually with inflation`
        : `you need to invest <span class="font-bold text-indigo-600">$${Math.ceil(result.monthlyInvestment).toLocaleString('en-US')}</span> monthly`;

    document.getElementById('result2').innerHTML = `
        <div class="space-y-4 text-sm">
            <p class="font-medium">To achieve financial independence at age ${targetAge}, ${investmentText}.</p>
            <p class="font-medium">Total target amount to accumulate by age ${targetAge}: <span class="font-bold text-indigo-600">$${Math.round(result.requiredAmount).toLocaleString('en-US')}</span></p>
            <p class="text-xs italic text-gray-600">This calculation uses the 4% rule, which assumes you can safely withdraw 4% of your portfolio annually without running out of savings. This rule is widely used in the FIRE (Financial Independence, Retire Early) community for long-term financial independence planning.</p>
        </div>
        <div class="mt-6">
            ${tableHTML}
        </div>
    `;
    
    document.getElementById('result2').scrollIntoView({ behavior: 'smooth' });
});

function calculateRequiredMonthlyInvestment(currentAge, targetAge, futureMonthlyExpenses, currentSavings, annualReturn, annualInflation, withdrawalRate, applyInflationToExpenses, applyInflationToInvestments) {
    const years = targetAge - currentAge;
    const monthlyReturn = Math.pow(1 + annualReturn, 1/12) - 1;
    const monthlyInflation = Math.pow(1 + annualInflation, 1/12) - 1;

    let yearlyData = [];
    let monthlyInvestment = 0;
    let totalSavings = currentSavings;

    while (true) {
        let annualExpenses = futureMonthlyExpenses * 12;
        if (applyInflationToExpenses) {
            annualExpenses *= Math.pow(1 + annualInflation, years);
        }
        const requiredAmount = annualExpenses / withdrawalRate;

        totalSavings = currentSavings;
        yearlyData = [];
        for (let year = 0; year < years; year++) {
            let annualInvestment = 0;
            for (let month = 0; month < 12; month++) {
                let adjustedMonthlyInvestment = applyInflationToInvestments 
                    ? monthlyInvestment * Math.pow(1 + monthlyInflation, year * 12 + month) 
                    : monthlyInvestment;
                totalSavings = totalSavings * (1 + monthlyReturn) + adjustedMonthlyInvestment;
                annualInvestment += adjustedMonthlyInvestment;
            }
            yearlyData.push({
                age: currentAge + year + 1,
                savings: totalSavings,
                annualExpenses: annualExpenses,
                annualInvestment: annualInvestment
            });
        }

        if (totalSavings >= requiredAmount) {
            break;
        }
        monthlyInvestment += 10; // Increase step for faster convergence
    }

    return {
        monthlyInvestment: monthlyInvestment,
        requiredAmount: totalSavings,
        yearlyData: yearlyData
    };
}
