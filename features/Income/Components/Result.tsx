import { useAppContext } from "@/context/AppContext";
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Text, Divider, Group } from "@mantine/core"
import { _netTurnover, _pension, _resultAfterTax } from "../Helpers/income.helpers";
import { _profit, _profitAfterTax, _taxOnProfit } from "../Helpers/profit.helpers";



const Result = () => {


  const { general, companyFinance } = useAppContext();



  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md" pb='.5rem' style={{ 'fontSize': 20 }}>Resultat</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Overskudd</Text>
        <Text fz="sm">{_formatNumber(companyFinance.companyResult.profit)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Selskapsskatt</Text>
        <Text fz="sm">- {_formatNumber(companyFinance.companyResult.profitTax)}</Text>
      </Group>


      <Divider />
      <Group py='.25rem' sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Resultat etter skatt</Text>
        <Text fz="sm">= {_formatNumber(companyFinance.companyResult.profitAfterTax)}</Text>
      </Group>
      <Divider />
    </>
  )
}


export default Result
