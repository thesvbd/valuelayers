function calculateSimpleDCA(prices, monthlyInvestment) {
    // Jednoduchá DCA strategie - investuje stejnou částku každý měsíc
    return prices.map(() => monthlyInvestment);
}
