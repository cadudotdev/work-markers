import React, { FC } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
  title: string;
}

export const Button: FC<ButtonProps> = ({ title }) => {

  return <ButtonContainer>{title}</ButtonContainer>;
};