import React, { FC, useState } from 'react';

import { TimeContainer, InputContainer, Separator } from './styles';
import { TimeFormat } from 'src/types';

type TimeType = 'HOURS' | 'MINUTES';

const getEmptyDate = () => {
  return new Date(null, null, null, 0, 0, 0, 0);
};

interface TimeState {
  hours: number;
  minutes: number;
}

interface TimeProps {
  format: TimeFormat
}

export const Time: FC<TimeProps> = ({ format }) => {
  const [state, setState] = useState<TimeState>({
    hours: getEmptyDate().getHours(),
    minutes: getEmptyDate().getMinutes()
  });

  function onChangeFunction(value: string, type: TimeType, format?: TimeFormat) {
    const newValue = Number(value);
    if (type === 'HOURS') {
      if (format === 'AM/PM' && Number(value) <= 12 || format === '24H' && Number(value) <= 23) {
        const data = new Date(null, null, null, newValue, state.minutes, 0);
        console.log(data);

        setState(prevState => ({ ...prevState, hours: newValue }));
      }
    }

    if (type === 'MINUTES') {
      if (Number(value) <= 59) {
        const data = new Date(null, null, null, state.hours, newValue, 0);
        console.log(data);
        setState(prevState => ({ ...prevState, minutes: newValue }));
      }
    }
  }

  return <TimeContainer>
    <InputContainer
      maxLength={2}
      onChange={e => onChangeFunction(e.target.value, 'HOURS', format)}
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