import "./App.css";

function App() {
  return (
    <div className="montserrat-font p-6">
      <div className="flex items-start justify-between">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Pokémon Memory Game
        </h1>
        <div className="text-gray-900">
          <p>Score: 0</p>
          <p>Best score: 0</p>
        </div>
      </div>
      <p className="text-gray-900">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
    </div>
  );
}

export default App;
