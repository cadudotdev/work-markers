import React, { FC, useState, useContext } from 'react';
import { LayoutContainer, Separator } from './styles';

import { GlobalContext } from 'src/Context';
import { Marker } from '@component/Marker';
import { Result } from '@component/Result';
import { Button } from '@component/Button';

interface State {
  isConfigMode: boolean;
}

export const Layout: FC<any> = () => {
  const ctx = useContext(GlobalContext);
  const [state, setState] = useState<State>({
    isConfigMode: false
  });

  // function handleOnClick() {
  //   setState(prevState => ({
  //     ...prevState,
  //     isConfigMode: !prevState.isConfigMode
  //   }));
  // }

  return state.isConfigMode ?
    <LayoutContainer>
      <Button title='Config' />
      <Separator />
      <div>
        <span>Language</span>
        <span>English</span>
      </div>
    </LayoutContainer> :
    <LayoutContainer>
      <Button title='Config' />
      <Separator />
      {
        ctx.state.map((data, idx) => (
          < Marker key={idx} idx={idx} title={data.button.title} {
            ...{
              data: {
                ...data,
                button: {
                  ...data.button,
                  index: ctx.state.length
                }
              }
            }} />
        ))
      }
      <Separator />
      <Result />
    </LayoutContainer>;
};