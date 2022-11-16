import React, { FC } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
  title: string;
  onClick?: any;
}

export const Button: FC<ButtonProps> = ({ title, onClick }) => {

  return <ButtonContainer onClick={() => onClick()}>{title}</ButtonContainer>;
};