import React, { FC, useContext } from 'react';

import {
  TimeMarkerContainer,
  Separator,
} from './styles';

import { Button } from '@component/Button';
import { Time } from '@component/Time';
import { Marker as MarkerType } from 'src/types';
import { GlobalContext } from 'src/Context';
import { createMarker } from 'src/templates/initial';

interface MarkerProps {
  data: MarkerType;
  isLast: boolean;
}

export const Marker: FC<MarkerProps> = ({ data, isLast }) => {
  const ctx = useContext(GlobalContext);

  function onClickFunction() {
    const uniqueId = new Date().getTime();
    const marker = createMarker('24H', { id: uniqueId });

    if (isLast) {
      ctx.setState(prevState => ([...prevState, marker]));
    } else {
      ctx.setState(prevState => {
        return [...prevState
          .filter(marker => marker.id !== data.id)];
      });
    }
  }

  return <TimeMarkerContainer>
    <Time data={data} />
    <Separator />
    <Button title={isLast ? 'ADD' : 'REMOVE'} onClick={() => onClickFunction()} />
    <Separator />
    <div>{`ID: ${data.id.toString()}`}</div>
  </TimeMarkerContainer>;
};