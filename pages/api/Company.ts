
import { API_URL } from "@/constants/api";
import ICompanyFinance from "@/features/Income/Models/Api/CompanyFinance";
import { NextApiRequest, NextApiResponse } from "next";

export interface ICompanyFinanceResponse {
  companyIncome: ICompanyFinance,
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICompanyFinanceResponse>
) {

  let incomeResponse = await fetch(`${API_URL}/income/company`, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });
  const incomeJson: ICompanyFinance = await incomeResponse.json();
  console.log('Company response', incomeJson)
  res.status(200).json({ companyIncome: incomeJson })
}
