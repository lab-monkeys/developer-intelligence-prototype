// components/deploymentFrequency.js
import { useState, useEffect } from 'react';
import { getDaysBetweenDates } from '@/lib/date-funcs';

export default function useMeanTimeToRestoreData(appName, dateRange) {
    const [mttrData, setMttrData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = `${process.env.NEXT_PUBLIC_PELORUS_API_URL}/sdp/mean_time_to_restore/${appName}/data?range=${getDaysBetweenDates(dateRange)}d&start=${dateRange.to.getTime() / 1000}`;
                console.log(req)
                const response = await fetch(req);
                const data = await response.json();
                const sortedData = data.sort((d1, d2) => (d1.timestamp > d2.timestamp) ? 1 : (d1.timestamp < d2.timestamp) ? -1 : 0);
                setMttrData(sortedData);
            } catch (error) {
                console.error('Error fetching deployment frequency data:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchData();
    }, [appName, dateRange]);

    return { mttrData, loading }; // Return loading state along with dfData
}

export function useMeanTimeToRestore(appName, dateRange) {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = `${process.env.NEXT_PUBLIC_PELORUS_API_URL}/sdp/mean_time_to_restore/${appName}?range=${getDaysBetweenDates(dateRange)}d&start=${dateRange.to.getTime() / 1000}`;
                const response = await fetch(req);
                const data = await response.json()
                setResponse(data)
            } catch(error) {
                console.error('Error fetching deployment frequency data:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [dateRange, appName]);
  
    return { response, loading }; // Return loading state along with cfrData
}
