let allFlavorCounts = {};

function promptFlavors() {
    const userInput = document.getElementById('flavorInput').value;
    if (userInput.trim() === '') return;

    const flavorCounts = processFlavors(userInput);
    displayFlavorCounts(flavorCounts);
    allFlavorCounts = aggregateFlavorCounts(allFlavorCounts, flavorCounts);
    document.getElementById('flavorInput').value = ''; // Clear input field
}

function displayFlavorCounts(flavorCounts) {
    const output = document.getElementById('output');
    output.innerHTML += `<p>${JSON.stringify(flavorCounts)}</p>`;
}

function showSummary() {
    const output = document.getElementById('output');
    output.innerHTML += `<h3>Total Order Summary:</h3><p>${JSON.stringify(allFlavorCounts)}</p>`;
}

// Other functions (processFlavors, aggregateFlavorCounts) remain the same


