

import { useAppContext } from "@/context/AppContext"
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Text, Divider, Group } from "@mantine/core";
import { _salaryAfterTax, _salaryTax } from "../Helpers/income.helpers";



const HolidayAndVacation = () => {

  const { common, general } = useAppContext();

  const vacationCost = common.totalVacationDays * 7.5 * general.hourlyRate;
  const holidayCost = common.totalHolidays * 7.5 * general.hourlyRate;

  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md" pb='.5rem' style={{ 'fontSize': 20 }}>Ferie og helligdager</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Feriedager</Text>
        <Text fz="sm">{common.totalVacationDays} dager</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Helligdager</Text>
        <Text fz="sm">{common.totalHolidays} dager</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Arbeidsdager</Text>
        <Text fz="sm">{common.totalBusinessDays} dager</Text>
      </Group>

      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Kostnad ferie</Text>
        <Text fz="sm">{_formatNumber(vacationCost)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Kostnad helligdager</Text>
        <Text fz="sm">+ {_formatNumber(holidayCost)}</Text>
      </Group>


      <Divider />
      <Group py='.25rem' sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Total kostnad</Text>
        <Text fz="sm">= {_formatNumber(vacationCost + holidayCost)}</Text>
      </Group>
      <Divider />
    </>
  )
}


export default HolidayAndVacation 
