export async function getApps() {
  const response = await fetch(process.env.PELORUS_API_URL + "/sdp/apps?range=1w")
    if (!response.ok) {
    throw new Error('Failed to fetch list of Apps from Pelorus')
    }

    return response.json()
}

export async function getLTFC( {appName} ) {
    const response = await fetch(process.env.PELORUS_API_URL + "/sdp/lead_time_for_change/" + appName + "?range=1w")

    if (!response.ok) {
        throw new Error("Failed to fetch Lead Time For Change data for: " + appName)
        }
    
        return response.json()
}

export async function getData() {
    const response = await fetch('https://api.npoint.io/ee46484033b5d4d4658e')
  
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return response.json()
  }
