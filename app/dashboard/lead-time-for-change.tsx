import { getDaysBetweenDates } from '@/lib/date-funcs';
import { TabsTrigger } from "@/components/ui/tabs";
import { LeadTimeForChangeTabTrigger } from '@/components/lead-time-for-change/tab-trigger';



interface LeadTimeForChange {
    ltfc: number;
    last: number;
    // Add other relevant fields from your API response here
  }

async function fetchLeadTimeForChange(appName: string, from: Date, to: Date): Promise<LeadTimeForChange[]> {
    const reqUrl = `${process.env.PELORUS_API_URL}/sdp/lead_time_for_change/${appName}?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(to.getTime() / 1000)}`;
    console.log(`LTFC Req URL: ${reqUrl}`);

    const response = await fetch(reqUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch Lead Time for Change data");
    }

    const data: LeadTimeForChange[] = await response.json();
    return data
}

export default async function LeadTimeForChange({ appName, dateRange }: { appName: string; dateRange: { from: Date; to: Date } }) {
    const data = await fetchLeadTimeForChange(appName, dateRange.from, dateRange.to);

    return (
        <LeadTimeForChangeTabTrigger appName={appName} data={data} />
    )
}
