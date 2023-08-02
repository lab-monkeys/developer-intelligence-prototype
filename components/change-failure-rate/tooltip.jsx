export const ChangeFailureRateTooltip = ({ active, payload, label }) => {

  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-4 w-40 bg-white p-4 rounded-2xl shadow">
        <div className="text-black text-lg font-semibold tracking-tight">{label}</div>
        <div className="flex flex-col gap-2">
          {payload.map((data, index) => (
            <div key={index}>
              <div className="text-xs text-zinc-600">{data.name}</div>
              <div className="text-sm text-black font-semibold">{data.value instanceof Array ? data.value.join('-') : data.value}</div>              
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}