'use client';

import { ReactElement } from 'react';
import { useSidebarStore } from '@/store';
import {
  Button,
  GetBonus,
  MenuItem,
  IconsEnum,
  SvgIcons,
  SidebarSection,
} from '@/components';
import clsx from 'clsx';
import styles from './Main.module.scss';

export const Main = (): ReactElement => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <main
      className={clsx(styles.main, {
        [styles.isIcon]: isOpen,
      })}
    >
      <aside className={styles.sidebar}>
        <Button
          onClick={toggleSidebar}
          Icon={<SvgIcons icon={IconsEnum.DOT_SIX} />}
          isIcon
          className={styles.sidebarToggler}
        />
        <Button
          Icon={<SvgIcons icon={IconsEnum.PLUS} />}
          className={styles.button}
          isIcon={isOpen}
        >
          Create new channel
        </Button>

        <SidebarSection title="Main">
          <MenuItem
            Icon={<SvgIcons icon={IconsEnum.STATISTICS} />}
            label="Statistics & reports"
          />
          <MenuItem
            Icon={<SvgIcons icon={IconsEnum.CHANNELS} />}
            label="Channels"
          />
          <MenuItem
            Icon={<SvgIcons icon={IconsEnum.WORKSPACE} />}
            label="Workspace"
          />
          <MenuItem
            Icon={<SvgIcons icon={IconsEnum.LANDINGS} />}
            label="Landings"
          />
        </SidebarSection>

        <SidebarSection title="CRM">
          <MenuItem
            Icon={<SvgIcons icon={IconsEnum.AUTOMATION} />}
            label="Automation"
          />
          <MenuItem
            Icon={<SvgIcons icon={IconsEnum.MESSENGER} />}
            label="Messenger"
          />
          <MenuItem
            Icon={<SvgIcons icon={IconsEnum.CUSTOMERS} />}
            label="Сustomers"
          />
        </SidebarSection>

        <SidebarSection title="Management">
          <MenuItem Icon={<SvgIcons icon={IconsEnum.TEAMS} />} label="Teams" />
          <MenuItem
            Icon={<SvgIcons icon={IconsEnum.SETTINGS} />}
            label="Settings"
          />
          <MenuItem Icon={<SvgIcons icon={IconsEnum.HELP} />} label="Help" />
        </SidebarSection>

        <div className={styles.divider} />

        <GetBonus />
      </aside>
      <section className={styles.section}>
        <h2>Hello WiseVision!</h2>
      </section>
    </main>
  );
};
