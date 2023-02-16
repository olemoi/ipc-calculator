import { useAppContext } from "@/context/AppContext"
import { Text, Button, Grid, Modal, NumberInput, Radio, Slider, Switch, Center } from "@mantine/core"
import { DatePicker, RangeCalendar } from "@mantine/dates";
import { useState } from "react";


const ParentalLeaveForm = () => {

  const [opened, setOpened] = useState<boolean>(false);
  const [range, setRange] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  const { leave, updateLeave } = useAppContext();

  return (
    <>
      <NumberInput
        label='Ønsket lønn'
        value={leave.desiredYearlySalary}
        step={10_000}
        onChange={(val) => updateLeave({ ...leave, desiredYearlySalary: val === undefined ? 0 : val })}
      />
      <NumberInput
        label='Timerate'
        value={leave.hourlyRate}
        step={10}
        onChange={(val) => updateLeave({ ...leave, hourlyRate: val === undefined ? 0 : val })}
      />


      <NumberInput
        label='Start kapital'
      // value={leave.hourlyRate}
      // onChange={(val) => updateLeave({ ...leave, hourlyRate: val === undefined ? 0 : val })}
      />

      <DatePicker
        locale='nb'
        placeholder='Jeg starter å jobbe'
        label='Start dato'
      // onChange={(date) => updateLeave({ ...leave, dueDate: date === null ? new Date() : date })}
      />

      <DatePicker
        withAsterisk
        locale='nb'
        placeholder='Velg dato'
        label='Termindato'
        defaultValue={leave.dueDate}
        onChange={(date) => updateLeave({ ...leave, dueDate: date === null ? new Date() : date })}
      />



      <Radio.Group
        name="momOrDadLeave"
        label="Permisjonstype"
        withAsterisk
        style={{ marginTop: '1rem' }}
        defaultValue={leave.momOrDadLeave}
        onChange={(value) => updateLeave({ ...leave, momOrDadLeave: value })}
      >
        <Radio value="mom" label="Mor" />
        <Radio value="dad" label="Far/Medmor" />
      </Radio.Group>

      <NumberInput
        label='Antall av fellesuker'
        value={leave.weeksOfSharedLeave}
        onChange={(val) => updateLeave({ ...leave, weeksOfSharedLeave: val === undefined ? 0 : val })}
        max={16}
      />

      <Switch
        label="Omsorgspermisjon"
        style={{ 'marginTop': '1rem' }}
        checked={leave.careLeave}
        disabled={leave.momOrDadLeave === 'mom'}
        onChange={(value) => {
          updateLeave({ ...leave, careLeave: value.currentTarget.checked })
        }}
      />


      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Planlagt ferie"
      >
        <RangeCalendar value={range} onChange={(value) => setRange(value)}></RangeCalendar>
      </Modal>

      <Button
        onClick={() => setOpened(true)}
        mt={'1rem'}
      >
        Legg til ferie
      </Button>

    </>
  )
}


export default ParentalLeaveForm;
