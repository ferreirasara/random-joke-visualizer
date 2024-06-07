import React, { useCallback, useEffect, useState } from "react";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}
export const RandomJokeVisualizer = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  const fetchJoke = useCallback(async () => {
    try {
      const res = await fetch(`https://official-joke-api.appspot.com/jokes/random`);
      setJoke(await res.json());
    } catch {
      setJoke(undefined);
    }
  }, [])

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <div style={{
      'display': 'flex',
      'flexDirection': 'column',
      'gap': '10px',
      'border': '1px solid #696969',
      'borderRadius': '20px',
      'width': 'fit-content',
      'padding': '10px',
    }}>
      {joke ? <>
        <strong>
          {joke?.setup}
        </strong>
        <i>
          {joke?.punchline}
        </i>
      </> : <i>No joke yet.</i>}
    </div>
  )
}
