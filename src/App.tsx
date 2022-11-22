import React, { FC, useState, useEffect } from 'react';
import { GlobalContext } from 'src/Context';
import { Layout } from '@component/Layout';
import { Marker } from 'src/types';
import { GlobalStyles } from './styles';

import { createMarker } from 'src/templates/initial';

export const App: FC = () => {
  const [state, setState] = useState<Marker[]>([
    createMarker('24H', { id: 1, time: new Date(null, null, null, 10, 0, 0) }),
    createMarker('24H', { id: 2, time: new Date(null, null, null, 12, 0, 0) }),
    createMarker('24H', { id: 3, time: new Date(null, null, null, 12, 30, 0) }),
    createMarker('24H', { id: 4, time: new Date(null, null, null, 20, 0, 0) })
  ]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
    console.log('init');
    console.log(state);
  }, [state]);

  return <GlobalContext.Provider value={{
    state,
    setState
  }}>
    <GlobalStyles />
    <Layout />
  </GlobalContext.Provider>;
};