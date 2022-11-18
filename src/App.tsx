import React, { FC, useState, useEffect } from 'react';
import { GlobalContext } from 'src/Context';
import { Layout } from '@component/Layout';
import { Marker } from 'src/types';

import { initialMarker } from 'src/templates/initial';

export const App: FC = () => {
  const [state, setState] = useState<Marker[]>([initialMarker]);

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