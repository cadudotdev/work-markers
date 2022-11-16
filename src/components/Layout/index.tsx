import React, { FC, useState } from 'react';
import { LayoutContainer, Separator } from './styles';

import { Marker } from '@component/Marker';
import { Result } from '@component/Result';
import { Button } from '@component/Button';

interface State {
  isConfigMode: boolean;
}

export const Layout: FC<any> = () => {
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
      <Button title='Config' onClick={() => handleOnClick()} />
      <Separator />
      <div>
        <span>Language</span>
        <span>English</span>
      </div>
    </LayoutContainer> :
    <LayoutContainer>
      <Button title='Config' onClick={() => handleOnClick()} />
      <Separator />
      < Marker title={'Remove marker'} />
      < Marker title={'Add new marker'} />
      <Separator />
      <Result />
    </LayoutContainer>;
};