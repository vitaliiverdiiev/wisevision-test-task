import { ReactElement } from 'react';
import { ButtonProps } from './Button.type';
import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({
  children,
  Icon,
  className,
  isIcon,
  ...restProps
}: ButtonProps): ReactElement => {
  return (
    <button className={clsx(styles.button, className)} {...restProps}>
      {Icon}
      {!isIcon && children}
    </button>
  );
};
