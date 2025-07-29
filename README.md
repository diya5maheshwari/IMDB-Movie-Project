
# IMDB Movie Project - A Modern React-Based Movie Database

This project is a feature-rich, responsive movie database website built with **React** and **Vite**, and styled with **Tailwind CSS**. It provides a seamless and visually engaging experience for users to discover, explore, and review movies and actors, drawing inspiration from professional platforms like IMDb. The application is designed with a clean, component-based architecture and a centralized data management system to ensure consistency and maintainability.

-----
## 🚀 Live Demo

You can view the live deployment here: **[IMDb Movie Project](https://imdb-movie-project.netlify.app/)**
-----

## Key Features

  * **Dynamic Homepage**: A stunning landing page with a hero section that rotates through featured movies, interactive carousels for "Trending" and "Coming Soon" categories using **Swiper.js**, and a showcase of featured actors.
  * **Comprehensive Movie Details**: Detailed pages for each movie, displaying ratings, genres, duration, a full synopsis, creator and writer information, streaming availability, and a gallery of photos.
  * **In-Depth Actor Profiles**: Dedicated pages for actors, providing detailed biographies, filmographies with links to their movies, a comprehensive list of major awards and nominations, and social media links.
  * **Top-Rated Section**: A curated page that automatically sorts and displays the top 5 highest-rated movies from the central database, dynamically filtering out any upcoming releases.
  * **Centralized Data Management**: A robust "single source of truth" for all movie and actor data located in the `src/data` directory. This architecture ensures data consistency across all components and prevents mismatch errors, making the application scalable and easy to update.
  * **Interactive Review System**: A fully functional review section where users can add their own reviews for movies, vote on the relevance of existing reviews, and delete their own submissions.
  * **Responsive Design**: A fluid and modern UI built with Tailwind CSS that provides an optimal and accessible viewing experience on all devices, from mobile phones to desktop computers.
  * **Smooth Animations**: An engaging user experience enhanced with subtle, performant animations and page transitions powered by **Framer Motion**.

-----

## Tech Stack

This project was built using a modern and efficient tech stack, chosen for performance, scalability, and developer experience.

  * **Core Framework**: [**React**](https://reactjs.org/) - For building a fast, component-based user interface.
  * **Build Tool**: [**Vite**](https://vitejs.dev/) - Provides a lightning-fast development server and optimized build process.
  * **Styling**: [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for creating custom, responsive designs without leaving the HTML.
  * **Routing**: [**React Router**](https://reactrouter.com/) - For handling client-side routing and navigation between different pages.
  * **Animations**: [**Framer Motion**](https://www.framer.com/motion/) - A production-ready motion library for creating beautiful and fluid animations.
  * **Carousels**: [**Swiper.js**](https://swiperjs.com/) - The most modern mobile touch slider with hardware accelerated transitions.
  * **Icons**: [**Lucide React**](https://lucide.dev/) - A beautiful and consistent icon toolkit.

-----

## Project Structure

The project follows a standard React application structure to keep the codebase organized and maintainable.

```
/src
├── /components  # Reusable UI components (NavBar, MovieCard, etc.)
├── /data        # Centralized data files (movies.js, actors.js)
├── /pages       # Top-level page components (Home, MovieDetails, etc.)
├── App.jsx      # Main application component with routing
├── main.jsx     # Entry point of the React application
└── index.css    # Global styles and Tailwind CSS directives
```

-----

## Project Report

For a detailed breakdown of the project's objectives, development process, challenges faced, and solutions implemented, please view the full project report.

  * [**View the Full Project Report (PDF)**](https://github.com/diya5maheshwari/IMDB-Movie-Project/blob/main/Diya_Maheshwari_internship_report.1.pdf)



-----

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * Node.js (version 18.x or higher is recommended)
  * npm (or yarn/pnpm)

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/your-username/IMDB-Movie-Project.git
    ```
2.  Navigate into the project directory:
    ```sh
    cd IMDB-Movie-Project
    ```
3.  Install the necessary NPM packages:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:5173`. Any changes you make to the source code will be reflected instantly in the browser.

-----

## Project Screenshot

Here is a glimpse of the application's homepage, showcasing the clean design and modern user interface.

### Home Page
![Project Screenshot](https://github.com/diya5maheshwari/IMDB-Movie-Project/blob/main/src/assets/Home_page.png)

### Trending Movies 
![Project Screenshot](https://github.com/diya5maheshwari/IMDB-Movie-Project/blob/main/src/assets/Trending_movie.png)

### Coming Soon 
![Project Screenshot](https://github.com/diya5maheshwari/IMDB-Movie-Project/blob/main/src/assets/Comming_soon.png)

### Review 
![Project Screenshot](https://github.com/diya5maheshwari/IMDB-Movie-Project/blob/main/src/assets/Review.png)

### Actor Profile 
![Project Screenshot](https://github.com/diya5maheshwari/IMDB-Movie-Project/blob/main/src/assets/Actor_profile.png)

