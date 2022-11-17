import { createContext } from 'react';
import { ContextValue } from 'src/types';

export const GlobalContext = createContext<ContextValue>(
  { state: null, setState: null }
);