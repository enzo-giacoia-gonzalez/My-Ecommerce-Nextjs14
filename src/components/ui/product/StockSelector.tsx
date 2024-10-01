'use client'

interface Props {
    count: number
    onCountChanged: (count: number) => void
}


export const StockSelector = ({count, onCountChanged}: Props) => {
  return (
    <div className="space-x-5 mt-7 w-full">
        <button onClick={() => onCountChanged(count + 1)} className="rounded-md border p-2 w-9">+</button>
        <span  className="text-black p-2">{count}</span>
        <button onClick={() => onCountChanged(count - 1)} className="rounded-md border p-2 w-9">-</button>
    </div>
  )
}
