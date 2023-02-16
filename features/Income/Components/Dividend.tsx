import { useAppContext } from "@/context/AppContext"
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Group, Text } from "@mantine/core"
import { _dividendAfterTax } from "../Helpers/dividend.helpers";


const Dividend = () => {


  const { general } = useAppContext();

  return (
    <>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Utbytte</Text>
        <Text fz="sm">{_formatNumber(general.dividend)} ,-</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Utbytte etter skatt</Text>
        <Text fz="sm">{_formatNumber(_dividendAfterTax(general.dividend))} ,-</Text>
      </Group>
    </>
  )
}


export default Dividend
