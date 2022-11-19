import React, { FC, useState, useEffect } from 'react';
import { GlobalContext } from 'src/Context';
import { Layout } from '@component/Layout';
import { Marker } from 'src/types';

import { createMarker } from 'src/templates/initial';

export const App: FC = () => {
  const [state, setState] = useState<Marker[]>([
    createMarker('24H', { id: 1, time: new Date(null, null, null, 8, 0, 0) }),
    createMarker('24H', { id: 2, time: new Date(null, null, null, 12, 30, 0) }),
    createMarker('24H', { id: 3, time: new Date(null, null, null, 13, 30, 0) }),
    createMarker('24H', { id: 4, time: new Date(null, null, null, 19, 30, 0) })
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
    <Layout />
  </GlobalContext.Provider>;
};