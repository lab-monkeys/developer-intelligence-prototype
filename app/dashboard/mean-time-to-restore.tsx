import { getDaysBetweenDates } from '@/lib/date-funcs';
import { TabsTrigger } from "@/components/ui/tabs";
import { MeanTimeToRestoreTabTrigger } from '@/components/mean-time-to-restore/tab-trigger';



interface MeanTimeToRestore {
    ltfc: number;
    last: number;
    // Add other relevant fields from your API response here
  }

async function fetchMeanTimeToRestore(appName: string, from: Date, to: Date): Promise<MeanTimeToRestore[]> {
    const reqUrl = `${process.env.PELORUS_API_URL}/sdp/mean_time_to_restore/${appName}?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(to.getTime() / 1000)}`;
    console.log(`MTTR Req URL: ${reqUrl}`);

    const response = await fetch(reqUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch Mean Time to Restore data");
    }

    const data: MeanTimeToRestore[] = await response.json();
    return data
}

export default async function MeanTimeToRestore({ appName, dateRange }: { appName: string; dateRange: { from: Date; to: Date } }) {
    const data = await fetchMeanTimeToRestore(appName, dateRange.from, dateRange.to);

    return (
        <MeanTimeToRestoreTabTrigger data={data} />
    )
}
