
import ICompanyFinance from "@/features/Income/Models/Api/CompanyFinance";
import { NextApiRequest, NextApiResponse } from "next";




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  let incomeResponse = await fetch('http://localhost:5258/income/company', {
    method: req.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });
  const incomeJson: ICompanyFinance = await incomeResponse.json();
  res.status(200).json({ companyIncome: incomeJson })
}
