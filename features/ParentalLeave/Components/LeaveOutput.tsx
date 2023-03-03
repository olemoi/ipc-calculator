
import { useAppContext } from "@/context/AppContext";
import { _formatDate, _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Divider, Group, Tabs, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { _leavePayMonthly, _leavePaySalaryDifference, _totalAbsence, _totalCoveredByCompany, _totalCoveredByCompanyWithTax } from "../Helpers/absence.helpers";
import PaymentPlan from "./PaymentPlan";
import { HolidaysAndWorkDays } from "@/features/ParentalLeave/Models/Holidays";
import { API_URL } from "@/constants/api";
import SavingsPlan from "./Savings";
import Overview from "./Overview";
import HolidayTimeLine from "./ParentalLeaveTimeline";


const LeaveOutput = () => {
  const [businessDaysDuringLeave, setBusinessDaysDuringLeave] = useState<HolidaysAndWorkDays>({ numberOfBusinessDays: 0, holidaysAndNames: [] });
  const [businessDaysUntilLeave, setBusinessDaysUntilLeave] = useState<HolidaysAndWorkDays>();
  const [loading, setLoading] = useState(false);

  const { leaveCalculations, leave } = useAppContext();
  const today = new Date();

  useEffect(() => {
    const fromDateQuery = `${leaveCalculations.startOfLeave.getFullYear()}-${leaveCalculations.startOfLeave.getMonth() + 1}-${leaveCalculations.startOfLeave.getDate()}`
    const toDateQuery = `${leaveCalculations.endOfLeave.getFullYear()}-${leaveCalculations.endOfLeave.getMonth() + 1}-${leaveCalculations.endOfLeave.getDate()}`
    const fromTodayQuery = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

    setLoading(true);
    fetch(`/api/businessDays?fromDate=${fromDateQuery}&toDate=${toDateQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setBusinessDaysDuringLeave(data);
        setLoading(false);
      })
    fetch(`${API_URL}/businessDays?fromDate=${fromTodayQuery}&toDate=${fromDateQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setBusinessDaysUntilLeave(data);
        setLoading(false);
      })
  }, [leaveCalculations.startOfLeave, leaveCalculations.endOfLeave])


  return (
    <>

      <Tabs defaultValue="overview">
        <Tabs.List>
          <Tabs.Tab value="overview">Oversikt</Tabs.Tab>
          <Tabs.Tab value="preLeave">Før perm</Tabs.Tab>
          <Tabs.Tab value="postLeave">Under perm</Tabs.Tab>
          <Tabs.Tab value="holidays">Helligdager</Tabs.Tab>
        </Tabs.List>


        <Tabs.Panel value="overview" pt="xs">
          <Overview {...businessDaysDuringLeave} />
        </Tabs.Panel>
        <Tabs.Panel value="preLeave" pt="xs">
          <Text fz="md" style={{ 'margin': '.5rem', 'fontWeight': 'bold' }} > Oppsparing </Text>
          <Divider />
          <SavingsPlan />
        </Tabs.Panel>
        <Tabs.Panel value="postLeave" pt="xs">
          <PaymentPlan />
        </Tabs.Panel>
        <Tabs.Panel value="holidays" pt="xs">
          <HolidayTimeLine />
        </Tabs.Panel>
      </Tabs>
    </>
  )

}


export default LeaveOutput

