import * as React from 'react'
import './index.scss'

interface CicleProps {
  start: IPosition;
  end: IPosition;
}

export default function Line({ start, end }: CicleProps) {
  const left = start.x > end.x ? end.x : start.x
  const right = start.x > end.x ? start.x : end.x
  const top = start.y > end.y ? end.y : start.y
  const bottom = start.y > end.y ? start.y : end.y
  const width = right - left
  const height = bottom - top
  const x1 = start.x - left + 50
  const y1 = start.y - top + 50
  const x2 = end.x - left + 50
  const y2 = end.y - top + 50

  return (
    <svg className="line" width={width + 100} height={height + 100} style={{ left: left - 50, top: top - 50 }}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="grey" strokeWidth="1" />
    </svg>
  )
}
