
function evaluateRisk(income, hasLoans, latePayments, isStudent) {
    // el cliente es de alto riesgo
    if ((income < 20000 && latePayments > 3) || (hasLoans && isStudent)) {
        return 'High';
    }
    // el cliente es de riesgo moderado
    else if ((income >= 20000 && income <= 50000 && latePayments <= 2) || (hasLoans && !isStudent)) {
        return 'Moderate';
    }
    // se considera de bajo riesgo
    else {
        return 'Low';
    }
}

console.log(evaluateRisk(15000, true, 4, true));  // "High"
console.log(evaluateRisk(30000, false, 1, false)); // "Moderate"
console.log(evaluateRisk(60000, false, 0, false)); // "Low"
