# Recipe Finder Website

#### Introduction
The Recipe Finder built with React offers a quick and simple way to search for recipes online. Powered by the Edamam API, it provides users with real-time results based on their preferences, whether they're looking for trending dishes or saving favorites. This project focuses on creating a clean, user-friendly interface to make recipe hunting easy and enjoyable. Let's explore how to build it step by step!

#### Project Overview
The **Recipe Finder** allows users to:
- Search for recipes by name.
- View trending and newly added recipes.
- View detailed information about individual recipes.
- Add recipes to a favorites list and persist the data using `localStorage`.

#### Features
- **Search Functionality**: Users can search for recipes by entering a query.
- **Trending Recipes**: Displays currently trending recipes from the API.
- **New Recipes**: Displays the latest recipes from the API.
- **Recipe Detail**: Displays detailed information about a selected recipe.
- **Favorites**: Allows users to add recipes to a favorites list, which is saved locally.

#### Technologies Used
- **React**: For building the user interface.
- **React Router**: For navigation between different pages.
- **Edamam API**: For fetching recipes.
- **CSS**: For styling the application.

#### Project Structure

```plaintext
src/
│
├── components/
│   └── Navbar.js
│
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Trending.js
│   ├── NewRecipe.js
│   ├── RecipeDetail.js
│   ├── Contact.js
│   └── Favorites.js
│
├── App.js
├── index.js
├── App.css
└── index.css
```

#### Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/abhishekgurjar_in/recipe-finder.git
   cd recipe-finder
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

4. Obtain your **Edamam API** credentials (API ID and API Key) from the [Edamam website](https://www.edamam.com/).

5. Add your API credentials inside the pages where API calls are made, such as `Home.js`, `Trending.js`, `NewRecipe.js`, and `RecipeDetail.js`.


#### Live Demo
You can view the live demo of the project [here](https://recipe-finder-in.netlify.app).

#### Screenshots

![Screenshot 2024-09-13 080658](https://github.com/user-attachments/assets/ce9602e2-9449-4258-abc1-9899b87de834)


#### Conclusion
The **Recipe Finder Website** is a powerful tool for anyone looking to discover new and trending recipes. By leveraging React for the front end and the Edamam API for data, we can provide a seamless user experience. You can further customize this project by adding features such as pagination, user authentication, or even more detailed filtering options.

Feel free to experiment with the project and make it your own!

#### Credits
- API: [Edamam](https://www.edamam.com/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)

#### Author
**Abhishek Gurjar** is a dedicated web developer passionate about creating practical and functional web applications. Check out more of his projects on [GitHub](https://github.com/abhishekgurjar-in).
