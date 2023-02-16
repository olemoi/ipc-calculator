
import Nav from '@/features/Common/Components/Navbar';
import { Text, AppShell, Header, MediaQuery, useMantineTheme, Burger } from '@mantine/core';
import React, { useState } from 'react'

export default function PageLayout({ children }: { children: React.ReactNode }) {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);

  function closeBurger() {
    setOpened(false);
  }

  return (
    <AppShell styles={{
      main: { background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0], },
    }}
      navbarOffsetBreakpoint='sm'
      navbar={<Nav opened={opened} close={closeBurger} hiddenBreakpoint='sm' />}
      header={
        <Header height={70} p='md'>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger opened={opened} onClick={() => setOpened(!opened)} size='md' color={theme.colors.gray[6]} mr='xl' />
            </MediaQuery>
            <Text>Inntektskalkulator</Text>
          </div>
        </Header>
      }
    >
      {children}
    </ AppShell>
  );
}

