import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon?: JSX.Element;
  isIcon?: boolean;
};
