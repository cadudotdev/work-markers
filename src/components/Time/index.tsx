import React, { FC, useState, useContext } from 'react';

import { TimeContainer, InputContainer, Separator } from './styles';
import { Marker, TimeFormat } from 'src/types';
import { GlobalContext } from 'src/Context';
import moment from 'moment';

type TimeType = 'HOURS' | 'MINUTES';

interface TimeState {
  hours: number;
  minutes: number;
}

interface TimeProps {
  data: Marker,
}

export const Time: FC<TimeProps> = ({ data }) => {
  const ctx = useContext(GlobalContext);
  const [state, setState] = useState<TimeState>({
    hours: data.time.getHours(),
    minutes: data.time.getMinutes()
  });

  function onChangeFunction(value: string, type: TimeType, format?: TimeFormat) {
    const newValue = Number(value);

    const globalMarker = ctx.markers.find(marker => data.id === marker.id);

    if (type === 'HOURS' && format === 'AM/PM' && Number(value) <= 12
      || format === '24H' && Number(value) <= 23) {
      const date = moment({ hours: newValue, minutes: state.minutes }).toDate();

      ctx.setMarkers(prevState => ([
        ...prevState.filter(marker => globalMarker.id !== marker.id),
        { ...globalMarker, time: date }
      ]));

      setState(prevState => ({ ...prevState, hours: newValue }));
    }

    if (type === 'MINUTES' && Number(value) <= 59) {
      const date = moment({ hours: state.hours, minutes: newValue }).toDate();

      ctx.setMarkers(prevState => ([
        ...prevState.filter(marker => globalMarker.id !== marker.id),
        { ...globalMarker, time: date }
      ]));

      setState(prevState => ({ ...prevState, minutes: newValue }));
    }
  }

  return <TimeContainer>
    <InputContainer
      maxLength={2}
      onChange={e => onChangeFunction(e.target.value, 'HOURS', data.format)}
      value={state.hours}
    />
    <Separator>:</Separator>
    <InputContainer
      maxLength={2}
      onChange={e => onChangeFunction(e.target.value, 'MINUTES')}
      value={state.minutes}
    />
  </TimeContainer>;
};