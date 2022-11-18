import React, { FC, useContext } from 'react';

import {
  TimeMarkerContainer,
  Separator,
} from './styles';

import { Button } from '@component/Button';
import { Time } from '@component/Time';
import { Marker as MarkerType } from 'src/types';
import { GlobalContext } from 'src/Context';
import { initialMarker } from 'src/templates/initial';

interface MarkerProps {
  data: MarkerType;
}

export const Marker: FC<MarkerProps> = ({ data }) => {
  const ctx = useContext(GlobalContext);

  function onClickFunction() {
    ctx.setState(prevState => ([...prevState, initialMarker]));
  }

  return <TimeMarkerContainer>
    <Time format={data.format} data={data.time} />
    <Separator />
    <Button title={data.button.title} onClick={() => onClickFunction()} />
  </TimeMarkerContainer>;
};