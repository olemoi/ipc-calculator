import { useAppContext } from "@/context/AppContext";
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Group, Text } from "@mantine/core";
import 'dayjs/locale/nb'
import { _employerTax, _pension, _salaryAfterTax, _salaryExpenses, _salaryTax, _turnover } from "../Helpers/income.helpers";


const Income = () => {

  const { general } = useAppContext();

  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Omsetning</Text>
        <Text fz="sm">{_formatNumber(_turnover(general.yearlyWorkHours, general.hourlyRate))} ,-</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Lønn</Text>
        <Text fz="sm">{_formatNumber(general.salary)} ,-</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Lønn etter skatt ({general.salaryTaxRate}%)</Text>
        <Text fz="sm">{_formatNumber(_salaryAfterTax(general.salary, general.salaryTaxRate))} ,-</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Skatt på lønn ({general.salaryTaxRate}%)</Text>
        <Text fz="sm">{_formatNumber(_salaryTax(general.salary, general.salaryTaxRate))} ,-</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Arbeidsgiveravgift</Text>
        <Text fz="sm">{_formatNumber(_employerTax(general.salary))} ,-</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Pensjon</Text>
        <Text fz="sm">{_formatNumber(_pension(general.salary, general.pensionPercentage))} ,-</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Totale lønnskostnader</Text>
        <Text fz="sm">{_formatNumber(_salaryExpenses(general.salary, general.pensionPercentage))} ,-</Text>
      </Group>
    </>
  )


}


export default Income
