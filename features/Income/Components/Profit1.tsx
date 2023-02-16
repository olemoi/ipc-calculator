import { useAppContext } from "@/context/AppContext"
import { _formatNumber } from "@/features/Common/Helpers/common.helpers"
import { Text, Group, Divider } from "@mantine/core"
import { _employerTax, _netTurnover, _pension, _turnover } from "../Helpers/income.helpers"
import { _profit } from "../Helpers/profit.helpers"



const Profit1 = () => {

  const { general } = useAppContext();


  let netTurnover = _netTurnover(general.yearlyWorkHours, general.hourlyRate, general.brokerComission)
  let pension = _pension(general.salary, general.pensionPercentage)
  let employerTaxSalary = _employerTax(general.salary)
  let employerTaxPension = _employerTax(pension)
  let profit = _profit(netTurnover, general.salary, pension, general.generalExpenses)


  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md" pb='.5rem' style={{ 'fontSize': 20 }}>Overskudd</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Netto omsetning</Text>
        <Text fz="sm">{_formatNumber(netTurnover)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Lønn</Text>
        <Text fz="sm">- {_formatNumber(general.salary)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Pensjon</Text>
        <Text fz="sm">- {_formatNumber(pension)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Arbeidsgiver avgift</Text>
        <Text fz="sm">- {_formatNumber(employerTaxSalary + employerTaxPension)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Andre utgifter</Text>
        <Text fz="sm">- {_formatNumber(general.generalExpenses)}</Text>
      </Group>
      <Divider />


      <Group py='.25rem' sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Overskudd</Text>
        <Text fz="sm">= {_formatNumber(profit)}</Text>
      </Group>
      <Divider />
    </>
  )
}


export default Profit1
