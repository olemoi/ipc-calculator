import Head from 'next/head'
import { Text, Title, Grid, Divider, Container, Group } from '@mantine/core';
import IncomeForm from '@/features/Income/Components/IncomeForm';
import useStyles from '@/styles/custom/InputStyles';
import Turnover from '@/features/Income/Components/Turnover';
import Profit from '@/features/Income/Components/Profit';
import Result from '@/features/Income/Components/Result';
import ResultWithDividend from '@/features/Income/Components/ResultAfterDividend';
import Salary from '@/features/Income/Components/Salary';
import SalaryMonthly from '@/features/Income/Components/SalaryMonthly';
import Dividend from '@/features/Income/Components/Dividend';
import HolidayTimeLineYear from '@/features/Income/Components/HolidayTimeline';
import HolidayAndVacation from '@/features/Income/Components/HolidayAndVacation';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { ICompanyFinanceResponse } from './api/Company';
import { IPersonalIncomeResponse } from './api/Personal';


export default function TaxPage() {

  const { general, updatePersonalIncome, updateCompanyFinance } = useAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/Personal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "salary": general.salary,
        "dividend": general.dividend,
      })
    })
      .then((res) => res.json())
      .then(((data: IPersonalIncomeResponse) => {
        updatePersonalIncome(data.personalIncome);
        setLoading(false);
      }))
  }, [general.salary, general.dividend]);


  useEffect(() => {
    setLoading(true);
    fetch('/api/Company', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "hourlyRate": general.hourlyRate,
        "yearlyWorkHours": general.yearlyWorkHours,
        "overrideWorkHours": general.overrideWorkHours,
        "dividend": general.dividend,
        "salary": general.salary,
        "brokerCommissionPercentage": general.brokerComission / 100,
        "generalExpenses": general.generalExpenses
      })
    })
      .then((res) => res.json())
      .then(((data: ICompanyFinanceResponse) => {
        updateCompanyFinance(data.companyIncome);
        setLoading(false);
      }))
  }, [
    general.yearlyWorkHours,
    general.brokerComission,
    general.overrideWorkHours,
    general.salary,
    general.hourlyRate,
    general.salaryTaxRate,
    general.pensionPercentage,
    general.dividend,
    general.generalExpenses,
  ]
  );

  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>IPC Calculator</title>
        <meta name="description" content="Calculator for independent colsultants in Norway" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <Grid>
            <Grid.Col lg={3} md={6}>
              <h1 className={classes.title}>Lønn</h1>
              <div className={`${classes.container}`} >
                <Text className={classes.contentTitle}>Opplysninger</Text>
                <div className={classes.contentContainer}>
                  <IncomeForm />
                </div>
              </div>
            </Grid.Col>


            <Grid.Col lg={6} md={12}>
              <h1 className={classes.title}>Oversikt</h1>
              <div className={classes.container}>
                <Grid className={classes.grid}>
                  <Grid.Col span={6}>
                    <h2 className={classes.contentTitle}>Selskap & Drift</h2>
                    <Divider />
                    <div className={classes.contentContainer}>
                      <Turnover />
                    </div>
                    <div className={classes.contentContainer}>
                      <Profit />
                    </div>
                    <div className={classes.contentContainer}>
                      <Result />
                    </div>
                    <div className={classes.contentContainer}>
                      <ResultWithDividend />
                    </div>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <h2 className={classes.contentTitle}>Personlig økonomi</h2>
                    <Divider />
                    <div className={classes.contentContainer}>
                      <Salary />
                    </div>
                    <div className={classes.contentContainer}>
                      <SalaryMonthly />
                    </div>
                    <div className={classes.contentContainer}>
                      <Dividend />
                    </div>
                    <div className={classes.contentContainer}>
                      <HolidayAndVacation />
                    </div>
                  </Grid.Col>
                </Grid>
              </div>
            </Grid.Col>




            <Grid.Col lg={3} md={6}>
              <h1 className={classes.title}>Tidsplan</h1>
              <div className={classes.container}>
                <div className={classes.contentContainer}>
                  <HolidayTimeLineYear />
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </>

      </main>
    </>
  )
}
