import Head from 'next/head'
import { Button, Image, Text, Title, Grid, Divider, Container, Card, Group, Badge } from '@mantine/core';
import LeaveOutput from '@/features/ParentalLeave/Components/LeaveOutput';
import HolidayTimeLine from '@/features/ParentalLeave/Components/ParentalLeaveTimeline';
import ParentalLeaveForm from '@/features/ParentalLeave/Components/ParentalLeaveForm';


export default function AbsencePage() {


  return (
    <>
      <Head>
        <title>IPC Calculator</title>
        <meta name="description" content="Calculator for independent colsultants in Norway" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Titles */}
        <Grid>
          <Grid.Col span={4}>
            <Title>Permisjon</Title>
          </Grid.Col>
        </Grid>


        <Grid>
          <Grid.Col span={4}>
            <ParentalLeaveForm />
            <LeaveOutput />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}
