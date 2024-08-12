import type { NextApiRequest, NextApiResponse } from 'next';
import { getDaysBetweenDates } from '@/lib/date-funcs';

interface ChangeFailureRateData {
  issue_id: string;
  timestamp: number;
  // Add other relevant fields from your API response here
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { appName, to, from } = req.query;

  if (typeof appName !== 'string' || typeof to !== 'string' || typeof from !== 'string') {
    return res.status(400).json({ error: "Invalid query parameters" });
  }

  // Convert the query parameters to Date objects
  const toDate = new Date(to);
  const fromDate = new Date(from);

  const reqUrl = `${process.env.PELORUS_API_URL}/sdp/change_failure_rate/${appName}/data?range=${getDaysBetweenDates({to: toDate, from: fromDate})}d&start=${Math.floor(toDate.getTime() / 1000)}`;
  console.log(`CFR Req URL: ${reqUrl}`)

  try {
    const response = await fetch(reqUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch Change Failure Rate data");
    }

    const data: ChangeFailureRateData[] = await response.json();
    const sortedData = data.sort((d1, d2) => (d1.timestamp > d2.timestamp ? 1 : d1.timestamp < d2.timestamp ? -1 : 0));
    
    res.status(200).json(sortedData);
  } catch (error) {
    console.error('Error fetching Change Failure Rate data:', error);
    res.status(500).json({ error: error.message });
  }
}