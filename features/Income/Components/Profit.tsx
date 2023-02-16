import { useAppContext } from "@/context/AppContext"
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { Group, Text } from "@mantine/core"
import { _capitalAfterDividend, _result, _resultAfterTax } from "../Helpers/income.helpers";


const Profit = () => {

  const { general } = useAppContext();
  let result = _result(general.salary, general.yearlyWorkHours, general.hourlyRate, general.pensionPercentage, general.generalExpenses)


  return (
    <>

      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Overskudd</Text>
        <Text fz="sm">
          {_formatNumber(result)} ,-
        </Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Overskudd etter skatt</Text>
        <Text fz="sm">{_formatNumber(_resultAfterTax(result))} ,-</Text>
      </Group>
      <Group sx={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <Text fz="md">Kapital etter utbytte</Text>
        <Text fz="sm">{_formatNumber(_capitalAfterDividend(result, general.dividend))} ,-</Text>
      </Group>
    </>
  )
}


export default Profit
