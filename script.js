class Recipe {
    constructor(name = "Mystery Dish", difficulty = "Unknown", prepTime = 0) {
        this.name = name;
        this.difficulty = difficulty;
        this.prepTime = prepTime;
    }

    getHtml() {
        const badge = this.prepTime < 20 ? "⚡ Quick Meal" : "🕰️ Takes a while";

        return `<div class="recipe-card">
            <h3 class="recipe-title">${this.name}</h3>
            <p class="instructions">
                <strong>Difficulty:</strong> ${this.difficulty}<br>
                <strong>Prep Time:</strong> ${this.prepTime} Minutes <br>
                <span class="badge">${badge}</span>
            </p>
        </div>`;
    }
}

document.getElementById('load-btn').addEventListener('click', () => {
    const containerDiv = document.getElementById('recipe-container');
    containerDiv.innerHTML = "Retrieving grandma's recipes...";


    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(rawData => {
            containerDiv.innerHTML = ''; 
            
            const recipeList = rawData.recipes.map(data => new Recipe(data.name, data.difficulty, data.prepTimeMinutes));
            
            recipeList.forEach(recipe => {
                containerDiv.innerHTML += recipe.getHtml();
            });
        })
        .catch(error => {
            containerDiv.innerHTML = "Could not find any recipes.";
            console.error(error);
        });
});
