import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.tsx";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState<string[]>([]);
  const [reloadKey, setReloadKey] = useState(0);

  const handleCardClick = (pokemon: string) => {
    if (clickedPokemon.includes(pokemon)) {
      setScore(0);
      setClickedPokemon([]);
      setReloadKey((prevKey) => prevKey + 1);
    } else {
      setClickedPokemon((prev) => [...prev, pokemon]);
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
    }
  };

  return (
    <div className="montserrat-font flex h-full w-full flex-col justify-between p-6">
      <div>
        <div className="flex items-start justify-between gap-1">
          <h1 className="mb-8 flex-3 text-5xl font-bold text-gray-900 max-xl:text-4xl max-lg:text-3xl max-sm:text-3xl">
            Pokémon Memory Game
          </h1>
          <div className="flex-2 text-right font-bold text-gray-900 max-sm:text-[15px]">
            <p>Score {score}</p>
            <p>Best {bestScore}</p>
          </div>
        </div>
        <p className="mb-16 text-sm font-bold text-gray-900 max-lg:mb-4 max-sm:mb-4 max-sm:text-[12px]">
          Get points by clicking on a Pokémon but don't click on any more than
          once!
        </p>
      </div>
      <div className="grid grid-cols-6 gap-8 max-lg:grid-cols-4 max-sm:grid-cols-3 max-sm:gap-2">
        <Cards key={reloadKey} onCardClick={handleCardClick} />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
