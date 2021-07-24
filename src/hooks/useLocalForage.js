import React from "react";
import localforage from "localforage";

export default function useLocalForage ( key, initialValue = null ) {
  const [storedValue, setStoredValue] = React.useState(initialValue);

  React.useEffect(() => {
    (async function () {
      try {
        const value = await localforage.getItem(key);
        setStoredValue(value);
      } catch ( err ) {
        return initialValue;
      }
    })();
  }, [initialValue, key]);

  const set = ( value ) => {
    (async function () {
      try {
        await localforage.setItem(key, value);
        setStoredValue(value);
      } catch (err) {
        return initialValue;
      }
    })();
  };

  const remove = () => {
    (async function () {
      try {
        await localforage.removeItem(key);
        setStoredValue(null);
      } catch (e) {}
    })();
  };

  return [storedValue, set, remove];
}