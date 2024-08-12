import { getDaysBetweenDates } from '@/lib/date-funcs';
import { TabsTrigger } from "@/components/ui/tabs";
import { LeadTimeForChangeTabTrigger } from '@/components/lead-time-for-change/tab-trigger';



interface LeadTimeForChange {
    ltfc: number;
    last: number;
    // Add other relevant fields from your API response here
  }

async function fetchLeadTimeForChange(appName: string, from: Date, to: Date): Promise<LeadTimeForChange[]> {
    const reqUrl = `${process.env.PELORUS_API_URL}/sdp/lead_time_for_change/${appName}?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(from.getTime() / 1000)}`;
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
        <TabsTrigger value="dora-ltfc" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-l border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-violet-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
            <LeadTimeForChangeTabTrigger appName={appName} data={data} />
        </TabsTrigger>
    )
}
