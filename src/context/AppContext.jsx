import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AppContextProvider = createContext();
const AppContext = ({ children }) => {
  const [elements, setElements] = useState({
    isSidebar: false,
    isModal: false,
  });

  const openClose = (element) => {
    setElements({ ...elements, [element]: !elements[element] });
  };
  return (
    <AppContextProvider.Provider value={{ elements, openClose }}>
      {children}
    </AppContextProvider.Provider>
  );
};

export default AppContext;

export const useContextElements = () => useContext(AppContextProvider);
