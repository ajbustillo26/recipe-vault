class Recipe {
    constructor(name, difficulty, prepTime) {
        this.name = name;
        this.difficulty = difficulty;
        this.prepTime = prepTime;
    }

    getHtml() {
        return `<div class="recipe-card">
            <h3 id="recipe-title">${this.name}</h3>
            <p class = "instructions">
            <strong>Difficulty:</strong> ${this.difficulty}<br>
            <strong>Prep Time:</strong> ${this.prepTime} Minutes
            </p>
            </div>`;
    }
}

    async function loadRecipe() {
        const containerDiv = document.document.getElementByID('recipe-container');

        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const rawData = await response.json();

            const recipeList = rawData.recipes.map(data => new Recipe(data.name, data.difficulty, data.prepTimeMinutes));
            const quickMeals = recipeList.filter(recipe => recipe.prepTime < 20);

            containerDiv.innerHTML = '';

            quickMeals.forEach(quickMeal => {
                containerDiv.innerHTML += recipe.getHtml();
            });

        } catch (error) {
            containerDiv.innerHTML = "could not find recipe";
            console.error(error);
        }
    }
    loadRecipe();

