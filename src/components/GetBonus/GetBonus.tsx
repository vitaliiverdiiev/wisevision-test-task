'use client';

import { ReactElement, useState } from 'react';
import { useSidebarStore } from '@/store';
import { Button, IconsEnum, SvgIcons } from '@/components';
import styles from './GetBonus.module.scss';

export const GetBonus = (): ReactElement | undefined => {
  const [isVisible, setVisible] = useState(true);
  const isOpen = useSidebarStore((state) => state.isOpen);

  if (isVisible && !isOpen)
    return (
      <div className={styles.bonus}>
        <div className={styles.bonusHeader}>
          <span>Get a Bonus!</span>
          <button
            className={styles.closeButton}
            onClick={() => setVisible(false)}
          >
            <SvgIcons icon={IconsEnum.CLOSE} />
          </button>
        </div>
        <div className={styles.bonusContent}>
          <span>
            Activate the promo code in our Telegram bot and receive traffic on
            the balance
          </span>
        </div>
        <div className={styles.bonusFooter}>
          <Button>Get a bonus</Button>
        </div>
      </div>
    );
};
