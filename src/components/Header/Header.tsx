import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="logo" width={105} height={16} />
    </header>
  );
};
