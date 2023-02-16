import { useAppContext } from "@/context/AppContext"
import { _formatDate, _formatNumber } from "@/features/Common/Helpers/common.helpers"
import { Divider, Group, Text } from "@mantine/core"
import { _leavePayMonthly, _leavePaySalaryDifference, _totalAbsence, _totalCoveredByCompany, _totalCoveredByCompanyWithTax } from "../Helpers/absence.helpers"
import { HolidaysAndWorkDays } from "../Models/Holidays"


const Overview = ({ numberOfBusinessDays }: HolidaysAndWorkDays) => {

  const { leaveCalculations, leave } = useAppContext();

  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="lg">Oversikt</Text>
      </Group>
      <Divider sx={{ 'marginBottom': '.5rem' }} fz="md"></Divider>


      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Permisjon starter</Text>
        <Text fz="md">{_formatDate(leaveCalculations?.startOfLeave)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Lengde på permisjon</Text>
        <Text fz="md">{_totalAbsence(leave.momOrDadLeave, leave.weeksOfSharedLeave)} uker</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Permisjonen avslutter</Text>
        <Text fz="md">{_formatDate(leaveCalculations?.endOfLeave)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Ønsket lønn under permisjon</Text>
        <Text fz="md">{_formatNumber(leaveCalculations?.desiredMonthlyPay)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Totalt antall arbeidsdager i permisjon</Text>
        <Text fz="md">{numberOfBusinessDays} dager</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Foreldrepenger</Text>
        <Text fz="md">{_formatNumber(leaveCalculations?.leavePay)}</Text>
      </Group>

      {careLeave(leave.careLeave, leave.momOrDadLeave)}

      <Divider sx={{ 'marginBottom': '.5rem' }} fz="md"></Divider>


      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Ønsket månedslønn</Text>
        <Text fz="md">{_formatNumber(leaveCalculations?.desiredMonthlyPay)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Lønn fra NAV</Text>
        <Text fz="md">- {_formatNumber(_leavePayMonthly())}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Differanse</Text>
        <Text fz="md">= {_formatNumber(_leavePaySalaryDifference(leave.desiredYearlySalary))}</Text>
      </Group>
      <Divider fz="md"></Divider>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Totalt</Text>
        <Text fz="md">{_formatNumber(_totalCoveredByCompany(leave.desiredYearlySalary, leave.momOrDadLeave, leave.weeksOfSharedLeave, leave.careLeave))}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Totalt med arbeidsgiveravgift</Text>
        <Text fz="md">{_formatNumber(_totalCoveredByCompanyWithTax(leave.desiredYearlySalary, leave.momOrDadLeave, leave.weeksOfSharedLeave, leave.careLeave))}</Text>
      </Group>
      <Divider sx={{ 'marginBottom': '5rem' }} fz="md"></Divider>
    </>
  )




  function careLeave(careLeave: boolean, momOrDadLeave: string) {
    if (careLeave === true && momOrDadLeave === 'dad') {
      return (
        <>
          <Divider sx={{ 'marginBottom': '.5rem' }} fz="md"></Divider>
          <Text fz="lg">Omsorgspermisjon</Text>
          <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
            <Text fz="md">Varighet</Text>
            <Text fz="md">2 uker</Text>
          </Group>
          <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
            <Text fz="md">Kostnad</Text>
            <Text fz="md">{_formatNumber(leave.desiredYearlySalary / 230 * 10)}</Text>
          </Group>
        </>
      )
    }
    return;
  }
}





export default Overview;
