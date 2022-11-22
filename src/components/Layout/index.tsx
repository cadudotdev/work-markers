import React, { FC, useState, useContext } from 'react';
import { LayoutContainer, Separator } from './styles';
import { Marker } from '@component/Marker';
import { Result } from '@component/Result';
import { Button } from '@component/Button';
import { GlobalContext } from 'src/Context';

interface State {
  isConfigMode: boolean;
}

export const Layout: FC = () => {
  const ctx = useContext(GlobalContext);
  const [state, setState] = useState<State>({
    isConfigMode: false
  });

  function handleOnClick() {
    setState(prevState => ({
      ...prevState,
      isConfigMode: !prevState.isConfigMode
    }));
  }

  return state.isConfigMode ?
    <LayoutContainer>
      <Button title='CONFIG' onClick={() => handleOnClick()} />
      <Separator />
      <div>
        <span>Language</span>
        <span>English</span>
      </div>
    </LayoutContainer> :
    <LayoutContainer>
      <Button title='CONFIG' onClick={() => handleOnClick()} />
      <Separator />
      {
        ctx.markers.map((marker, idx) => (
          <Marker key={idx} data={marker} isLast={ctx.markers.length === idx + 1} />
        ))
      }
      <Separator />
      <Result />
    </LayoutContainer>;
};