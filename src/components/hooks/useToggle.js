import useLocalStorage from './useLocalStorage';

const useToggle = (key, value) => {
    // useLocalStorage hook persists toggle state through a page refresh.
    const [darkMode, setDarkMode] = useLocalStorage(key, value);

    return [darkMode, setDarkMode];
}

export default useToggle;