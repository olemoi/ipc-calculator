import { useAppContext } from "@/context/AppContext"
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Text, Divider, Group } from "@mantine/core";
import { _salaryAfterTax, _salaryTax } from "../Helpers/income.helpers";



const Salary = () => {

  const { general } = useAppContext();

  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md" pb='.5rem' style={{ 'fontSize': 20 }}>Lønn årlig</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Brutto lønn</Text>
        <Text fz="sm">{_formatNumber(general.salary)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Skatt på lønn</Text>
        <Text fz="sm">- {_formatNumber(_salaryTax(general.salary, general.salaryTaxRate))}</Text>
      </Group>


      <Divider />
      <Group py='.25rem' sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Utbetalt lønn</Text>
        <Text fz="sm">= {_formatNumber(_salaryAfterTax(general.salary, general.salaryTaxRate))}</Text>
      </Group>
      <Divider />
    </>
  )
}


export default Salary
