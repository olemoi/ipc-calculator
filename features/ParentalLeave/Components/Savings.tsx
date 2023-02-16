import { API_URL } from "@/constants/api";
import { useAppContext } from "@/context/AppContext";
import { _formatNumber } from "@/features/Common/Helpers/common.helpers";
import { _employerTax } from "@/features/Income/Helpers/income.helpers";
import { Center, Loader, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { _businessDaysDuringLeave, _endOfLeave, _startOfLeave } from "../Helpers/absence.helpers";


const SavingsPlan = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { leaveCalculations, leave } = useAppContext();

  let today = new Date();
  let startOfLeave = leaveCalculations.startOfLeave;

  useEffect(() => {
    const fromDateQuery = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    const toDateQuery = `${startOfLeave.getFullYear()}-${startOfLeave.getMonth() + 1}-${startOfLeave.getDate()}`

    setLoading(true);
    fetch(`${API_URL}/businessDaysMonthly?fromDate=${fromDateQuery}&toDate=${toDateQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, [leaveCalculations.startOfLeave])

  const values = ValuestoList(data);

  let sumIncome = 0;
  let sumExpenses = 0;
  let sumResult = 0;

  if (loading === true) {
    return (
      <Center>
        <Loader />
      </Center>
    )
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Periode</th>
            <th>Inntekter</th>
            <th>Utgifter</th>
            <th>Resultat</th>
          </tr>
        </thead>
        <tbody>
          {values.map((x: test) => {
            const income = Number(x.workDays) * leave.hourlyRate * 7.5;
            const monthlySalary = leave.desiredYearlySalary / 12;
            const employerTax = _employerTax(monthlySalary)

            sumIncome += income;
            sumExpenses += (monthlySalary + employerTax)
            sumResult += (income - monthlySalary - employerTax)
            return (
              <>
                <tr>
                  <td>{x.month}</td>
                  <td>{_formatNumber(Number(x.workDays) * leave.hourlyRate * 7.5)}</td>
                  <td>{_formatNumber(monthlySalary + employerTax)}</td>
                  <td>{_formatNumber(income - monthlySalary - employerTax)}</td>
                </tr>
              </>
            )
          })}

          <tr>
            <td>Sum</td>
            <td>{_formatNumber(sumIncome)}</td>
            <td>{_formatNumber(sumExpenses)}</td>
            <td>{_formatNumber(sumResult)}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

type test = {
  month: string;
  workDays: string;
}

function ValuestoList(data: any): test[] {
  let values: test[] = [];
  for (const k in data) {
    values.push({ month: k, workDays: data[k] })
  }


  return values;

}


export default SavingsPlan;
