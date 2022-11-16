import React, { FC } from 'react';
import { LayoutContainer, Separator } from './styles';

import { Marker } from '@component/Marker';
import { Result } from '@component/Result';

export const Layout: FC<any> = () => {

  return <LayoutContainer>
    < Marker />
    <Separator />
    <Result />
  </LayoutContainer>;
};