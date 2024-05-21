import { createContext, useState, ReactNode, useMemo, useCallback } from "react";
import { PersonContextType } from "../types/person";

export const PersonContext = createContext<PersonContextType | undefined>(undefined);

interface PersonContextProviderProps {
  children: ReactNode;
}

export const PersonContextProvider = ({ children }: PersonContextProviderProps) => {
  const [value, setValue] = useState<boolean>(false);
  const [enableLog, setEnableLog] = useState<boolean>(false);

  // log toggle handler
  const toggleLog = useCallback(() => {
    setEnableLog(prevEnableLog => !prevEnableLog);
  }, []);

  const contextValue = useMemo(() => ({
    value,
    setValue,
    enableLog,
    setEnableLog,
    toggleLog
  }), [value, enableLog, toggleLog]);

  return (
    <PersonContext.Provider value={contextValue}>
      {children}
    </PersonContext.Provider>
  );
};
