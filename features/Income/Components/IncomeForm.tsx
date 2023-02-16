import { useAppContext } from "@/context/AppContext"
import { _formatDate } from "@/features/Common/Helpers/common.helpers";
import useStyles from "@/styles/custom/InputStyles";
import { Text, NumberInput, Modal, Button, Group, useMantineTheme } from "@mantine/core"
import { RangeCalendar } from "@mantine/dates";
import { useHover } from "@mantine/hooks";
import { useState } from "react";


const IncomeForm = () => {
  const { general, updateGeneral } = useAppContext();
  const { common, updateCommon } = useAppContext();
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const theme = useMantineTheme();

  const { hovered, ref } = useHover();

  const workHoursDesc = () => {
    return (
      <Text>
        <div ref={ref} style={hovered ? { 'cursor': 'pointer', 'textDecoration': 'underline', 'display': 'inline' } : { 'display': 'inline' }} onClick={() => updateGeneral({ ...general, yearlyWorkHours: common.totalBusinessDays * 7.5 })}>Sett til resterende arbeidstimer i inneværende år</div>
      </Text >
    )
  }

  return (
    <>
      <div>
        <NumberInput
          label='Timerate'
          value={general.hourlyRate}
          onChange={(val) => updateGeneral({ ...general, hourlyRate: val === undefined ? 0 : val })}
        />
        <NumberInput
          label='Arbeidstimer'
          value={general.yearlyWorkHours}
          description={workHoursDesc()}
          onChange={(val) => {
            let temp = val === undefined ? 0 : val;
            if (temp === 0) {
              temp = common.totalBusinessDays * 7.5;
            }


            updateGeneral({ ...general, yearlyWorkHours: temp })
          }
          }
        />
        <NumberInput
          label='Utgifter'
          value={general.generalExpenses}
          onChange={(val) => updateGeneral({ ...general, generalExpenses: val === undefined ? 0 : val })}
        />
        <NumberInput
          label='Utbytte'
          value={general.dividend}
          onChange={(val) => updateGeneral({ ...general, dividend: val === undefined ? 0 : val })}
        // max={_maximumDividend()}
        />
        <NumberInput
          label='Lønn'
          value={general.salary}
          onChange={(val) => {
            updateGeneral({ ...general, salary: val === undefined ? 0 : val })
          }}
        // max={_maximumSalary()}
        />
        <NumberInput
          label='Broker provisjon'
          value={general.brokerComission}
          onChange={(val) => updateGeneral({ ...general, brokerComission: val === undefined ? 0 : val })}
        />

        <NumberInput
          label='Inntektsskatt'
          value={general.salaryTaxRate}
          onChange={(val) => updateGeneral({ ...general, salaryTaxRate: val === undefined ? 0 : val })}
        />

        <NumberInput
          label='Pensjon'
          value={general.pensionPercentage}
          onChange={(val) => updateGeneral({ ...general, pensionPercentage: val === undefined ? 0 : val })}
          max={7}
        />

        <Group position="left" my={theme.spacing.md}>
          <Button onClick={() => setCalendarOpen(true)}>Legg til ferie</Button>
          <Button onClick={() => updateCommon({ ...common, vacationStart: new Date(), vacationEnd: new Date() })}>Nullstill ferie</Button>
        </Group>

        <Modal opened={calendarOpen} onClose={() => setCalendarOpen(false)}>
          <RangeCalendar
            value={[common.vacationStart, common.vacationEnd]}
            onChange={(value) => updateCommon({ ...common, vacationStart: value[0] ?? common.vacationStart, vacationEnd: value[1] ?? common.vacationEnd })}
          />
        </Modal>

      </div>
    </>
  )
}

export default IncomeForm
