import Link from 'next/link';
import cx from 'clsx';
import { useHotkeys } from '@mantine/hooks';
import { AppShell, Container, RemoveScroll, Group, useMantineColorScheme } from '@mantine/core';
import { ColorSchemeControl, HeaderControls, MantineLogo } from '@mantine/ds';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod + J', toggleColorScheme]]);

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="md" className={classes.inner}>
          <Link href="/" className={cx('mantine-focus-auto', classes.logo)}>
            <MantineLogo size={30} />
          </Link>

          <HeaderControls
            visibleFrom="sm"
            githubLink="https://github.com/mantine.dev/mantine"
            withDirectionToggle={false}
            withSearch={false}
          />

          <Group hiddenFrom="sm">
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
