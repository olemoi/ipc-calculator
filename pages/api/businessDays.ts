

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API_URL } from '@/constants/api';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let holidayResult = await fetch(`${API_URL}/businessDays`, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json'
    },
    query: req.query,
  });
  let holidaysJson = await holidayResult.json();
  res.status(200).json({ holidays: holidaysJson })
}
