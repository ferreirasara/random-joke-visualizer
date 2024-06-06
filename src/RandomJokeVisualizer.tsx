import { useCallback, useEffect, useState } from "react";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}
const RandomJokeVisualizer = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJoke = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://official-joke-api.appspot.com/jokes/random`);
      setJoke(await res.json());
    } catch {
      setJoke(undefined);
    }
    setLoading(false);
  }, [])

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <div className="wrapper">
      {loading || !joke
        ? <span className="loader" />
        : <>
          <strong>
            {joke?.setup}
          </strong>
          <i>
            {joke?.punchline}
          </i>
        </>
      }
    </div>
  )
}

export default RandomJokeVisualizer;
