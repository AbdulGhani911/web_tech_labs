function addition(a, b) {
    return a + b;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));

function bitwiseAND(a, b) {
    return a & b;
}
function bitwiseOR(a, b) {
    return a | b;
}
function bitwiseXOR(a, b) {
    return a ^ b;
}
let a = 7;
let b = 12;
console.log(bitwiseAND(a, b));
console.log(bitwiseOR(a, b));
console.log(bitwiseXOR(a, b));

function addUp(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
}
console.log(addUp(13));

//task 04
function progressBar(percent) {
    let filledSlots = Math.floor(percent / 10);
    let emptySlots = 10 - filledSlots;
    
    return "#".repeat(filledSlots) + "-".repeat(emptySlots);
}
console.log(progressBar(40));
console.log(progressBar(49));

//task05
function minMax(arr) {
    let minimum = Math.min(...arr);
    let maximum = Math.max(...arr);
    
    return [minimum, maximum];
}
console.log(minMax([1, 2, 3, 4, 5, 6]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

// Task 6
function calculateRepoStats(repos) {
    if (!repos || repos.length === 0) {
        return { maxStars: 0, minStars: 0, avgStars: 0, varianceScore: 0 };
    }

    const stars = repos.map(repo => repo.stars);
    const maxStars = Math.max(...stars);
    const minStars = Math.min(...stars);
    const sumStars = stars.reduce((total, starCount) => total + starCount, 0);
    const avgStars = Math.floor(sumStars / stars.length);
    const varianceScore = Math.abs(maxStars - minStars);

    return {
        maxStars,
        minStars,
        avgStars,
        varianceScore
    };
}

// Task 7
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
    const discountedPrice = basePrice * (1 - discountPercentage / 100);
    const priceWithTax = discountedPrice * (1 + taxRate / 100);
    const finalPrice = Number(priceWithTax.toFixed(2));
    const loyaltyPoints = Math.ceil(finalPrice);

    return {
        finalPrice,
        loyaltyPoints
    };
}

// Task 8
function paginateData(items, pageNumber, pageSize = 5) {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    let data = items.slice(startIndex, startIndex + pageSize);

    return {
        data,
        currentPage: pageNumber,
        totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1
    };
}
let items = ["apple, banana, grapes, strawberry, kiwi"];
console.log("Task 8 Result: ", paginateData(items, 2, 5))