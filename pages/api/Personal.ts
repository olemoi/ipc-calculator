import { API_URL } from "@/constants/api";
import IPersonalIncome from "@/features/Income/Models/Api/PersonalIncome";
import { NextApiRequest, NextApiResponse } from "next";


export interface IPersonalIncomeResponse {
  personalIncome: IPersonalIncome
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPersonalIncomeResponse>
) {
  // console.log('Personal income API called.')
  let incomeResponse = await fetch(`${API_URL}/income/personal`, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });

  const incomeJson: IPersonalIncome = await incomeResponse.json();
  // console.log('Api response: ', incomeJson)
  res.status(200).json({ personalIncome: incomeJson })
}
