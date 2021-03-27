import * as React from 'react'
import './index.scss'

interface IConsoleProps {
  params: string[];
  onChange: (op: string) => void,
}

export default function Console(props: IConsoleProps) {
  const { params, onChange } = props;

  return (
    <div className="console">
      {params.map(op => (
        <button key={op} onClick={() => onChange(op)}>
          {op}
        </button>
      ))}
    </div>
  )
}
