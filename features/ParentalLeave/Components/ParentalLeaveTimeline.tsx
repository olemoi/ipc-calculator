import { API_URL } from "@/constants/api";
import { useAppContext } from "@/context/AppContext";
import { _formatDate } from "@/features/Common/Helpers/common.helpers";
import { Text, Timeline } from "@mantine/core"
import { useEffect, useState } from "react";
import { HolidayAndWorkDay, HolidaysAndWorkDays } from "../Models/Holidays";


const HolidayTimeLine = () => {
  const [data, setData] = useState<HolidaysAndWorkDays>({ numberOfBusinessDays: 0, holidaysAndNames: {} });
  const [loading, setLoading] = useState(false);

  const { leaveCalculations } = useAppContext();

  useEffect(() => {
    const fromDateQuery = `${leaveCalculations.startOfLeave.getFullYear()}-${leaveCalculations.startOfLeave.getMonth() + 1}-${leaveCalculations.startOfLeave.getDate()}`
    const toDateQuery = `${leaveCalculations.endOfLeave.getFullYear()}-${leaveCalculations.endOfLeave.getMonth() + 1}-${leaveCalculations.endOfLeave.getDate()}`
    setLoading(true);
    fetch(`${API_URL}/businessDays?fromDate=${fromDateQuery}&toDate=${toDateQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, [leaveCalculations.startOfLeave, leaveCalculations.endOfLeave])

  const values = ValuestoList(data.holidaysAndNames);

  return (
    <Timeline>
      {values.map(x => {
        return (
          <Timeline.Item title={x.title}>
            {x.date}
          </Timeline.Item>
        )
      })}
    </Timeline>
  )
}



function ValuestoList(data: any): HolidayAndWorkDay[] {
  let values: HolidayAndWorkDay[] = [];
  for (const k in data) {
    values.push({ title: data[k], date: _formatDate(new Date(k)) })
  }

  return values;

}

export default HolidayTimeLine
