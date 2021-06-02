import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
   // Get from local storage by key
    const [value, setValue] = useState(()=>{
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
        // Parse and return stored json
      }
  // if stored json undefined, return initialValue
      localStorage.setItem(key, JSON.stringify(initialValue));
      return(initialValue);
    });
  
    const setStoredValue = value => {
      setValue(value);
      // Saves to local storage
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    return([value, setStoredValue]);
}

export default useLocalStorage;