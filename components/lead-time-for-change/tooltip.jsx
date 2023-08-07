export const LeadTimeForChangeTooltip = ({ active, payload, label }) => {

  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-4 w-40 bg-white p-4 rounded-2xl shadow dark:bg-neutral-800">
        <div className="text-black text-lg font-semibold tracking-tight dark:text-white">{label}, 2023</div>
        <div className="flex flex-col gap-2">
          {payload.map((data, index) => (
            <div key={index}>
              <div className="text-xs text-neutral-600 dark:text-neutral-400"><span className="inline-block w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: data.color }}></span>{data.name}</div>
              <div className="text-sm text-black font-semibold dark:text-white">{data.value instanceof Array ? data.value.join('-') : data.value} days</div>              
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}