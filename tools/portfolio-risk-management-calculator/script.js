function calculatePortfolioRisk() {
    // Get input values
    const portfolioValue = parseFloat(document.getElementById('portfolioValue').value);
    const riskTolerance = parseFloat(document.getElementById('riskTolerance').value);
    const positionSize = parseFloat(document.getElementById('positionSize').value);
    const stopLoss = parseFloat(document.getElementById('stopLoss').value);

    // Validate inputs
    if (!validateInputs(portfolioValue, riskTolerance, positionSize, stopLoss)) {
        return;
    }

    // Calculate risk metrics
    const maxPositionRisk = calculateMaxPositionRisk(portfolioValue, riskTolerance);
    const portfolioRiskPercentage = calculatePortfolioRiskPercentage(positionSize, stopLoss, portfolioValue);
    const maxLossAmount = calculateMaxLossAmount(positionSize, stopLoss);
    const recommendedPositionSize = calculateRecommendedPositionSize(portfolioValue, riskTolerance, stopLoss);

    // Display results
    displayResults(maxPositionRisk, portfolioRiskPercentage, maxLossAmount, recommendedPositionSize);
}

function validateInputs(portfolioValue, riskTolerance, positionSize, stopLoss) {
    if (isNaN(portfolioValue) || isNaN(riskTolerance) || isNaN(positionSize) || isNaN(stopLoss)) {
        alert('Please fill in all fields with valid numbers');
        return false;
    }

    if (portfolioValue <= 0) {
        alert('Portfolio value must be greater than 0');
        return false;
    }

    if (riskTolerance <= 0 || riskTolerance > 100) {
        alert('Risk tolerance must be between 0 and 100');
        return false;
    }

    if (positionSize <= 0) {
        alert('Position size must be greater than 0');
        return false;
    }

    if (stopLoss <= 0 || stopLoss > 100) {
        alert('Stop loss must be between 0 and 100');
        return false;
    }

    return true;
}

function calculateMaxPositionRisk(portfolioValue, riskTolerance) {
    return (portfolioValue * (riskTolerance / 100));
}

function calculatePortfolioRiskPercentage(positionSize, stopLoss, portfolioValue) {
    return ((positionSize * (stopLoss / 100)) / portfolioValue) * 100;
}

function calculateMaxLossAmount(positionSize, stopLoss) {
    return positionSize * (stopLoss / 100);
}

function calculateRecommendedPositionSize(portfolioValue, riskTolerance, stopLoss) {
    const maxRiskAmount = calculateMaxPositionRisk(portfolioValue, riskTolerance);
    return (maxRiskAmount / (stopLoss / 100));
}

function displayResults(maxPositionRisk, portfolioRiskPercentage, maxLossAmount, recommendedPositionSize) {
    // Format numbers for display
    const formatCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const formatPercent = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Update DOM elements with formatted values
    document.getElementById('maxPositionRisk').textContent = formatCurrency.format(maxPositionRisk);
    document.getElementById('portfolioRiskPercentage').textContent = formatPercent.format(portfolioRiskPercentage / 100);
    document.getElementById('maxLossAmount').textContent = formatCurrency.format(maxLossAmount);
    document.getElementById('recommendedPositionSize').textContent = formatCurrency.format(recommendedPositionSize);

    // Show results section
    document.getElementById('result').classList.remove('hidden');
}

// Add event listeners for input validation
document.addEventListener('DOMContentLoaded', function() {
    const inputs = ['portfolioValue', 'riskTolerance', 'positionSize', 'stopLoss'];
    
    inputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        element.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9.]/g, '');
        });
    });
});
