class Recipe {
    constructor(name, instructions) {
        this.name = name;
        this.instructions = instructions;
    }
    getHtml() {
        return `<div class="recipe-card">
            <h3 id="recipe-title">${this.name}</h3>
            <p class = "instructions><strong>Instructions:</strong> ${this.instructions}"</p>
            </div>`
    }

    async addRecipe(name, instructions) {
        const containerDiv = document.getElementById('recipe-container');

        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const rawData = await response.json();

            const recipeList = rawData.recipes.map(data => new Recipe(data.name, data.difficulty, data.prepTimeMinutes));
            const quickMeals = repcipeList.filter(recipe => recipe.prepTime < 20);

            quickMeals.forEach( recipe => {
                containerDiv.innerHTML += recipe.getHtml();
            });
        } catch (error) {
            containerDiv.innerHTML = "Could not find a recipe";
            console.error(error);
        }
    }
}
loadRecipes();