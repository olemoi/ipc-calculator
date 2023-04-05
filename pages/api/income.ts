
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API_URL } from '@/constants/api';
import type { NextApiRequest, NextApiResponse } from 'next'


interface IPersonalIncome {
    salary: number,
    dividend: number,
    salaryTax: number,
    vacationStart: Date,
    vacationEnd: Date,
    year: number,
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let incomeResult = await fetch(`${API_URL}/income/personal`);
  let incomeJson = await incomeResult.json();
  res.status(200).json({ holidays: incomeJson})
}

