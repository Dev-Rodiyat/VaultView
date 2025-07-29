import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("darkNFT")
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("darkNFT");
    } else {
      document.documentElement.classList.remove("darkNFT");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(prev => !prev);

  return { isDark, toggleDarkMode };
};

export default useDarkMode;
