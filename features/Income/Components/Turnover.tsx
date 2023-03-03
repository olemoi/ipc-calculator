import { useAppContext } from "@/context/AppContext"
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Text, Group, Divider } from "@mantine/core"
import { _pension, _result, _turnover } from "../Helpers/income.helpers";


const Turnover = () => {


  const { companyFinance } = useAppContext();


  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md" pb='.5rem' style={{ 'fontSize': 20 }}>Omsetning</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Brutto Omsetning</Text>
        <Text fz="sm">{_formatNumber(companyFinance.companyTurnover.grossTurnover)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Provisjon</Text>
        <Text fz="sm">- {_formatNumber(companyFinance.companyTurnover.brokerCommission)}</Text>
      </Group>
      <Divider />
      <Group py='.25rem' sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Netto Omsetning</Text>
        <Text fz="sm">= {_formatNumber(companyFinance.companyTurnover.netTurnover)}</Text>
      </Group>
      <Divider />
    </>
  )
}


export default Turnover
