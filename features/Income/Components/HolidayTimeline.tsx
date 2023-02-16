
import { API_URL } from "@/constants/api";
import { useAppContext } from "@/context/AppContext";
import { _formatDate } from "@/features/Common/Helpers/common.helpers";
import { HolidayAndWorkDay } from "@/features/ParentalLeave/Models/Holidays";
import useStyles from "@/styles/custom/InputStyles";
import { Divider, Group, Text, Timeline } from "@mantine/core"
import { useEffect, useState } from "react";
import { TimelineWithVacation } from "../Models/TimelineWithVacation";


const HolidayTimeLineYear = () => {
  const [data, setData] = useState<TimelineWithVacation>({ numberOfHolidays: 0, numberOfBusinessDays: 0, numberOfVacationDays: 0, holidaysAndNames: {} });
  const [loading, setLoading] = useState(false);

  const { common, updateCommon } = useAppContext();

  useEffect(() => {
    const fromDateQuery = `${common.vacationStart.getFullYear()}-${common.vacationStart.getMonth() + 1}-${common.vacationStart.getDate()}`
    const toDateQuery = `${common.vacationEnd.getFullYear()}-${common.vacationEnd.getMonth() + 1}-${common.vacationEnd.getDate()}`
    setLoading(true);
    fetch(`${API_URL}/timeline?year=${common.vacationStart.getFullYear()}&vacationStart=${fromDateQuery}&vacationEnd=${toDateQuery}`)
      .then((res) => res.json())
      .then((data) => {
        updateCommon({ ...common, totalHolidays: data.numberOfHolidays, totalBusinessDays: data.numberOfBusinessDays, totalVacationDays: data.numberOfVacationDays })
        setData(data);
        setLoading(false);
      })
  }, [common.vacationStart, common.vacationEnd])

  const values = ValuestoList(data.holidaysAndNames);
  const { classes } = useStyles();

  return (
    <>
      <Timeline>
        {values.map(x => {
          return (
            <Timeline.Item title={x.title}>
              {x.date}
            </Timeline.Item>
          )
        })}
      </Timeline>
    </>
  )
}



function ValuestoList(data: any): HolidayAndWorkDay[] {
  let values: HolidayAndWorkDay[] = [];
  for (const k in data) {
    values.push({ title: data[k], date: _formatDate(new Date(k)) })
  }

  return values;

}

export default HolidayTimeLineYear
