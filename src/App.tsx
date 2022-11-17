import React, { FC, useState, useEffect } from 'react';
import { GlobalContext } from 'src/Context';
import { Layout } from '@component/Layout';
import { MarkerState } from 'src/types';

export const App: FC = () => {
  const [state, setState] = useState<MarkerState[]>([
    {
      hours: '00',
      minutes: '00',
      button: { index: 0, title: 'Add new marker', action: 'CREATE' }
    }
  ]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
    console.log(state);

  }, [state]);

  return <GlobalContext.Provider value={{
    state,
    setState
  }}>
    <Layout />
  </GlobalContext.Provider>;
};