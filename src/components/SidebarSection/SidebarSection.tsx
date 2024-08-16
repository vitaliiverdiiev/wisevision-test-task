import { PropsWithChildren, ReactElement } from 'react';
import { useSidebarStore } from '@/store';
import styles from './SidebarSection.module.scss';

export const SidebarSection = ({
  children,
  title,
}: { title: string } & PropsWithChildren): ReactElement => {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div className={styles.sidebarSection}>
      {!isOpen && <p className={styles.sidebarSectionTitle}>{title}</p>}
      <div className={styles.sidebarSectionItems}>{children}</div>
    </div>
  );
};
