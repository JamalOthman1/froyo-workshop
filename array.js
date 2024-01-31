function promptFlavors() {
    let continueOrdering = true;
    let allFlavorCounts = {};

    while (continueOrdering) {
        const userInput = prompt("Enter your froyo flavors, separated by commas (or leave blank and press OK to finish):");
        
        // Check if the user pressed "OK" with no input or "Cancel"
        if (userInput === null || userInput.trim() === '') {
            continueOrdering = false;
        } else {
            const flavorCounts = processFlavors(userInput);
            console.table(flavorCounts);
            allFlavorCounts = aggregateFlavorCounts(allFlavorCounts, flavorCounts);
        }
    }

    console.log("Total Order Summary:");
    console.table(allFlavorCounts);
}

function processFlavors(flavorsString) {
    const flavorsArray = flavorsString.split(',').map(flavor => flavor.trim().toLowerCase());
    const flavorCounts = {};

    flavorsArray.forEach(flavor => {
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    });

    return flavorCounts;
}

function aggregateFlavorCounts(allCounts, newCounts) {
    for (let flavor in newCounts) {
        if (newCounts.hasOwnProperty(flavor)) {
            allCounts[flavor] = (allCounts[flavor] || 0) + newCounts[flavor];
        }
    }
    return allCounts;
}

// Initial call to start the process
promptFlavors();

