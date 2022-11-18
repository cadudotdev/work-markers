import React, { FC } from 'react';

import {
  TimeMarkerContainer,
  Separator,
} from './styles';

import { Button } from '@component/Button';
import { Time } from '@component/Time';

interface MarkerProps {
  title: string;
}

export const Marker: FC<MarkerProps> = ({ title }) => {

  return <TimeMarkerContainer>
    <Time format='24H' />
    <Separator />
    <Button title={title} />
  </TimeMarkerContainer>;
};