import React, { FC, useState, useEffect } from 'react';
import { GlobalContext } from 'src/Context';
import { Layout } from '@component/Layout';
import { Marker } from 'src/types';
import { GlobalStyles } from './styles';
import moment from 'moment';

import { createMarker } from 'src/templates/initial';

export const App: FC = () => {
  const [markers, setMarkers] = useState<Marker[]>([
    createMarker('24H', { id: 1 })
  ]);
  const [id, setId] = useState(1);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
    console.log('init');
    console.log(markers);
  }, [markers]);

  return <GlobalContext.Provider value={{
    markers,
    setMarkers,
    id,
    setId
  }}>
    <GlobalStyles />
    <Layout />
  </GlobalContext.Provider>;
};