import { getDaysBetweenDates } from '@/lib/date-funcs';
import { DeploymentFrequencyTabTrigger } from '@/components/deployment-frequency/tab-trigger';

interface DeploymentFrequency {
    df: number;
    last: number;
    // Add other relevant fields from your API response here
  }

async function fetchDeploymentFrequency(appName: string, from: Date, to: Date): Promise<DeploymentFrequency[]> {
    const reqUrl = `${process.env.PELORUS_API_URL}/sdp/deployment_frequency/${appName}?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(to.getTime() / 1000)}`;
    console.log(`LTFC Req URL: ${reqUrl}`);

    const response = await fetch(reqUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch Deployment Frequency numbers");
    }

    const data: DeploymentFrequency[] = await response.json();
    return data
}

export default async function DeploymentFrequency({ appName, dateRange }: { appName: string; dateRange: { from: Date; to: Date } }) {
    const data = await fetchDeploymentFrequency(appName, dateRange.from, dateRange.to);

    return (
        <DeploymentFrequencyTabTrigger appName={appName} data={data} dateRange={dateRange} />
    )
}
