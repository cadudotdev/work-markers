import React, { FC } from 'react';

import {
  TimeMarkerContainer,
  Separator,
} from './styles';

import { Button } from '@component/Button';
import { Time } from '@component/Time';
import { Marker as MarkerType } from 'src/types';

interface MarkerProps {
  data: MarkerType;
}

export const Marker: FC<MarkerProps> = ({ data }) => {

  return <TimeMarkerContainer>
    <Time format={data.format} data={data.time} />
    <Separator />
    <Button title={data.button.title} />
  </TimeMarkerContainer>;
};