import { useState, useEffect } from "react";

interface FetchProps {
  name: string;
}

const Fetch = ({ name }: FetchProps) => {
  const [photo, setPhoto] = useState<string>("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.sprites.front_default);
      });
  }, [name]);

  return <img key={name} src={photo} alt={name} />;
};

export default Fetch;
