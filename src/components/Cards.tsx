interface CardsProps {
  onCardClick: (pokemon: string) => void;
  pokemonArr: string[];
}

const Cards = ({ onCardClick, pokemonArr }: CardsProps) => {
  let count = 0;
  const pokemonDisplayIndex = new Set<number>();
  while (count < 12) {
    const randomIndex = Math.floor(Math.random() * 36);
    if (!pokemonDisplayIndex.has(randomIndex)) {
      pokemonDisplayIndex.add(randomIndex);
      count++;
    }
  }

  const handleClick = (pokemon: string) => {
    onCardClick(pokemon);
  };

  return (
    <>
      {Array.from(pokemonDisplayIndex).map((index: number) => (
        <div
          key={index}
          className="flex min-h-[300px] flex-col rounded-[15px] bg-[#fff] p-2 opacity-[0.85] shadow-2xl hover:bg-blue-200 hover:shadow-blue-300 max-2xl:min-h-0 max-lg:min-h-0"
          onClick={() => handleClick(pokemonArr[index])}
        >
          <img src={pokemonArr[index]} alt={`Pokemon ${index}`} />
        </div>
      ))}
    </>
  );
};

export default Cards;
