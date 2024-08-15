import { getDaysBetweenDates } from '@/lib/date-funcs';
import { TabsTrigger } from "@/components/ui/tabs";
import { ChangeFailureRateTabTrigger } from '@/components/change-failure-rate/tab-trigger';



interface ChangeFailureRate {
    cfr: number;
    last: number;
    // Add other relevant fields from your API response here
  }

async function fetchChangeFailureRate(appName: string, from: Date, to: Date): Promise<ChangeFailureRate[]> {
    const reqUrl = `${process.env.PELORUS_API_URL}/sdp/change_failure_rate/${appName}?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(to.getTime() / 1000)}`;
    console.log(`CFR Req URL: ${reqUrl}`);

    const response = await fetch(reqUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch Mean Time to Restore data");
    }

    const data: ChangeFailureRate[] = await response.json();
    return data
}

export default async function ChangeFailureRate({ appName, dateRange }: { appName: string; dateRange: { from: Date; to: Date } }) {
    const data = await fetchChangeFailureRate(appName, dateRange.from, dateRange.to);

    return (
        <ChangeFailureRateTabTrigger data={data} />
    )
}
