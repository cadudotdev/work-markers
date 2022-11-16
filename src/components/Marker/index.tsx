import React, { FC } from 'react';

import {
  TimeMarkerContainer,
  Separator,
  MarkerContainer,
} from './styles';

import { Button } from '@component/Button';

export const Marker: FC<any> = ({ title }) => {

  return <TimeMarkerContainer>
    <MarkerContainer
      value={'00'} />
    <Separator>:</Separator>
    <MarkerContainer
      value={'00'} />
    <Separator />
    <Button title={title} />
  </TimeMarkerContainer>;
};