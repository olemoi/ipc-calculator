import { Table } from "@mantine/core"


const PaymentPlan = () => {

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Periode</th>
            <th>Lønn</th>
            <th>Skatt</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          <tr key="test">
            <td>Mars 2024</td>
            <td>27 000 kr</td>
            <td>13 000 kr</td>
            <td>276 000 kr</td>
          </tr>
        </tbody>
      </Table>

    </>
  )
}

export default PaymentPlan
