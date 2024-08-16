import { FunctionComponent, ReactElement, SVGProps } from 'react';
import { useSidebarStore } from '@/store';
import styles from './MenuItem.module.scss';

export type MenuItemProps = {
  Icon: any;
  label: string;
};

export const MenuItem = ({ Icon, label }: MenuItemProps): ReactElement => {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItemIcon}>{Icon}</div>
      {!isOpen && <span className={styles.menuItemLabel}>{label}</span>}
    </div>
  );
};
