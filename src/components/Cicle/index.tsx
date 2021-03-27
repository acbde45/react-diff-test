import * as React from 'react'
import './index.scss'

interface CicleProps {
  text: string;
  position: IPosition;
  children: React.ReactNode;
}

export default function Cicle({ text, position, children }: CicleProps) {
  React.useEffect(() => {
    console.log(`${text}_mounted`);
  }, []);
  
  return (
    <>
      <div className="cicle" style={{ left: position.x - 25, top: position.y - 25 }}>
        {text}
      </div>
      {children}
    </>
  )
}
