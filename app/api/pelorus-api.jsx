import { getDaysBetweenDates } from '@/lib/date-funcs';

// Get initial list of Apps that Pelorus has data for
export async function getApps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_PELORUS_API_URL}/sdp/apps?range=1w`)
  if (!response.ok) {
    throw new Error('Failed to fetch list of Apps from Pelorus')
  }
  return response.json()
}

// Lead time for change
export async function fetchLeadTimeForChangeData(appName, dateRange) {
  const req = `${process.env.PELORUS_API_URL}/sdp/lead_time_for_change/${appName}/data?range=${getDaysBetweenDates(dateRange)}d&start=${dateRange.to.getTime() / 1000}`;
  console.log(req)
  const response = await fetch(req);

  if (!response.ok) {
    throw new Error("Failed to fetch Lead Time for Change data");
  }

  const data = await response.json();
  return data.sort((d1, d2) => (d1.timestamp > d2.timestamp) ? 1 : (d1.timestamp < d2.timestamp) ? -1 : 0);
}

// Change Failure Rate
export async function fetchChangeFailureRateData(appName, dateRange) {
  const req = `${process.env.PELORUS_API_URL}/sdp/change_failure_rate/${appName}/data?range=${getDaysBetweenDates(dateRange)}d&start=${Math.floor(dateRange.to.getTime() / 1000)}`;
  console.log(req)
  const response = await fetch(req);
  
  if (!response.ok) {
    throw new Error("Failed to fetch Change Failure Rate data");
  }

  const data = await response.json();
  return data.sort((d1, d2) => (d1.timestamp > d2.timestamp ? 1 : d1.timestamp < d2.timestamp ? -1 : 0));
}

export function getDORA(appName) {

  const dora = {mttr: 0, cfr: 0, df: 0, ltfc: 0}
  const cfr = getCFR(appName)
  dora.cfr = cfr.cfr
  const df = getDF(appName)
  dora.df = df.df
  const mttr = getMTTR(appName)
  dora.mttr = mttr.mttr
  const ltfc = getLTFC(appName)
  dora.ltfc = ltfc.ltfc
  return dora
}