import React, { FC, useState, useContext } from 'react';
import { GlobalContext } from 'src/Context';
import {
  TimeMarkerContainer,
  Separator,
  MarkerContainer,
} from './styles';
import { markerTemplate } from 'src/template/MarkerTemplate';

import { Button } from '@component/Button';
import { MarkerProps } from './types';
import { markersLimit } from 'src/utils/rules';
import { Marker as MarkerState } from 'src/types';

type MarkerType = 'HOURS' | 'MINUTES';

export const Marker: FC<MarkerProps> = ({ title, idx, data }) => {
  const ctx = useContext(GlobalContext);
  const [marker, setMarker] = useState<MarkerState>({
    hours: '00',
    minutes: '00',
    button: null
  });

  function handleButton() {
    const { state, setState } = ctx;
    const { index, action } = data.button;

    console.log(`Current action: ${action}`);

    if (action === 'REMOVE') {
      setState(prevState => {
        console.log(idx);

        return prevState
          .filter(marker => idx !== marker.button.index)
          .map((marker, idx) => {
            marker.button.index = idx;
            return marker;
          });
      });
    }

    if (action === 'CREATE') {
      if (state.length >= markersLimit) return;

      setState(prevState => {

        prevState.map(marker => {
          const { button } = marker;

          if (!index || index !== button.index) {
            button.title = 'Remove Marker';
            button.action = 'REMOVE';
          }
          return marker;
        });

        return [...prevState, {
          ...markerTemplate,
          button: {
            index: index,
            title: markerTemplate.button.title,
            action: 'CREATE'
          }
        }];
      });
    }
  }

  function handleOnChange(newValue: string, type: MarkerType) {
    try {
      if (type === 'HOURS') setMarker(prevState => (
        { ...prevState, hours: newValue }
      ));
      if (type === 'MINUTES') setMarker(prevState => (
        { ...prevState, minutes: newValue }
      ));
    } finally {
      const { setState } = ctx;
      const { index } = data.button;

      setState(prevState => {
        return [
          ...prevState.map(marker => {
            if (index === marker.button.index) {
              if (type === 'HOURS') marker.hours = newValue;
              if (type === 'MINUTES') marker.minutes = newValue;
            }
            return marker;
          })
        ];
      });
    }
  }

  return <TimeMarkerContainer>
    <MarkerContainer
      onChange={(e) => handleOnChange(e.target.value, 'HOURS')}
      value={marker.hours} />
    <Separator>:</Separator>
    <MarkerContainer
      onChange={(e) => handleOnChange(e.target.value, 'MINUTES')}
      value={marker.minutes} />
    <Separator />
    <Button title={title} onClick={() => handleButton()} />
  </TimeMarkerContainer>;
};