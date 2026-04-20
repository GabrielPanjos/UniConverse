import { createContext, useState } from "react";

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [filename, setFilename] = useState(null);

  return (
    <FileContext.Provider value={{ filename, setFilename }}>
      {children}
    </FileContext.Provider>
  );
};
