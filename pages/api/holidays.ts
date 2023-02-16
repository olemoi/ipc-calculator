
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let holidayResult = await fetch('http://localhost:5258/holidays');
  let holidaysJson = await holidayResult.json();
  res.status(200).json({ holidays: holidaysJson })
}
