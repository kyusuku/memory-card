# Pokémon Memory Game

A fun and interactive memory game built with React, TypeScript, Tailwind CSS, and Vite. The goal of the game is to click on Pokémon cards without clicking on the same card twice. Each unique click increases your score, and the game resets if you click on a card you've already clicked.

## Try It Out

Check out the live demo: [Here!](https://kyusuku-memory-card.vercel.app)

## Features

- **Dynamic Gameplay**: Cards are shuffled after every click to keep the game challenging.
- **Score Tracking**: Displays the current score and the best score achieved.
- **Responsive Design**: Adapts to different screen sizes, including mobile, tablet, and desktop.
- **Pokémon Images**: Fetches Pokémon images dynamically from the [PokéAPI](https://pokeapi.co/).

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: For styling and responsive design.
- **PokéAPI**: For fetching Pokémon images dynamically.

## Project Structure

```
memory-card/
├── src/
│   ├── components/       # React components (e.g., Cards, Fetch)
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
├── public/               # Public assets
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## How to Play

1. Click on a Pokémon card to earn points.
2. Avoid clicking on the same card more than once.
3. The game resets if you click on a card you've already clicked.
4. Try to beat your best score!

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kyusuku/memory-card.git
   cd memory-card
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.

## Customization

- **Styling**: Modify `src/index.css` or use Tailwind CSS classes in components.
- **Components**: Add or edit components in the `src/components/` directory.
- **Configuration**: Update `tailwind.config.js` or `tsconfig.json` for build and TypeScript settings.

## Future Improvements

- Add more Pokémon cards to increase the variety.
- Introduce difficulty levels with more cards or faster shuffling.
- Add animations for card clicks and shuffling.
- Preload Pokémon images for faster load.

## Acknowledgments

- **[PokéAPI](https://pokeapi.co/)**: For providing the Pokémon data and images.
- **[Tailwind CSS](https://tailwindcss.com/)**: For the responsive and modern styling.
- **[The Odin Project](https://www.theodinproject.com/)**: For providing the curriculum and inspiration for this project.
