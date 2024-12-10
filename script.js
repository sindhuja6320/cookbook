document.getElementById('generate').addEventListener('click', function() {
    const period = document.getElementById('period').value;
    const recipeDiv = document.getElementById('recipe');
    const shareButton = document.getElementById('share');

    let recipe = '';

    switch (period) {
        case 'ancientRome':
            recipe = `
                <h2>Moretum (Herb Cheese Spread)</h2>
                <p><strong>Ingredients:</strong> Fresh cheese, garlic, fresh herbs (parsley, coriander, rue), olive oil, salt, bread.</p>
                <p><strong>Instructions:</strong> Combine minced garlic and herbs, mix with cheese and olive oil, serve with bread.</p>
            `;
            break;
        case 'medievalEurope':
            recipe = `
                <h2>Pottage</h2>
                <p><strong>Ingredients:</strong> Barley, vegetables (carrots, onions), herbs, salt, water.</p>
                <p><strong>Instructions:</strong> Boil barley and vegetables in water, season with herbs and salt.</p>
            `;
            break;
        case 'colonialAmerica':
            recipe = `
                <h2>Johnny Cakes</h2>
                <p><strong>Ingredients:</strong> Cornmeal, water, salt, butter.</p>
                <p><strong>Instructions:</strong> Mix cornmeal with water and salt, fry in butter until golden.</p>
            `;
            break;
        case 'victorianEngland':
            recipe = `
                <h2>Victoria Sponge Cake</h2>
                <p><strong>Ingredients:</strong> Flour, sugar, butter, eggs, jam, cream.</p>
                <p><strong>Instructions:</strong> Cream butter and sugar, add eggs and flour, bake, and fill with jam and cream.</p>
            `;
            break;
        case '1920sAmerica':
            recipe = `
                <h2>Deviled Eggs</h2>
                <p><strong>Ingredients:</strong> Eggs, mayonnaise, mustard, paprika, salt.</p>
                <p><strong>Instructions:</strong> Hard boil the eggs, cut in half, mix yolks with mayonnaise and mustard, refill the whites, and sprinkle with paprika.</p>
            `;
            break;
        default:
            recipe = '<p>Please select a period to generate a recipe.</p>';
    }

    recipeDiv.innerHTML = recipe;

    // Show the share button if a recipe is generated
    if (recipe) {
        shareButton.style.display = 'block';
    } else {
        shareButton.style.display = 'none';
    }
});

// Share functionality
document.getElementById('share').addEventListener('click', function() {
    const recipeDiv = document.getElementById('recipe');
    const recipeText = recipeDiv.innerText; // Get the text of the recipe

    if (navigator.share) {
        navigator.share({
            title: 'Check out this recipe!',
            text: recipeText,
            url: window.location.href // You can also share the URL of the page
        })
        .then(() => console.log('Recipe shared successfully!'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        alert('Sharing is not supported in this browser.'); // Fallback for unsupported browsers
    }
});