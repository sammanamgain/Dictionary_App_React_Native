import React, { useState, useEffect } from 'react';

export default function useFindMeaning(word: string) {
  const [dict, setDict] = React.useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); 
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        setDict(data);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false); 
      });
  }, [word]); 

  return { dict, isLoading }; 
}