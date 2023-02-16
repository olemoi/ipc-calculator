

import { UTBYTTESKATT } from "@/constants/tax-rates";
import { useAppContext } from "@/context/AppContext"
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Text, Divider, Group } from "@mantine/core";
import { _salaryAfterTax, _salaryTax } from "../Helpers/income.helpers";



const Dividend1 = () => {

  const { general } = useAppContext();

  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md" pb='.5rem' style={{ 'fontSize': 20 }}>Utbytte</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Brutto utbytte</Text>
        <Text fz="sm">{_formatNumber(general.dividend)}</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Skatt på utbytte</Text>
        <Text fz="sm">- {_formatNumber(general.dividend * UTBYTTESKATT)}</Text>
      </Group>


      <Divider />
      <Group py='.25rem' sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Utbetalt utbytte</Text>
        <Text fz="sm">= {_formatNumber(general.dividend * (1 - UTBYTTESKATT))}</Text>
      </Group>
      <Divider />
    </>
  )
}


export default Dividend1
