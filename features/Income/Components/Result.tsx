import { useAppContext } from "@/context/AppContext";
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Text, Divider, Group } from "@mantine/core"
import { _netTurnover, _pension, _resultAfterTax } from "../Helpers/income.helpers";
import { _profit, _profitAfterTax, _taxOnProfit } from "../Helpers/profit.helpers";



const Result = () => {


  const { general } = useAppContext();
  let netTurnover = _netTurnover(general.yearlyWorkHours, general.hourlyRate, general.brokerComission)
  let pension = _pension(general.salary, general.pensionPercentage)
  let profit = _profit(netTurnover, general.salary, pension, general.generalExpenses)


  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md" pb='.5rem' style={{ 'fontSize': 20 }}>Resultat</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Overskudd</Text>
        <Text fz="sm">{_formatNumber(profit)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Selskapsskatt</Text>
        <Text fz="sm">- {_formatNumber(_taxOnProfit(profit))}</Text>
      </Group>


      <Divider />
      <Group py='.25rem' sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Resultat etter skatt</Text>
        <Text fz="sm">= {_formatNumber(_profitAfterTax(profit))}</Text>
      </Group>
      <Divider />
    </>
  )
}


export default Result
