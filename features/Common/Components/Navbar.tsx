'use client'

import { Text, ActionIcon, Box, Group, MantineNumberSize, Navbar, ThemeIcon, Title, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { BsCalculator, BsCash, BsMoon, BsSun } from 'react-icons/bs'
import { RiPieChartFill } from 'react-icons/ri'
import { FaBaby } from 'react-icons/fa'

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  pageLink: string;
  close?: () => void;
}

const PageLink = ({ icon, color, label, pageLink, close }: MainLinkProps) => {

  const pathname = usePathname();

  return <Link href={pageLink} passHref>
    <UnstyledButton sx={(theme) => ({
      display: 'block',
      width: '100%',
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      backgroundColor: pathname === pageLink ? theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0] : "transparent",
      "&:hover": {
        backGroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    })} onClick={close}>
      <Group>
        <ThemeIcon color={color} variant={'light'}>
          {icon}
        </ThemeIcon>
        <Text size='sm'>{label}</Text>
      </Group>
    </UnstyledButton>
  </Link >
}

const Brand = () => {

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return <div>
    <Box sx={(theme) => ({
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      paddingBottom: theme.spacing.lg,
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]}`
    }
    )}>
      <Group position='apart' align='center'>
        {/* Logo */}
        <Group>
          <ThemeIcon
            variant='gradient'
            gradient={{ from: 'indigo', to: 'cyan' }}
            size='lg'
            radius='lg'
          >
            <BsCalculator size={18} />
          </ThemeIcon>

          <Title size={'1.2rem'} weight={400} sx={{ fontStyle: 'italic' }}>
            Kalkulatorer
          </Title>
        </Group>

        {/* Dark/light mode */}
        <ActionIcon
          variant='default'
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
        </ActionIcon>
      </Group>
    </Box>
  </div >
}


const linkData: MainLinkProps[] = [
  {
    icon: <BsCash size={18} />,
    color: 'green',
    label: 'Lønn',
    pageLink: '/',
  },
  {
    icon: <FaBaby size={18} />,
    color: 'blue',
    label: 'Permisjon',
    pageLink: '/absence'
  },
  {
    icon: <RiPieChartFill size={18} />,
    color: 'teal',
    label: 'Skatt',
    pageLink: '/taxes'
  },
]


const Nav = ({ opened, close, hiddenBreakpoint }: { opened: boolean; close: () => void, hiddenBreakpoint: MantineNumberSize }) => {
  return <Navbar p='xs' width={{ sm: 300 }} hiddenBreakpoint={hiddenBreakpoint} hidden={!opened}>
    <Navbar.Section mt='xs'>
      <Brand />
    </Navbar.Section>
    <Navbar.Section grow mt='md'>
      {linkData.map((item) => {
        item.close = close
        return <PageLink {...item} key={item.label} />
      }
      )}
    </Navbar.Section>
    <Navbar.Section>Test</Navbar.Section>
  </Navbar>
}

export default Nav

