import React, { FC } from 'react';

import { ButtonContainer } from './styles';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return <ButtonContainer onClick={() => onClick()}>{title}</ButtonContainer>;
};