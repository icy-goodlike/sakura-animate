import { useEffect, useState } from "react";

export function useStorage(key: any, defaultValue: any) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
}
