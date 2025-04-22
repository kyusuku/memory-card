import { useState, useEffect } from "react";

interface FetchProps {
  name: string;
}

const Fetch = ({ name }: FetchProps) => {
  const [photo, setPhoto] = useState<string>("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }

        return res.json();
      })
      .then((data) => {
        setPhoto(data.sprites.front_default);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error fetching image</p>;
  }

  return <img key={name} src={photo} alt={name} />;
};

export default Fetch;
