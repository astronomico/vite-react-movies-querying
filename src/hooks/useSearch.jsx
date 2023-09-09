import { useEffect, useRef, useState } from "react";

export function useSearch() {
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
    const isEmptySearch = useRef(true);
  
    useEffect(() => {
      if (isEmptySearch.current) {
        isEmptySearch.current = search === '';
        return;
      }
  
      if(!search){
        setError('Please enter a movie name');
        return;
      }
  
      if(search.length < 3){
        setError('Please enter at least 3 characters');
        return;
      }
  
      if (!search.match(/^[a-zA-Z0-9_.-\s]*$/)){
        setError('Please enter a valid name');
        return;
      }
  
      setError(null);
  
    }, [search]);
  
    return { search, setSearch, error }
  }