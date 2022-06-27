import { createContext, ReactNode, useState, useContext } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState(0);

  const initialState = {
    total,
    addItemPriceToTotal: (value: number) => {
      setTotal((prev) => prev + value);
    },
  };

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

const useAppStore = () => useContext(AppContext);

export { AppContext, AppProvider, useAppStore };

export type AppContextType = {
  total: number,
  addItemPriceToTotal: Function
};
