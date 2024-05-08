import React, { useState, useEffect } from 'react';

export default function useFindMeaning(word: string) {
  const [dict, setDict] = React.useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Set loading state to true before fetching
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        setDict(data);
        setIsLoading(false); // Set loading state to false after fetching
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false); // Set loading state to false in case of error
      });
  }, [word]); // This array ensures the effect only runs when 'word' changes

  return { dict, isLoading }; // Return both dict and isLoading state
}