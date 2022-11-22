import { createContext } from 'react';
import { ContextValue } from 'src/types';

export const GlobalContext = createContext<ContextValue>(
  { markers: null, setMarkers: null, id: null, setId: null }
);