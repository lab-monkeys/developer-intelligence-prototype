export const DeploymentFrequencyTooltip = ({ active, payload, label }) => {

  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-4 w-40 bg-white p-4 rounded-2xl shadow dark:bg-neutral-800">
        <div className="text-black text-lg font-semibold tracking-tight dark:text-white">{label}</div>
        <div className="flex flex-col gap-2">
          {payload.map((data, index) => (
            <div key={index}>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">{data.name}</div>
              <div className="text-sm text-black font-semibold dark:text-white">{data.value instanceof Array ? data.value.join('-') : data.value} deployments</div>              
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}