import { useAppContext } from "@/context/AppContext"
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Text, Group, Divider } from "@mantine/core"
import { _pension, _result, _turnover } from "../Helpers/income.helpers";


const Turnover = () => {


  const { general } = useAppContext();

  const turnover = _turnover(general.yearlyWorkHours, general.hourlyRate)
  const comission = turnover * general.brokerComission / 100;

  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md" pb='.5rem' style={{ 'fontSize': 20 }}>Omsetning</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Brutto Omsetning</Text>
        <Text fz="sm">{_formatNumber(turnover)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Provisjon</Text>
        <Text fz="sm">- {_formatNumber(comission)}</Text>
      </Group>
      <Divider />
      <Group py='.25rem' sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Netto Omsetning</Text>
        <Text fz="sm">= {_formatNumber(turnover - comission)}</Text>
      </Group>
      <Divider />
    </>
  )
}


export default Turnover
