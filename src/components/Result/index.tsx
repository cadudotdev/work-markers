import React, { FC, useContext } from 'react';
import { GlobalContext } from 'src/Context';

import { ResultContainer } from './styles';

export const Result: FC = () => {
  const ctx = useContext(GlobalContext);

  return <ResultContainer>
    {/* Regular Work */}
    <div>{'Regular: 07: 00 | 08:45 | -01:45'}</div>
    {/* Extra Work */}
    <div>{'Extra: 00:00 | 02:00 | -03:45'}</div>
    {/* Interval */}
    <div>{'01:00'}</div>
  </ResultContainer>;
};