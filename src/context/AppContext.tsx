import { createContext, ReactNode, useState, useContext } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const initialTotal = parseInt(localStorage.getItem('total') ?? '0');
  const [total, setTotal] = useState(initialTotal);

  const initialState = {
    total,
    addItemPriceToTotal: (value: number) => {
      setTotal((prev) => {
        localStorage.setItem('total', (prev + value).toString());
        return prev + value;
      });
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
