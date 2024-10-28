
function recommendProduct(age, isMember, purchaseHistory) {
    const { tech, fashion, other } = purchaseHistory;

    // Revisaremos si se recomienda un producto de alta tecnología
    if ((isMember && tech >= 5) || (age >= 18 && age <= 30 && fashion >= 2)) {
        return "High-Tech Product";
    }
    // Revisaremos si se recomienda un producto de moda
    else if (!isMember && (tech + fashion + other >= 3) || (age >= 25 && age <= 40)) {
        return "Fashion Product";
    }
    // Si no cumple con las condiciones anteriores, se recomienda un producto genérico
    else {
        return "Generic Product";
    }
}


console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); // "High-Tech Product"
console.log(recommendProduct(35, false, { tech: 1, fashion: 3, other: 0 })); // "Fashion Product"
console.log(recommendProduct(50, false, { tech: 0, fashion: 1, other: 1 })); // "Generic Product"
